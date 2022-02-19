import React from 'react';
import classes from './loader.module.css';
import loadergif from '../../images/Spinner-1s-200px (2).gif'
let loader = () => {
    return(
        <div className={classes.loader}><img src={loadergif}/></div>
    )
}
export default loader