import React from 'react';

import {Row,Col,Image} from 'react-bootstrap';
import Divider from 'material-ui/Divider';

const style={
    outerStyle:{
        float:"right",
        height:'400px',
        width:'500px',
        marginTop:'40px',
        marginRight:"50px",
        borderRadius: "6px",
        border: "solid 1px black",
        align:"center"
    }
}
export default class MyProfile extends React.Component{

    render(){
        return(
            <div style={{marginTop:"65px"}} className="profile">
    <div style={style.outerStyle}>
            <Row>
            
               <center>
                   <h3 style={{float:"left", marginLeft:"50px"}}>
                   Hello Mr John </h3>
               <Image src="../../../images/profile.jpg" 
        style={{width:'70px',height:'100px'}} circle/>
        </center>
              
                </Row>
                <Divider />
                    <br />
                    <br />
                    <Row style={{marginLeft:'10px'}}>
                        <Col xs={4}>
                        Creation Date
                    </Col>
                    <Col xs={6}>
                    14th Feb, 4018 07:14:57 PM
                    </Col>
                        </Row>
                        <br />
                    <br />
                        <Row style={{marginLeft:'10px'}}>
                      
                        <Col xs={4}>
                        Current Subscription
                    </Col>
                    <Col xs={4}>
                   Active
                    </Col>
                        </Row>
                        <br />
                    <br />
                        <Row style={{marginLeft:'10px'}}>
                       
                        <Col xs={4}>
                        Email
                    </Col>
                    <Col xs={4}>
                   xxxxxx@gmail.com
                    </Col>
                        </Row>
                        <br />
                    <br />
                       </div>
                </div>
        )
    }
}