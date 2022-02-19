import React from 'react';
import {useEffect, useState} from 'react';
import axios from 'axios';
import ShowProjects from './showProjects';
import classes from './project.module.css';
import Loading from '../Layout/loader/loading';
import Error from '../Layout/Error/error';
let Projects = () => {
  let [product, setProducts] = useState([]);
  let [isloading, setLoading] = useState(true);
  let [error, setError] =  useState('');

  useEffect(()=>{
   axios.get("http://localhost:4000/data")
   .then((response)=>{
    console.log(response.data)
    setLoading(false)
    setProducts(response.data)
    setError('')
    
   }).catch(()=>{
     setError(<Error/>)
     setLoading(false)
   })
  // fetch("http://localhost:4000/data")   
  // .then((e)=>{
  //    return e.json();
     
  // }).then((m)=>{
  //   console.log(m);
  //   setProducts(m)
  // })
  },[])
    return(
        <section className={classes.backgroundProjectSection}>
        <ShowProjects allProjects={product}/>
        {error ? <Error/>: null}
        {isloading ? <Loading/> : null}
        </section>
    )

}
export default Projects