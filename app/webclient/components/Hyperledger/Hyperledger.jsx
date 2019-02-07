import React from 'react';
import {Grid,Row,Col} from 'react-bootstrap';
import Paper from 'material-ui/Paper';
// import {write} from "node-yaml";
// var yaml = require('write-yaml');
// var writeData = require('write-data');
import Axios from 'axios';
import LinearProgress from 'material-ui/LinearProgress';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import CircularProgress from 'material-ui/CircularProgress';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip'

//  Import Component
import InstallChaincode from './InstallChaincode';
import InstantiateChaincode from './InstantiateChaincode';

const style = {
    height: 400,
    width: 300,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
    overflowY:"auto"
  };
  

export default class Hyperledger extends React.Component{

    state={
        enrollViewStatus:false,
        userName:'',
        orgName:'',
        channelPath:'',
        channelName:'',
        createChannelViewStatus:false,
        animating:false,
        joinChannelViewStatus:false,
        peerName:'',
        peerArr:[],
        disableState:true
    }

//     componentDidMount=()=>{
//         var data = {language: 'node_js', node_js: ['0.10', '0.12']};
 
// // async
// writeData('.travis.yml', data, function(err) {
//   // do stuff with "err"
// });
 
// sync
// writeData.sync('.travis.yml', data);
//     }

enroll=()=>{
    // alert('hi');
    var obj={
        username:this.state.userName,
        orgName:this.state.orgName
    }
    console.log(obj);

    // console.log('button clicked');

    Axios({
        method:'post',
        url:'http://13.126.41.18:8080/users',
        data:obj,
        headers: {  
            'Content-Type': 'application/json'
        }
        })
        .then((data) => {
            console.log(data);
            sessionStorage.setItem('userLoginDetails',JSON.stringify(data.data));
            alert('User is enrolled in ' + obj.orgName);
        })
        .catch((error) => {
            console.log(error);
            console.log(error+"error in get Trade");
            });

            this.setState({enrollViewStatus:false});

}

createChannel=()=>{
    let retrievedUserDetails= JSON.parse(sessionStorage.getItem('userLoginDetails'));
    console.log(retrievedUserDetails);
    Axios({
      method:'post',
      url:'http://13.126.41.18:8080/channels',
      data:{ channelName:this.state.channelName,
        channelConfigPath:"../artifacts/channel/"+ this.state.channelName+".tx"
      },
      headers: {  
          'Authorization': 'Bearer '+ retrievedUserDetails.token,
          'Content-Type': 'application/json'
      }
      })
      .then((data) => {
          alert('created channel');
        console.log(data);
        // sessionStorage.setItem('userLoginDetails',JSON.stringify(data.data));
        // alert('successful sent request to server');
    })
    .catch((error) => {
        alert('channel already created');
        console.log(error);
        console.log(error+"error in get Trade");
        });

        this.setState({createChannelViewStatus:false});
}

joinChannel=()=>{
    let retrievedUserDetails= JSON.parse(sessionStorage.getItem('userLoginDetails'));
    console.log(retrievedUserDetails);
    Axios({
      method:'post',
      url:'http://13.126.41.18:8080/channels/mychannel/peers ',
      data:{  "peers": this.state.peerArr},
      headers: {  
          'Authorization': 'Bearer '+ retrievedUserDetails.token,
          'Content-Type': 'application/json'
      }
      })
      .then((data) => {
          alert('join channel');
        console.log(data);
        // sessionStorage.setItem('userLoginDetails',JSON.stringify(data.data));
        // alert('successful sent request to server');
    })
    .catch((error) => {
        console.log(error);
        console.log(error+"error in joining channel");
        });
        this.setState({peerName:''});
        
}

enrollViewStatus=()=>{
    this.setState({enrollViewStatus:true});
}
createChannelViewStatus=()=>{
    this.closeActivityIndicator();
    this.setState({animating:true});
    console.log('creachannel view');
}

joinChannelViewStatus=()=>{
    console.log('join');
    this.setState({joinChannelViewStatus:true,disableState:false});
}

handleUserChange=(e)=>{
    this.setState({userName:e.target.value});
}
handlechannelName=(e)=>{
    this.setState({channelName:e.target.value});
}

handlePeerName=(e)=>{
    this.setState({peerName:e.target.value});
}
// handlechannelPath=(e)=>{
//     let value=e.target.value;
//     this.setState({channelPath:'../artifacts/channel/'+value+'.tx '});
// }
closeActivityIndicator = () =>setTimeout(() =>this.setState({
    animating: false,createChannelViewStatus:true }), 4000);


handleChangeOrgTxt=(event, index, value) => this.setState({orgName:value});

addPeer=()=>{
let newdata=[this.state.peerName].concat(this.state.peerArr);
this.setState({peerArr:newdata});
}
handleRequestDelete=()=>{
    alert('clicked');
}
    render(){
        let enrollView;
        let createChannelView;
        let joinChannelView;
        let peerArrView=[];

        this.state.peerArr.forEach((data)=>{
            peerArrView.push(
                <div>
                <Chip
          onRequestDelete={this.handleRequestDelete}        
        
        >
          <Avatar src="../../images/nodeIcon.jpg" />
         {data}
        </Chip>
        <br />
        </div>
            )
        })

        if(this.state.joinChannelViewStatus==true){
            joinChannelView=[
            <Row>
                <Col xs={6}>
                 <TextField
      hintText="Peer Name"
      floatingLabelText="Enter Peer Name"
      value={this.state.peerName}
      onChange={this.handlePeerName}
    />
    </Col>
    <Col>
    <RaisedButton label="Add Peer" primary={true} onTouchTap={this.addPeer}/>
    </Col>
    </Row>]}
    else{
        joinChannelView=null;
    }               
        
        if(this.state.enrollViewStatus==true){

        enrollView=[
            <div>
            <TextField
      hintText="User Name"
      floatingLabelText="Enter User Name"
      value={this.state.userName}
      onChange={this.handleUserChange}
    /><br />
    <SelectField 
           style={style.textStyle}
          floatingLabelText="Org Name"
          value={this.state.orgName}
          onChange={this.handleChangeOrgTxt}
        >
          <MenuItem value="org1" primaryText="org1" />
          <MenuItem value="org2" primaryText="org2" />
          <MenuItem value="org3" primaryText="org3" />
          <MenuItem value="org4" primaryText="org4" />
          {/* <MenuItem value="Mercuria" primaryText="Mercuria" /> */}
      
        </SelectField>
    
    <br />
     <RaisedButton label="Enroll User" primary={true} onTouchTap={this.enroll}/>
    </div>
        ]
    }
    else{
        enrollView=null;
    }

    if(this.state.createChannelViewStatus==true){

        createChannelView=[
            <div>
            <TextField
      hintText="Channel Name"
      floatingLabelText="Enter Channel Name"
      value={this.state.channelName}
      onChange={this.handlechannelName}
    /><br />
     <TextField
      hintText="Channel Path"
      value={'../artifacts/channel/'+this.state.channelName+'.tx '}
    />
    
    <br />
     <RaisedButton label="Create Channel" primary={true} onTouchTap={this.createChannel}/>
    </div>
        ]
    }
    else{
        createChannelView=null;
    }

    let Hangon;
    if(this.state.animating==true){
       Hangon=[
        <div>
        <center>
          <h3> Hangon and Grab Popcorn</h3>
          <br />
          <h5> We are reading your config file</h5>
        
        <CircularProgress size={50} thickness={7} />
        </center>
      </div>]
        
      }else{
          Hangon=null;
      }


        return(
            <div className="background">
            <div style ={{marginTop:"90px"}}>
            
            <Grid>
                <center>
                    <h1> Hyperledger Setup </h1>
                    </center>
            <Row style={{marginTop:"50px",fontColor:"blue"}}>
            <Col sm ={4}>
            <Paper style={style} zDepth={3} >
                <h2 onClick={this.enroll}>Enroll User</h2>
                <LinearProgress mode="indeterminate" />
                <FloatingActionButton >
      <ContentAdd onTouchTap={this.enrollViewStatus}/>
    </FloatingActionButton>
    <p>
        Enroll User to particular organisation for doing all the transaction
        </p>
                <br />
                {enrollView}
                
                </Paper>
                </Col>
                <Col sm ={4}>
                <Paper style={style} zDepth={5} >
                <h2>
                Create Channel
                </h2>
                <LinearProgress mode="indeterminate" />
                <FloatingActionButton >
      <ContentAdd onTouchTap={this.createChannelViewStatus}/>
    </FloatingActionButton>
    <p>
        Channel name and path is taken from config.json file.
        </p>
        {Hangon}
        {createChannelView}
                </Paper>
                </Col>
                <Col sm ={4}>
                <Paper style={style} zDepth={5} >
                <h2 onClick={this.joinChannel}>
                Join Channel
                </h2>
                <LinearProgress mode="indeterminate" />
                <FloatingActionButton >
      <ContentAdd onTouchTap={this.joinChannelViewStatus}/>
    </FloatingActionButton>
    <p>
        Join channel by adding List of Peers.
        </p>
        {joinChannelView}
        {peerArrView}
        <RaisedButton label="Join Channel" secondary={true} onTouchTap={this.joinChannel} disabled ={this.state.disableState} style={{position: "absolute",
right:    "130px",
bottom:   "50px"}}/>
                </Paper>
                </Col>
                
                </Row>
                <Row>
                    <Col sm={4}>
                    <InstallChaincode peerArr={this.state.peerArr}/>
                    </Col>
                    <Col sm={4}>
                    <InstantiateChaincode />
                    </Col>
                    </Row>
                </Grid>
                </div>
                </div>
        )
    }
}