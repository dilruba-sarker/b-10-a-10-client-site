import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import TableAllCampaign from "./TableAllCampaign";


const AllCampaign = () => {
  const data = useLoaderData();

const [campaigns, setCampaigns] = useState(data);
const handleSort = () => {
  const sortedData = [...campaigns].sort((a, b) => parseFloat(b.amount) - parseFloat(a.amount));
  setCampaigns(sortedData);
  console.log(sortedData,"sortedData");
};
   
  return (
    <div>
      <h1>All Campaign {data.length} </h1>
      
      <button onClick={handleSort} className="btn btn-warning">Sort</button>
      <div className="overflow-x-auto">
      {/* <div className="overflow-x-auto"> */}
        {data.length === 0 ? (
          <p className="text-center text-gray-500">No Data Found</p>
        ) : (
          <table className="table sm:w-xl lg:w-full md:w-full "> 

<thead>
    <tr className="bg-gray-300 text-left">
        <th className="px-4 py-2">Serial</th>
        <th className="px-4 py-2">Name</th>
        <th className="px-4 py-2">Title</th>
        <th className="px-4 py-2">Deadline</th>
        <th className="px-4 py-2">Amount</th>
        <th className="px-4 py-2">Action</th>
        
    </tr>
</thead>
<tbody>
{campaigns.map((singleData, index) => (
  <TableAllCampaign key={index} singleData={singleData} idx={index} />
))}

   
</tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default AllCampaign;
