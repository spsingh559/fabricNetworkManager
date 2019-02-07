import React from 'react';
import {Col} from 'react-bootstrap';
import LinearProgress from 'material-ui/LinearProgress';
import CircularProgress from 'material-ui/CircularProgress';
import {Link} from 'react-router';

export default class InstanceStatus extends React.Component{

    state={
        secondsElapsed: 0,
        secondsElapsedBuy:2,
        secondsElapsedSell:0
      }

      componentDidMount=()=>{
        this.intervalTrack = setInterval(() => this.tick(), 500);
        this.intervalTrackSell = setInterval(() => this.tickSell(), 800);
        this.intervalTrackBuy = setInterval(() => this.tickBuy(), 1000);
    
      }

      tick=()=> {
        this.setState((prevState) => ({
          secondsElapsed: prevState.secondsElapsed + 1,
    
        }));
    
        if(this.state.secondsElapsed>=6){
          clearInterval(this.intervalTrack);
        }
      
      }
    
      tickBuy=()=> {
        
        this.setState((prevState) => ({
          secondsElapsedBuy: prevState.secondsElapsedBuy + 1
    
        }));
    
        if(this.state.secondsElapsedBuy>=2){
          clearInterval(this.intervalTrackBuy);
        }
      
      }
    
      tickSell=()=> {
       
        this.setState((prevState) => ({
          secondsElapsedSell: prevState.secondsElapsedSell + 1,
    
        }));
    
        if(this.state.secondsElapsedSell>=4){
          clearInterval(this.intervalTrackSell);
        }
      
      }

    render(){
        return(
            <div >
                <Col xs={4} style={{width:"200px", borderRadius: "6px",height:"100px",
                marginBottom:"5px", border: "solid 1px #d5d5d5",marginLeft:"20px"}}>
                <h3>Started{' '}:{' '}{this.state.secondsElapsed}</h3>
                <br />
                <LinearProgress mode="indeterminate" />
                </Col>
                <Col xs={4}  style={{width:"200px",marginLeft:"20px", borderRadius: "6px",
    border: "solid 1px #d5d5d5",height:"100px",
    marginBottom:"5px",}}>
                <Link to='instanceInfo'><h3 style={{color:'rgb(0, 188, 212)'}}>Running:{' '}{' '}{this.state.secondsElapsedBuy}</h3></Link>                 
                <CircularProgress color="yellow"/>
                </Col>
                <Col xs={4} style={{width:"200px",marginLeft:"20px", borderRadius: "6px",
    border: "solid 1px #d5d5d5",height:"100px",
    marginBottom:"5px"}}>
                <h3>Stopped {' '}: {' '}{this.state.secondsElapsedSell}</h3>
                <br />
                <LinearProgress  value="100"  mode="determinate" color="red"/>
                </Col>
                </div>
        )
    }
}