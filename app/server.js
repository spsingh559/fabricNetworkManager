var path = require('path');
var webpack = require('webpack');
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('./webpack.config');
var index = require('./webserver/routes/index');
var users = require('./webserver/routes/users');
var app = express();
var compiler = webpack(config);
var fs=require('fs');
var cors = require('cors');


var multipart = require('connect-multiparty');

var multipartMiddleware = multipart();
app.options('*', cors());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', express.static(path.join(__dirname, './webclient/')));


app.post('/StoreFile',multipartMiddleware, function (req, res, next) {
    console.log(req.files);
    //logger.info('<<<<<<<<<<<<<<<<< READ AND WRITE A FILE >>>>>>>>>>>>>>>>>');
    var file = req.files.file;
    //console.log('------------shipment_id is--------------'+req.body.shipment_id);
    console.log(req.files.file);
    if (!file) {
    res.json(getErrorMessage('\'file\''));
    return;
    }
    var fileName = req.files.file.name;
    console.log(fileName)
    var tempPath = file.path;
    var relative_target_path = './Documents/';
    var target_path_wo_fileName = path.resolve(relative_target_path).replace(/\\/g, '/') + '/';
    var target_path = target_path_wo_fileName + fileName;
    fs.readFile(tempPath, function (err, data) {
    if (err) {
    console.log("Error in readFile" + err);
    res.json({
    "message": "Error in readFile " + err,
    "code": "500"
    });
    } else {
    fs.writeFile(target_path, data, function (err) {
    //console.log('data::'+data);
    if (err) {
    console.log("File not uploaded");
    console.log("Error in writeFile " + err);
    console.log("Document upload: Error while writing Document: " + target_path);
    res.json({
    "message": "Error in writeFile " + err,
    "code": "500"
    });
    } else {
    console.log("FileSystem document upload successful at ");
    res.json({
    "message": "File uploaded Successfully at " + target_path,
    "code": "200"
    });
    }
    });
    }
    });
    }); 


//Mongoose
// var db = 'mongodb://localhost/test';
// mongoose.connect(db);

// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//     console.log("connnected with mongo");
// });

 

//Ruotes
app.use('/', index);
// app.use('/api/v1/',require('./router'));


app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
    stats: {
        colors: true
    },
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
}));

app.use(webpackHotMiddleware(compiler));



//Listening to port 8081
app.listen(8080, '0.0.0.0', function(err, result) {
    if (err) {
        console.error("Error ", err);
    }

    console.log("Server started at 8080");
});
