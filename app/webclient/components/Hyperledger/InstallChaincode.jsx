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

export default class InstallChaincode extends React.Component{

    state={
        installChaincodeViewStatus:false,
        chaincodeName:'',
        chaincodePath:'',
        chaincodeVersion:''
    }

    handlechaincodeNameChange=(e)=>{
        this.setState({chaincodeName:e.target.value})
    }

    handlechaincodePathChange=(e)=>{
        this.setState({chaincodePath:e.target.value})
    }
    handlechaincodeVersionChange=(e)=>{
        this.setState({chaincodeVersion:e.target.value})
    }

    installChaincodeViewStatus=()=>{
        this.setState({installChaincodeViewStatus:true});
    }

    installChaincode=()=>{
        var obj={
            peers :this.props.peerArr,
            chaincodeName:this.state.chaincodeName,
            chaincodePath:this.state.chaincodePath,
            chaincodeVersion:this.state.chaincodeVersion
        }

        let retrievedUserDetails= JSON.parse(sessionStorage.getItem('userLoginDetails'));
    console.log(retrievedUserDetails);
    console.log('object details');
    console.log(obj);
    Axios({
      method:'post',
      url:'http://13.126.41.18:8080/chaincodes',
      data:obj,
      headers: {  
          'Authorization': 'Bearer '+ retrievedUserDetails.token,
          'Content-Type': 'application/json'
      }
      })
      .then((data) => {
          alert('install chaincode');
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
let peerArrView=[];
        if(this.state.installChaincodeViewStatus==true){
            

        this.props.peerArr.forEach((data)=>{
            peerArrView.push(
                <div>
               
                <Chip        
        
        >
          <Avatar src="../../images/nodeIcon.jpg" />
         {data}
        </Chip>
        <br />
        </div>
      
            )
        })

            installChaincodeView=[
            <div>
                <p> Peer List </p>
                <Divider />
            <TextField
      hintText="Chaincode Name"
      floatingLabelText="Enter Chaincode Name"
      value={this.state.chaincodeName}
      onChange={this.handlechaincodeNameChange}
    /><br />
            <TextField
      hintText="Chaincode Path"
      floatingLabelText="Enter Chaincode Path"
      value={this.state.chaincodePath}
      onChange={this.handlechaincodePathChange}
    /><br />
    
            <TextField
      hintText="Chaincode Version"
      floatingLabelText="Enter Chaincode Version"
      value={this.state.chaincodeVersion}
      onChange={this.handlechaincodeVersionChange}
    />
    <br />
    <RaisedButton label="Install Chaincode" primary={true} onTouchTap={this.installChaincode}/>
    </div>
            ]

        }else{
            installChaincodeView=null;
        }

        


        return(
            <Paper style={style} zDepth={5} >
            <h2>
            Install Chaincode
            </h2>
            <LinearProgress mode="indeterminate" />
            <FloatingActionButton >
  <ContentAdd onTouchTap={this.installChaincodeViewStatus}/>
</FloatingActionButton>
<p>
    Install chaincode on Peers
    </p>
   {peerArrView}
    {installChaincodeView}
    
            </Paper>
        )
    }
}