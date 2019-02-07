import React from 'react';
import {Grid,Row,Col} from 'react-bootstrap';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
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
// import InstallChaincode from './InstallChaincode';

const style = {
    height: 400,
    width: 300,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
    overflowY:"auto"
  };

export default class InstantiateChaincode extends React.Component{

    state={
        InstantiateChaincodeViewStatus:false,
        chaincodeName:'',
        chaincodeArgument:'',
        chaincodeVersion:'',
        channelName:''
    }

    handlechaincodeNameChange=(e)=>{
        this.setState({chaincodeName:e.target.value})
    }

    handlechaincodeArgumentChange=(e)=>{
        this.setState({chaincodeArgument:e.target.value})
    }
    handlechaincodeVersionChange=(e)=>{
        this.setState({chaincodeVersion:e.target.value})
    }

    handlechannelNameChange=(e)=>{
        this.setState({channelName:e.target.value})
    }

    installChaincodeViewStatus=()=>{
        this.setState({installChaincodeViewStatus:true});
    }

    instantiate=()=>{
        let arg;
        if(this.state.chaincodeArgument==''){
            arg=[];
        }else{
            arg=this.state.chaincodeArgument;
        }
        var obj={
            chaincodeName:this.state.chaincodeName,
            args:arg,
            chaincodeVersion:this.state.chaincodeVersion
        }

        let retrievedUserDetails= JSON.parse(sessionStorage.getItem('userLoginDetails'));
    console.log(retrievedUserDetails);
    console.log('object details');
    console.log(obj);
    Axios({
      method:'post',
      url:'http://13.126.41.18:8080/channels/'+this.state.channelName+'/chaincodes' ,
      data:obj,
      headers: {  
          'Authorization': 'Bearer '+ retrievedUserDetails.token,
          'Content-Type': 'application/json'
      }
      })
      .then((data) => {
          alert('instantiate chaincode');
        console.log(data);

    })
    .catch((error) => {
       
        console.log(error);
        console.log(error+"error in get Trade");
        });

        this.setState({installChaincodeViewStatus:false});
    }

    render(){
let installChaincodeView;

        if(this.state.installChaincodeViewStatus==true){
            



            installChaincodeView=[
            <div>
                <TextField
      hintText="Channel Name"
      floatingLabelText="Enter channel Name"
      value={this.state.channelName}
      onChange={this.handlechannelNameChange}
    /><br />
            <TextField
      hintText="Chaincode Name"
      floatingLabelText="Enter Chaincode Name"
      value={this.state.chaincodeName}
      onChange={this.handlechaincodeNameChange}
    /><br />
            <TextField
      hintText="Chaincode Arguments"
      floatingLabelText="Enter Chaincode Arguments"
      value={this.state.chaincodeArgument}
      onChange={this.handlechaincodeArgumentChange}
    /><br />
    
            <TextField
      hintText="Chaincode Version"
      floatingLabelText="Enter Chaincode Version"
      value={this.state.chaincodeVersion}
      onChange={this.handlechaincodeVersionChange}
    />
    <br />
    <RaisedButton label="Instantiate" primary={true} onTouchTap={this.instantiate}/>
    </div>
            ]

        }else{
            installChaincodeView=null;
        }

        


        return(
            <Paper style={style} zDepth={5} >
            <h2>
            Instantiate Chaincode
            </h2>
            <LinearProgress mode="indeterminate" />
            <FloatingActionButton >
  <ContentAdd onTouchTap={this.installChaincodeViewStatus}/>
</FloatingActionButton>
<p>
    Instantiate chaincode on Peers
    </p>
    {installChaincodeView}
    
            </Paper>
        )
    }
}