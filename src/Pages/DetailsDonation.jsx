import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from './AuthProvider/AuthProvider';

const DetailsDonation = () => {
  const { user } = useContext(AuthContext);
  const data = useLoaderData();
  
  const { _id, name, email, title, description, amount, type, photo, deadline } = data;

  const donateNew = {
    name,
    email,
    title,
    description,
    amount,
    type,
    photo,
    deadline,
    userName: user?.displayName || "Anonymous",
    userEmail: user?.email || "No Email",
  };

  const handleDonate = () => {
    fetch("http://localhost:3000/donate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(donateNew),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("res data from md",result)
        if (result.insertedId) {
          alert("Donation successful!");
        } else {
          alert("Failed to donate.");
        }
      })
      .catch((error) => console.error("Error submitting donation:", error));
  };

  return (
    <div>
      <h1 className="text-xl font-bold">Details Of Donation:</h1>
      <div className="card bg-amber-200 w-3xl shadow-xl mx-auto">
        <figure className="px-10 pt-10">
          <img src={photo} alt={title} className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Title: {title}</h2>
          <h2 className="card-title">Name: {name}</h2>
          <h2>Email: {email}</h2>
          <h2>Description: {description}</h2>
          <h2 className="text-xl font-bold">Amount: ${amount}</h2>
          <h2>Type: {type}</h2>
          <h2 className="text-xl font-bold">Deadline: {deadline}</h2>
          <div className="card-actions">
            <button onClick={handleDonate} className="btn btn-primary">
              Donate Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsDonation;
