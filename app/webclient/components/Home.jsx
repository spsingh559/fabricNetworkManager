
import React from 'react';
import { Link } from 'react-router';
import Axios from 'axios';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
// import {Grid} from 'react-bootstrap';
import {Grid,Row,Col,Carousel} from 'react-bootstrap';

// Component 
import InstanceCount from './Dashboard/InstanceCount';
import InstanceStatus from './Dashboard/InstanceStatus';
import CloudChart from './Dashboard/CloudChart';
import PlatFormChart from './Dashboard/PlatFormChart';

// Component End


const instanceData=[
  {
instanceID:"1273892730",
name:"testInstance1",
nodes:"5",
creationTime:"07/05/2017 07:11:05",
cloud:"Amazon EC2",
status:"Initializing",
externalIP:"34.123.34.23",
platform:"Ethereum"
},
{
  instanceID:"1273892731",
  name:"testInstance2",
  nodes:"5",
  creationTime:"07/05/2017 07:11:05",
  cloud:"Amazon EC2",
  status:"Initializing",
  externalIP:"34.123.34.23",
  platform:"Hyperledger"
  },
  {
    instanceID:"1273892733",
    name:"testInstance3",
    nodes:"5",
    creationTime:"07/05/2017 07:11:05",
    cloud:"Cloud",
    status:"Initializing",
    externalIP:"34.123.34.23",
    platform:"Quoram"
    },
]

const style={
  instanceCountStyle:{
    height:"100px",
    width:"320px",
    borderRadius: "6px",
    border: "solid 1px #d5d5d5",
    align:"center"
  },
  instanceStatusStyle:{
    height:"100px",
    width:"700px",
    marginLeft:"10px",
    textAlign:"center"
  },
  CloudChartStyle:{
    height:"500px",
    marginTop:"50px",
    width:"400px",
    borderRadius: "6px",
    border: "solid 1px #d5d5d5"
  },
  platFormStyle:{
    height:"500px",
    marginLeft:"198px",
    marginTop:"50px",
    width:"400px",
    borderRadius: "6px",
    border: "solid 1px #d5d5d5"
  }
}



export default class Home extends React.Component {
  
  render() {
  
      return (
        <div className="background">
        <Grid style={{marginTop:"90px"}}>  
   Customise Home Page
           
          </Grid>
          </div>
      )
    }
  }



