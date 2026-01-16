import React from 'react';
import classes from './backdrop.module.css';
let Backdrop  = ({closeBackdrop, toggle}) =>{
return(
    <>
{/* { 
toggle &&   */}
<div className={classes.backdrop} onClick={closeBackdrop}></div>
{/* } */}

</>
)
}
export default Backdrop