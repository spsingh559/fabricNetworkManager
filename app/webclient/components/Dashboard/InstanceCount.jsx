import React from 'react';

export default class InstanceCount extends React.Component{
    state={
        secondsElapsed: 0,
        
      }

      componentDidMount=()=>{
        this.intervalTrack = setInterval(() => this.tick(), 700);
        
    
      }

      tick=()=> {
        this.setState((prevState) => ({
          secondsElapsed: prevState.secondsElapsed + 1,
    
        }));
    
        if(this.state.secondsElapsed>=12){
          clearInterval(this.intervalTrack);
        }
      
      }

    render(){
        return(
            <div >
              <h3>Total Instance Created :{this.state.secondsElapsed}</h3>
                </div>
        )
    }
}