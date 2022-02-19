import React from 'react';
import classes from './banner.module.css';
import {Container, Row, Col, Image} from 'react-bootstrap';
import bannerImage from '../images/software-engineer-2043023 (9).png';
import CvPdf from '../cv/Developer.pdf';
import {useNavigate} from 'react-router-dom';
import Footer from '../Layout/Footer/footer';

let Banner = () => {
  let navigateContact = useNavigate();
  let downloadCV  = () =>{
    window.open(CvPdf)
  }
  let GoContactPage = () =>{
    navigateContact("/contact");

  }
    return(
        <section>
              <Container>
                <Row className=" d-flex justify-content-revet mt-5">
                <Col sm={12} lg={6} className="mt-5">
                  <p className={`mt-5 ${classes.welcome}`}>Welcome to my portfolio website!</p>
                  <h3 className={`mt-5 ${classes.hello}`}>Hello folks, <span className={classes.frontEndStyle}>I'm front end developer</span></h3>
                  <p className={`mt-3 ${classes.descriptionBanner}`}>I'm web developer specialized in front end development,I have a passion for creating visually appealing websites  and responsive.My passionate interest in programming and design helps me find creative solutions to technical challenges and develop attractive and organized websites.
</p>

                  <button className={`mt-3 ${classes.downloadResume}`}><a  onClick={downloadCV}>Download Resumes</a></button>
                  <button className={`mt-3 ${classes.contact}`}><a onClick={GoContactPage}>Contact</a></button>
              </Col>
              <Col sm={12} lg={4} className="mt-5">
              <Image src={bannerImage} className={classes.bannerIMage}/>
              </Col>
               </Row>
             </Container>
            

        </section>
    )

}
export default Banner