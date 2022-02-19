import React from "react";
import classes from './thank.module.css';
import { useNavigate } from "react-router-dom";
import {Container, Row, Col, Image} from 'react-bootstrap';
let Thankyou = () =>{

    let GoToProfile = useNavigate();
    let ToProfileButtob  = () =>{
        GoToProfile("/")
    }
    return(
        <section className={classes.thankContent}>
            <Container>
            <Row>
            <Col sm={12} lg={12} className="mt-5">
                <section  className={` mt-5 ${classes.thanks}`}>
                <div className={classes.content}>
                <h1 className={classes.thanksExpression}>Thank You,</h1>
                <h5>I'll contact with you soon</h5>
                <button onClick={ToProfileButtob}>Go To Profile</button>
                </div>
          

                </section>
            </Col>
            </Row>
            </Container>
        </section>
    )
}
export default Thankyou