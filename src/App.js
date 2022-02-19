import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BannerPage from './Pages/BannerPage';
import ContactPage from './Pages/ContactPage';
import ProjectsPage from './Pages/ProjectsPage';
import DetailsProject from './ProjectSections/projectDetails';
import Thankyou from './Layout/thankyou/thank';
import Footer from './Layout/Footer/footer';
import Navbar from './Layout/Mainnavbar/navbar';
import {Routes, Route} from 'react-router-dom';

let App = () =>{
return(
  <>
   <Navbar/>
   <Routes>
      <Route path="/" element={<BannerPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/contact" element={<ContactPage />} />
      {/* <Route path="/details" element={<DetailsProject />} /> */}
      <Route path="/Thankyou" element={<Thankyou />} />
    </Routes>
    {/* <Footer/> */}

  </>
)
}
export default App;
