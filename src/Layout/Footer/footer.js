import React from 'react';
import classes from './footer.module.css';
let Footer  = () => {
    return (
        <>
        <footer className={`mx-auto mt-5 ${classes.footer}`}>
        &copy; 2021  <span>Lubna Alamoudi All Right Reserved.</span>
        </footer>
        </>
    )
}
export default Footer