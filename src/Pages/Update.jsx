import { useContext } from "react";
import { AuthContext } from "./AuthProvider/AuthProvider";
import { useLoaderData, useParams } from "react-router-dom";

const Update = () => {
  const loadedData = useLoaderData(); // Data loaded by the route loader
  const { id } = useParams(); // Get the campaign ID from the URL

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const title = form.title.value;
    const description = form.description.value;
    const amount = form.amount.value;
    const type = form.type.value;
    const photo = form.photo.value;
    const deadline = form.deadline.value;

    const updatedCampaign = {
      name,
      email,
      title,
      description,
      amount,
      type,
      photo,
      deadline,
    };

    console.log("Updated campaign data:", updatedCampaign);

    // Send data to the server
    fetch(`http://localhost:3000/updateCampaign/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedCampaign),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Response from server:", data);
        if (data.modifiedCount > 0) {
          alert("Campaign updated successfully!");
        }
      })
      .catch((error) => {
        console.error("Error updating campaign:", error);
        alert("Failed to update campaign.");
      });
  };

  return (
    <div>
      <h1>Update Campaign</h1>
      <div className="w-2/3 bg-amber-100 mx-auto p-12">
        <form onSubmit={handleSubmit}>
          <div className="w-full flex flex-col mb-2">
            <label className="label">
              <span className="label-text">Name:</span>
            </label>
            <input
              type="text"
              name="name"
              defaultValue={loadedData.name} // Pre-fill with existing data
              placeholder="Name"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="w-full flex flex-col mb-2">
            <label className="label">
              <span className="label-text">Email:</span>
            </label>
            <input
              type="email"
              name="email"
              defaultValue={loadedData.email} // Pre-fill with existing data
              placeholder="Email"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="w-full flex flex-col mb-2">
            <label className="label">
              <span className="label-text">Photo URL:</span>
            </label>
            <input
              type="text"
              name="photo"
              defaultValue={loadedData.photo} // Pre-fill with existing data
              placeholder="Photo URL"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="w-full flex flex-col mb-2">
            <label className="label">
              <span className="label-text">Campaign Title:</span>
            </label>
            <input
              type="text"
              name="title"
              defaultValue={loadedData.title} // Pre-fill with existing data
              placeholder="Title"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="w-full flex flex-col mb-2">
            <label className="label">
              <span className="label-text">Description:</span>
            </label>
            <input
              type="text"
              name="description"
              defaultValue={loadedData.description} // Pre-fill with existing data
              placeholder="Description"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="w-full flex flex-col mb-2">
            <label className="label">
              <span className="label-text">Minimum Donation Amount:</span>
            </label>
            <input
              type="number"
              name="amount"
              defaultValue={loadedData.amount} // Pre-fill with existing data
              placeholder="Donation Amount"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="w-full flex flex-col mb-2">
            <label className="label w-full">
              <span className="label-text">Campaign Type:</span>
              <select
                name="type"
                id="type"
                className="w-full border-2 border-gray-400"
                defaultValue={loadedData.type} // Pre-fill with existing data
              >
                <option value="personal issue">Personal Issue</option>
                <option value="startup">Startup</option>
                <option value="business">Business</option>
                <option value="creative ideas">Creative Ideas</option>
              </select>
            </label>
          </div>
          <div className="w-full flex flex-col mb-2">
            <label className="label">
              <span className="label-text">Deadline:</span>
            </label>
            <input
              type="date"
              name="deadline"
              defaultValue={loadedData.deadline} // Pre-fill with existing data
              placeholder="Deadline"
              className="input input-bordered w-full"
              required
            />
          </div>
          <input
            type="submit"
            value="Update Campaign"
            className="btn btn-block"
          />
        </form>
      </div>
    </div>
  );
};

export default Update;