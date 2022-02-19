import React from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';
import classes from './contact.module.css';
import { useRef } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow, } from '@fortawesome/free-solid-svg-icons'
import {  faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

let Contact = () => {
  const location = <FontAwesomeIcon icon={faLocationArrow} />
  const email = <FontAwesomeIcon icon={faEnvelope} />
  let phone = <FontAwesomeIcon icon={faPhone}/>
  let linkedin = <FontAwesomeIcon icon={faLinkedin}/>
  let GitHub = <FontAwesomeIcon icon={faGithub}/>


  let GoLinkedIn = () => {
    window.open("https://www.linkedin.com/in/lubna-alamoudi-3562191a0/")
  }
  let GoGitHub = () => {
    window.open("https://github.com/lubnaO")
  }


  let AfterNavigateSubmit = useNavigate();
  let NameReference = useRef();
  let NumberReference = useRef();  
  let DetailsReference = useRef();

  let SubmitContact  =(e) =>{
    e.preventDefault();
    
    let enteredName = NameReference.current.value;
    let enteredNumber = NumberReference.current.value;
    let enteredDetails = DetailsReference.current.value;

    let Data = {
      Name:enteredName,
      PhoneNumber:enteredNumber,
      Details:enteredDetails
    }
    console.log(Data)

       fetch('https://portfoliocontact-1e80f-default-rtdb.firebaseio.com/contact.json',
     {
           method: 'POST',
           body: JSON.stringify(Data),
           headers:{
               'Content-Type': 'Application/json'
           }
     }
     ).then(()=>{
         AfterNavigateSubmit("/Thankyou")
     })

  }




    return(
        <section className={classes.backgroundContactSection}>
        <Container>
         <Row className='mt-5'>


           <Col sm={12} lg={8} className="mt-5">
           <div className={classes.card}>
          <div className={classes.contentCard}>
          <h2 className={classes.headerContact}>Let's work together!</h2>
          <p className={classes.flexibleText}>Feel free to contact with me</p>
          <form className={classes.formDesign} onSubmit={SubmitContact}>
            <input type="text" id="name" ref={NameReference} className={classes.all} placeholder='Name'required/>
            <input type='text' id="phoneNumber" ref={NumberReference} placeholder='Phonenumber' required/>
            <textarea type='text' id='name' ref={DetailsReference} placeholder='Message'  required/>
            <button>Send</button>
          </form>      
          </div>

          </div>
           </Col>

           <Col sm={12} lg={4} className="mt-5">
             <div className={` mt-5 ${classes.cardContent}`}>
             <div>
               <h2 className={classes.contactTitle}>Contact Me</h2>
               <div className={classes.socialMediaIcons}>
               <div>
                 <div className={`mt-3 ${classes.icons}`}>
                   {location}
                   <h6>Jeddah, Saudi Arabia</h6>
                 </div>
               </div>
               <div>
               <div className={`mt-3 ${classes.icons}`}>
                   {email}
                   <h6>lubnao115@gmail.com</h6>
                 </div>
               </div>
               <div>
               <div className={`mt-3 ${classes.icons}`}>
                   {phone}
                   <h6>0531631353</h6>
                 </div>
               </div>
               </div>

               <div className={classes.GithubAndLinkedIn}>
               <h6 onClick={GoLinkedIn}>{linkedin}</h6>
               <h6 onClick={GoGitHub}>{GitHub}</h6>
              </div>

             </div>

             </div>
            </Col>


         </Row>
        </Container>
        </section>
    )

}
export default Contact