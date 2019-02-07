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

let title=[<span>
    <Image  src="../images/wipro.jpg" height="50px" width="50px" circle />
    <p className="pull-right" style={{marginRight:"500px"}}>Blockchain Lab as a Service</p>
</span>
    ]
        return(
            <div>
            <AppBar
            title={title}
            style={{position: "fixed",top:'0',backgroundColor: '#1f497d'}}
           >
          <FlatButton style={style.labelStyle1} label="Login/SignUp" onTouchTap={this.loginNaviagtion} />
          </AppBar>
          <div className="landingBackground">
          <center>
              
          <Carousel style={{width:"auto",marginTop:"50px"}}>
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
</Carousel>
         </center>
         </div>
         <footer className="site-footer" style={{backgroundColor:"black", color:"white"}}>
        <div className="footer-navigation-subscription-container container">
            <div className="row footer-navigation-subscription">
                <div className="fns-elem col-xs-offset-0 col-xs-12 col-sm-offset-2 col-sm-2 col-md-offset-0 col-md-2 col-lg-offset-0 col-lg-2">

                    <div className="fns-are">
                        <p className="fns-title">Who we are</p>
                        <ul className="fns-linklist">
                            <li className="fns-link-li">
                                <a className="fns-link" href="http://wiprodigital.com/who-we-are" target="_self" title="meet us">Our story</a>
                            </li>
                            <li className="fns-link-li">
                                <a className="fns-link" href="http://wiprodigital.com/who-we-are#wdteam_meetus" target="_self" title="leaders">Meet us</a>
                            </li>
                            <li className="fns-link-li">
                                <a className="fns-link" href="http://wiprodigital.com/who-we-are#wdteam_leaders" target="_self" title="locations">Leaders</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="fns-elem col-xs-12 col-sm-2 col-md-2 col-lg-2">
                    <div className="fns-do">
                        <p className="fns-title">What we do</p>
                        <ul className="fns-linklist">
                            <li className="fns-link-li">
                                <a className="fns-link" href="http://wiprodigital.com/what-we-do#work-three-circles-row" target="_self" title="services">Services</a>
                            </li>
                            <li className="fns-link-li">
                                <a className="fns-link" href="http://wiprodigital.com/what-we-do#wdwork_cases" target="_self" title="case studies">Case studies</a>
                            </li>
                            <li className="fns-link-li">
                                <a className="fns-link" href="http://wiprodigital.com/what-we-do#wdwork_partners" target="_self" title="partners">Partners</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="fns-elem col-xs-12 col-sm-2 col-md-2 col-lg-2">
                    <div className="fns-thnk">
                        <p className="fns-title">What we think</p>
                        <ul className="fns-linklist">
                            <li className="fns-link-li">
                                <a className="fns-link" href="http://wiprodigital.com/?s=&post_type[]=post" target="_self" title="insights">Insights</a>
                            </li>
                            <li className="fns-link-li">
                                <a className="fns-link" href="http://wiprodigital.com/?s=&post_type[]=news" target="_self" title="news">News</a>
                            </li>
                            <li className="fns-link-li">
                                <a className="fns-link" href="http://wiprodigital.com/?s=&post_type[]=events" target="_self" title="events">Events</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="fns-elem col-xs-12 col-sm-2 col-md-2 col-lg-2">

                    <div className="fns-team">
                        <p className="fns-title">Join our team</p>
                        <ul className="fns-linklist">
                            <li className="fns-link-li">
                                <a className="fns-link" href="http://wiprodigital.com/join-our-team" target="_self" title="better together">Better together</a>
                            </li>
                            <li className="fns-link-li">
                                <a className="fns-link" href="http://wiprodigital.com/join-our-team#wdcareers_team" target="_self" title="our teams">Our teams</a>
                            </li>
                            <li className="fns-link-li">
                                <a className="fns-link" href="http://wiprodigital.com/join-our-team#wdcareers_jobs" target="_self" title="open positions">Open positions</a>
                            </li>
                        </ul>
                    </div>

                </div>
                <div className="fns-elem col-xs-12 col-sm-12 col-md-4 col-lg-4">
                    <div className="fns-subs">
                        <p className="fns-title">Let's keep in touch</p>
                        <p className="fns-text">
                            We'll send you our latest insights and updates
                        </p>
                       
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-brand-colour-container container">
            <div className="row footer-brand-colour">
                <div className="fbc-elem fbc-pink col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>
                <div className="fbc-elem fbc-yellow col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>
                <div className="fbc-elem fbc-blue col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>
            </div>
        </div>
        <div className="footer-privacy-social-container container">
            <div className="row footer-privacy-social">
                <div className="fpc-elem fpc-social col-xs-12 col-sm-12 col-md-4 col-md-push-4 col-lg-4 col-lg-push-4">
                    <span>
                    <a className="fpc-facebook" href="https://www.facebook.com/WiproDigital/" target="_blank" title="Click to visit our Facebook page">
                        <i className="fa fa-facebook"></i>
                    </a>
                    <a className="fpc-twitter" href="https://twitter.com/wiprodigital" target="_blank" title="Click to visit our Twitter page">
                        <i className="fa fa-twitter"></i>
                    </a>
                    <a className="fpc-linkedin" href="https://www.linkedin.com/company/wipro-digital" target="_blank" title="Click to visit our LinkedIn page">
                        <i className="fa fa-linkedin"></i>
                    </a>
                </span>
                </div>
                <div className="fpc-elem fpc-privacy col-xs-12 col-sm-12 col-md-4 col-md-pull-4 col-lg-4 col-md-pull-4">
                    <span>&copy; Wipro Blockchain 2018 &nbsp; | &nbsp; All rights reserved.</span>
                </div>
                <div className="fpc-elem fpc-legal col-xs-12 col-sm-12 col-md-4 col-lg-4">
                    <span>
                    <a className="fpc-pripolicy" href="http://wiprodigital.com/privacy-policy" title="Privacy policy">Privacy policy</a>
                </span>
                </div>
            </div>
        </div>
    </footer>

         </div>

        )
    }
}