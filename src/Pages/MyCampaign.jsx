

import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from './AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const MyCampaign = () => {
  const { user } = useContext(AuthContext);
  const [myData, setMyData] = useState([]);

  // Fetch campaigns for the logged-in user
  useEffect(() => {
    if (user?.email) {
      fetch(`https://b-10-a-10-server.vercel.app/myCampaign?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log("Data from backend:", data);
          setMyData(data); // Set the fetched data in state
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [user]);

  // Handle delete campaign
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Send DELETE request to the backend
        fetch(`https://b-10-a-10-server.vercel.app/myCampaign/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("Delete response:", data);
            if (data.deletedCount > 0) {
              // Remove the deleted campaign from the UI
              setMyData((prevData) => prevData.filter((campaign) => campaign._id !== id));
              Swal.fire({
                title: "Deleted!",
                text: "Your campaign has been deleted.",
                icon: "success",
              });
            }
          })
          .catch((error) => {
            console.error("Error deleting campaign:", error);
            Swal.fire({
              title: "Error!",
              text: "Failed to delete the campaign.",
              icon: "error",
            });
          });
      }
    });
  };

  return (
    <div>
      <h1>My All Campaigns: {myData.length}</h1>
      <div className="overflow-x-auto">
        {myData.length === 0 ? (
          <p className="text-center text-gray-500">No Data Found</p>
        ) : (
          <table className="table w-full">
            <thead>
              <tr className="bg-gray-300 text-left">
                <th className="px-4 py-2">Serial</th>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Title</th>
                <th className="px-4 py-2">Deadline</th>
                <th className="px-4 py-2">Amount</th>
                <th className="px-4 py-2">Action</th>
                <th className="px-4 py-2">Action2</th>
              </tr>
            </thead>
            <tbody>
              {myData.map((newData, index) => (
                <tr key={newData._id} className="hover:bg-gray-100 border-b">
                  <td className="px-4 py-2">{index + 1}</td>
                  <td className="px-4 py-2">{newData.name}</td>
                  <td className="px-4 py-2">{newData.title}</td>
                  <td className="px-4 py-2">{newData.deadline}</td>
                  <td className="px-4 py-2">{newData.amount}</td>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={() => handleDelete(newData._id)}
                    >
                      Delete
                    </button>
                  </td>
                  <td>
                   
                    <Link to={`/updateCampaign/${newData._id}`}> <button className="btn btn-primary">Update</button></Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default MyCampaign;