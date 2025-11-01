import React from 'react'
import './index.css'
import {Route, Routes} from "react-router-dom";
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Header from './Components/Header/Head';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Header/Navbar';
import ChefConnection from './Components/Services/Chefconnection/ChefConnection';
import OneTimeCook from './Components/Services/OneTimeCook/OneTimeCook';
import PartyChef from './Components/Services/PartyChef/PartyChef';
import MonthlyCook from './Components/Services/MonthlyCook/MonthlyCook'; 
import Testimonial from './Components/Testimonial/Testimonial'; 
import Careers from './Components/Careers/Positions';
export default function App() {
  return (
   <div>
    <Header/>
    <Navbar/>
    {/* <Home/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Components/About/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Services/Chefconnection/ChefConnection" element={<ChefConnection />} />
        <Route path="/Services/OneTimeCook/OneTimeCook" element={<OneTimeCook />} />
        <Route path="/Services/PartyChef/PartyChef" element={<PartyChef />} />
        <Route path="/Services/MonthlyCook/MonthlyCook" element={<MonthlyCook />} />
        <Route path="/Components/Testimonial/Testimonial" element={<Testimonial />} />
        <Route path="/Components/Careers/Positions" element={<Careers />} />
      </Routes>
     <Footer/>      
    </div>
  )
}
