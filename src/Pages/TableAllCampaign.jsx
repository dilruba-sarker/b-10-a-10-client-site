import React from 'react';
import { Link } from 'react-router-dom';

const TableAllCampaign = ({singleData,idx}) => {
  
    const {_id,name,title,amount,deadline,photo}=singleData
   

    return (
   <div></div>,
        <tr className="hover:bg-gray-100 border-b">
        <td className="px-4 py-2">{idx + 1}</td>
        <td className="px-4 py-2">{name}</td>
        <td className="px-4 py-2">{title}</td>
        <td className="px-4 py-2">{deadline}</td>
        <td className="px-4 py-2">{amount}</td>
       
        <td  >     <Link to={`/campaign/${_id}`}><button className="btn btn-primary">See more</button> </Link></td>
      
    </tr>
    );
};

export default TableAllCampaign;