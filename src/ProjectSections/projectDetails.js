import React from 'react';
import { Modal, Button, closeButton} from 'react-bootstrap'
import ModalHeader from 'react-bootstrap/ModalHeader'
import CloseButton from 'react-bootstrap/CloseButton'
import classes from './projectDetails.module.css'
import { useState } from 'react'
let ProjectDetails = ({Details, toggle, closed}) => {

    let toProject = (e) => {
        window.open(e.livePreview)
    }
    let toSourceCode = (e) => {
        window.open(e.sourceCode)
    }
    let ModalDetails = Details.map((function(e, index){
      return(
          <>
        { toggle && 
     <div className={classes.coverModal} >
     <div className={classes.modal} key={e.id}>
          <img src={e.images}/>
          <h1 className={classes.topics}>{e.projectName}</h1>
          <h6 className={classes.description}>{e.description}</h6>
          <h6 className={classes.liveLink}>Live Preview:  <a className={classes.link} onClick={()=>toProject(e)}>{e.livePreview}</a></h6>
          <h6 className={classes.liveLink}>Source Code:  <a className={classes.link} onClick={()=>toSourceCode(e)}>{e.sourceCode}</a></h6>
          <div className={classes.closeButton} onClick={closed}>X</div>      
     </div>
     </div>


        }
  
       </>
      )
    }))
    return(
        <>
       {ModalDetails}
        </>
    )

}
export default ProjectDetails
