import React from 'react';
import { useState } from 'react';
import classes from './showproject.module.css';
import {Card, Col, Container, Row} from 'react-bootstrap';
import {Link, NavLink } from 'react-router-dom';
import ProjectDetails from './projectDetails';
import Backdrop from '../Layout/backdrop/backdrop';

let ShowProjects = ({allProjects}) =>{

  let [ModalIsOpen, SetModalIsOpen] = useState({
    theProjects: [],
    isOpen: false,
    toggle:false
  })

    let OpenModal = (project) => {
    SetModalIsOpen({
      theProjects: ([project]),
      isOpen: true,
      toggle:true 
    })
    }
    
    let close = () =>{
      SetModalIsOpen({
        toggle:false,  
        theProjects: [],
        isOpen:false
      })
    }

   

  let testing = allProjects.map(function(project, index){
      return(
    <Col sm={12} lg={4} className="mt-5" key={index}>
    <Card className={classes.cardShadow}>
    <Card.Img variant="top" src={project.images}/>
    <Card.Body>
    <h4 className={classes.projectTitle}>{project.projectName}</h4>
    <button className={classes.viewButton}><a onClick={()=> OpenModal(project)} >View Project</a></button>
    </Card.Body>
    </Card>
    </Col>
      )
  })
return(
    <> 
     <Container className={`${classes.Container}`}>
     <Row>
    {testing}
    </Row>
     </Container>
     {ModalIsOpen ? <ProjectDetails  Details={ModalIsOpen.theProjects} toggle={ModalIsOpen.toggle} closed={close}/> : null }
     {ModalIsOpen.isOpen ? <Backdrop toggle={ModalIsOpen.toggle} closeBackdrop={close}/> : null}
      
    </>
)
}
export default ShowProjects
// m.onclick = (()=> {

//})