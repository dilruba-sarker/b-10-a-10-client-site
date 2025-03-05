
import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip';
import Slider from '../Components/slider/Slider';
import About from '../Components/About';
import Impact from '../Components/Impact';


const Home = () => {
  const [campaigns, setCampaigns] = useState([]); // State for campaigns data

  useEffect(() => {
    // Fetch campaigns from backend
    fetch("https://b-10-a-10-server.vercel.app/campaignslimit")
      .then(res => res.json())
      .then(data => {
     
        setCampaigns(data); // Store fetched campaigns in state
      })
      .catch(error => console.error("Error fetching campaigns:", error));
  }, []);

  // Filter campaigns with a future deadline
  const currentDate = new Date();
  const activeCampaigns = campaigns.filter((campaign) => {
    const campaignDeadline = new Date(campaign.deadline);
    return campaignDeadline > currentDate;
  });



  return (
    <div className="p-8">
     
      <a data-tooltip-id="my-tooltip" data-tooltip-content="Together, We Can Make a Peaceful World!">
  ◕‿‿◕
</a>
<Tooltip id="my-tooltip" />
      {/* <Loiter></Loiter> */}
      <p className="text-lg mt-4">
        Madagascar Association is a non-profit organization that works tirelessly to improve the living conditions of the most vulnerable communities in Madagascar. We believe that every small gesture counts and that your generosity can make a big difference in the lives of the people we help.
      </p>
      <p className="text-lg">
        We are grateful that you have chosen to donate to our association and we sincerely thank you for your support. With your contribution, we will be able to continue supporting the associations present in Madagascar and providing concrete assistance to local communities. Your donation will help fund projects in the areas of health, education, water and sanitation, and environmental protection.
      </p>
      <Slider />

      <div className="mt-8">
        <h1 className="text-2xl font-extrabold text-blue-600">Running Campaign</h1>
        <p className="mx-w-xl lg:mx-w-4xl md:mx-w-2xl  bg-red-300 mx-auto mt-4 p-4 text-bold">
          In our Running Campaigns section, you can explore all the active and ongoing campaigns. These campaigns focus on various social, educational, health, and developmental projects, all aiming to bring positive change. By donating, you can contribute to these causes and be a part of making a difference. Our goal is to work together for the betterment of society, and with your support, we can achieve this vision. Join us in creating a lasting impact through your generous contributions.
        </p>
      </div>

      {/* Display active campaigns data */}
      <div className="mt-8 ">
        <h2 className="text-xl font-bold">Active Campaigns:</h2>
        <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          {activeCampaigns.length > 0 ? (
            activeCampaigns.map((campaign) => (
             

              <div className="card bg-base-100 w-72 h-96 shadow-xl ">
  <figure>
    <img
    className='h-36 w-full'
      src={campaign.photo}
      
      alt="Movie" />
  </figure>
  <div className="">
    <h2 className="card-title">{campaign.title}</h2>
    <p className='text-xl font-bold'>Donation Amount: ${campaign.amount}</p>
    <p className="text-xl">Deadline: {new Date(campaign.deadline).toLocaleDateString()}</p>
    <div className="card-actions justify-end">
      
      <Link to={`/campaign/${campaign._id}`}><button className="btn btn-primary text-black">See more</button> </Link>
    </div>
  </div>
</div>
            ))
          ) : (
            <p className="text-gray-500">No active campaigns available.</p>
          )}
        </ul>
      </div>
      <About></About>
      <Impact></Impact>
      
     <Link to='/campaigns'><button  className="btn btn-warning mt-4">Donate</button></Link>
    </div>
  );
};

export default Home;
