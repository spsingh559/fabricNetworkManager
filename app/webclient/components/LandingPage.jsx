import React from 'react';

import {
    blue300,
  } from 'material-ui/styles/colors';

  import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import FontIcon from 'material-ui/FontIcon';
import FlatButton from 'material-ui/FlatButton';
import {Link} from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';

import {Image} from 'react-bootstrap';
import {Grid,Row,Col,Carousel} from 'react-bootstrap';

const style = {
    labelStyle: {
        width: 'auto',
        height: '22px',
        family: 'Helvetica',
        size: '18px',
        weight: 'bold',
        style: 'normal',
        stretch: 'normal',
        height: 'normal',
        spacing: 'normal',
        align: 'left',
        color: '#ffffff',
        textTransform: 'lowercase'
       },
       labelStyle1: {
        width: 'auto',
        height: '22px',
        family: 'Helvetica',
        size: '18px',
        marginLeft:"-100px",
        weight: 'bold',
        style: 'normal',
        stretch: 'normal',
        height: 'normal',
        spacing: 'normal',
        align: 'left',
        color: '#ffffff',
        textTransform: 'lowercase'
       },
    buttonBorder:{
      width: '167px',
      height: '48px',
      radius: '6px',
      margin: '8px',
      border: 'solid 1px #ffffff',
      color:'#FFFFFF'
    }
  } ;

export default class LandingPage extends React.Component{

    static get contextTypes() {
        return {
          router: React.PropTypes.object.isRequired
        }
      }

    loginNaviagtion=()=>{
        this.context.router.push('/login');
    }

    render(){


        return(
            <div>
            <AppBar
            title="Fabric Network Bot"
            style={{position: "fixed",top:'0',backgroundColor: '#1f497d'}}
           >
          <FlatButton style={style.labelStyle1} label="Login/SignUp" onTouchTap={this.loginNaviagtion} />
          </AppBar>
          <div className="landingBackground">
          <center>
              
          {/* <Carousel style={{width:"auto",marginTop:"50px"}}>
  <Carousel.Item >
    <img width="auto" height={500} alt="900x500" src="../images/slide1.jpg" />
    
  </Carousel.Item>
  <Carousel.Item >
    <img width="auto" height={500} alt="900x500" src="../images/slide2.jpg" />
    
  </Carousel.Item>
  <Carousel.Item >
    <img width="auto" height={500} alt="900x500" src="../images/slide3.jpg" />
    
  </Carousel.Item>
  <Carousel.Item >
    <img width="auto" height={500} alt="900x500" src="../images/slide4.jpg" />
    
  </Carousel.Item>
</Carousel> */}

         </center> 
         </div>
         
         </div>

        )
    }
}