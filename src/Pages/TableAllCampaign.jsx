import React from 'react';

const TableAllCampaign = ({singleData,idx}) => {
    console.log(singleData);
    const {_id,name,title,amount,deadline,photo}=singleData
   

    return (
        <tr className="hover:bg-gray-100 border-b">
        <td className="px-4 py-2">{idx + 1}</td>
        <td className="px-4 py-2">{name}</td>
        <td className="px-4 py-2">{title}</td>
        <td className="px-4 py-2">{deadline}</td>
        <td className="px-4 py-2">{amount}</td>
        <td className="px-4 py-2 text-blue-500 cursor-pointer">See more</td>
    </tr>
    );
};

export default TableAllCampaign;