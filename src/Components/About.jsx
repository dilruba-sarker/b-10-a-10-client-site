import React, { useEffect } from 'react';
import img from"../assets/images/img3.jpg"

import Aos from 'aos';
import 'aos/dist/aos.css';
const About = () => {
      useEffect(() => {
        Aos.init({ duration: 1000 }); 
      }, []);
    return (
        <div data-aos="fade-up" data-aos-anchor-placement="top-center"  className='w-7/8 mx-auto mt-10 bg-gray-200 p-4'>
            <h1 className='flex justify-center text-3xl font-bold'>About US</h1>
            <p   data-aos="fade-up-right" data-aos-anchor-placement="top-center" >The mission of winter clothing donations is to provide warm clothing and accessories to people who are struggling with cold weather. These donations can help people stay safe and healthy, especially those who are experiencing homelessness or living in poverty</p>

            <div>

<p  data-aos="fade-down-left"
            data-aos-anchor-placement="top-center"

className='m-6'><img src={img} alt="" /></p>

<div     data-aos="slide-right"
            data-aos-anchor-placement="top-center"
className='text-center w-2/3 bg-red-700 mx-auto text-white  py-20'>
  <h1 className='text-4xl font-bold'>Disaster Response</h1>
  <p>When a disaster happens, we can quickly send funds to the local organizations that are best-suited to drive relief and recovery.</p>
  <button className='btn btn-info mt-6'>Learn More</button>
</div>

            </div>
        </div>
    );
};

export default About;