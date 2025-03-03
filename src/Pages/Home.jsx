// import React from 'react';
// import ImageSlider from './ImageSlider';
// import { useLoaderData } from 'react-router-dom';

// const Home = () => {
//   const campaignsData = useLoaderData(); // Access the fetched data
//   console.log("Fetched campaigns data:", campaignsData);

//   // Filter campaigns with a future deadline
//   const currentDate = new Date(); // Get the current date
//   const activeCampaigns = campaignsData.filter((campaign) => {
//     const campaignDeadline = new Date(campaign.deadline); // Convert deadline to Date object
//     return campaignDeadline > currentDate; // Keep campaigns with a future deadline
//   });

//   return (
//     <div className="p-8">
//       <h1 className="text-2xl font-bold">Together, We Can Make a Peaceful World</h1>
//       <p className="text-lg mt-4">
//         Madagascar Association is a non-profit organization that works tirelessly to improve the living conditions of the most vulnerable communities in Madagascar. We believe that every small gesture counts and that your generosity can make a big difference in the lives of the people we help.
//       </p>
//       <p className="text-lg">
//         We are grateful that you have chosen to donate to our association and we sincerely thank you for your support. With your contribution, we will be able to continue supporting the associations present in Madagascar and providing concrete assistance to local communities. Your donation will help fund projects in the areas of health, education, water and sanitation, and environmental protection.
//       </p>
//       <ImageSlider></ImageSlider>

//       <div className="mt-8">
//         <h1 className="text-2xl font-extrabold text-blue-600">Running Campaign</h1>
//         <p className="w-3xl bg-amber-100 mx-auto mt-4 p-4 text-bold">
//           In our Running Campaigns section, you can explore all the active and ongoing campaigns. These campaigns focus on various social, educational, health, and developmental projects, all aiming to bring positive change. By donating, you can contribute to these causes and be a part of making a difference. Our goal is to work together for the betterment of society, and with your support, we can achieve this vision. Join us in creating a lasting impact through your generous contributions.
//         </p>
//       </div>

//       {/* Display active campaigns data */}
//       <div className="mt-8">
//         <h2 className="text-xl font-bold">Active Campaigns:</h2>
//         <ul className="mt-4">
//           {activeCampaigns.map((campaign) => (
//             <li key={campaign.name} className="mt-4 p-4 bg-gray-100 rounded-lg">
//               <h3 className="text-lg font-semibold">{campaign.title}</h3>
//               <h3 className="text-lg font-semibold">{campaign.email}</h3>
//               <p className="text-sm">{campaign.description}</p>
//               <p className="text-sm">Minimum Donation: ${campaign.amount}</p>
//               <p className="text-sm">Deadline: {new Date(campaign.deadline).toLocaleDateString()}</p>
//               <p><img src={campaign.photo} alt={campaign.title} className="w-32 h-32 object-cover" /></p>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Home;

import React, { useEffect, useState } from 'react';
import ImageSlider from './ImageSlider';
import { Link } from 'react-router-dom';

const Home = () => {
  const [campaigns, setCampaigns] = useState([]); // State for campaigns data

  useEffect(() => {
    // Fetch campaigns from backend
    fetch("http://localhost:3000/campaigns")
      .then(res => res.json())
      .then(data => {
        console.log("Fetched campaigns:", data, "Length:", data.length);
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

  console.log("Active campaigns after filtering:", activeCampaigns.length);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Together, We Can Make a Peaceful World</h1>
      <p className="text-lg mt-4">
        Madagascar Association is a non-profit organization that works tirelessly to improve the living conditions of the most vulnerable communities in Madagascar. We believe that every small gesture counts and that your generosity can make a big difference in the lives of the people we help.
      </p>
      <p className="text-lg">
        We are grateful that you have chosen to donate to our association and we sincerely thank you for your support. With your contribution, we will be able to continue supporting the associations present in Madagascar and providing concrete assistance to local communities. Your donation will help fund projects in the areas of health, education, water and sanitation, and environmental protection.
      </p>
      <ImageSlider />

      <div className="mt-8">
        <h1 className="text-2xl font-extrabold text-blue-600">Running Campaign</h1>
        <p className="w-3xl bg-amber-100 mx-auto mt-4 p-4 text-bold">
          In our Running Campaigns section, you can explore all the active and ongoing campaigns. These campaigns focus on various social, educational, health, and developmental projects, all aiming to bring positive change. By donating, you can contribute to these causes and be a part of making a difference. Our goal is to work together for the betterment of society, and with your support, we can achieve this vision. Join us in creating a lasting impact through your generous contributions.
        </p>
      </div>

      {/* Display active campaigns data */}
      <div className="mt-8 ">
        <h2 className="text-xl font-bold">Active Campaigns:</h2>
        <ul className="mt-4 grid grid-cols-2 gap-4">
          {activeCampaigns.length > 0 ? (
            activeCampaigns.map((campaign) => (
              // <li key={campaign._id} className="mt-4 p-4 bg-gray-100 rounded-lg">
              //   <h3 className="text-lg font-semibold">{campaign.title}</h3>
              //   <h3 className="text-lg font-semibold">{campaign.email}</h3>
              //   <p className="text-sm">{campaign.description}</p>
              //   <p className="text-sm">Minimum Donation: ${campaign.amount}</p>
              //   <p className="text-sm">Deadline: {new Date(campaign.deadline).toLocaleDateString()}</p>
              //   <img src={campaign.photo} alt={campaign.title} className="w-32 h-32 object-cover" />
              // </li>

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
      
      <Link to={`/campaign/${campaign._id}`}><button className="btn btn-primary">See more</button> </Link>
    </div>
  </div>
</div>
            ))
          ) : (
            <p className="text-gray-500">No active campaigns available.</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Home;
