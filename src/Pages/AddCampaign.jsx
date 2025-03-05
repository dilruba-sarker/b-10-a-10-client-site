

import { useContext } from "react";
import { AuthContext } from "./AuthProvider/AuthProvider";
import Swal from "sweetalert2";


const AddCampaign = () => {
const {user}=useContext(AuthContext)

    const handleSubmit=e=>{
        e.preventDefault()
        const form=e.target;
        const name=form.name.value;
        const email=form.email.value;
        const title=form.title.value;
        const description=form.description.value;
        const amount=form.amount.value;
        const type=form.type.value;
        const photo=form.photo.value;
        const deadline=form.deadline.value
        const newCampaign={name,email,title,description,amount,type,photo
          , deadline,  userName: user?.displayName || "Anonymous",
          userEmail: user?.email || "No Email",
        }
        console.log('data of newCampaign',newCampaign)
        // send data to serve
        fetch('https://b-10-a-10-server.vercel.app/addCampaign',{
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newCampaign),
        })
        .then(res=>res.json())
        .then(data=>{
     
          if(data. insertedId){
           
            Swal.fire({
              title: "Good job!",
              text: "Campaign added successfully!",
              icon: "success"
            });
          }
        })
    }
  return (
    <div>
      <h1>Add Campaign</h1>



  
      <div className="w-2/3 bg-amber-100 mx-auto p-12">
      <form onSubmit={handleSubmit}>
   
  
       <div className="w-full flex flex-col mb-2">

          <label className="label">
            <span className="label-text">Name: </span>
          </label>
          <input type="text" name="name" placeholder="name" className="input input-bordered w-full" required />
        </div> 
        <div className="w-full flex flex-col mb-2">
        <label className="label">
            <span className="label-text">Email: </span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered w-full" required />
   

        </div>
          
       <div className="w-full flex flex-col mb-2">

          <label className="label">
            <span className="label-text">Photo Url: </span>
          </label>
          <input type="text" name="photo" placeholder="Photo Url" className="input input-bordered w-full" required />
        </div> 
       <div className="w-full flex flex-col mb-2">

          <label className="label">
            <span className="label-text">Campaign title: </span>
          </label>
          <input type="text" name="title" placeholder="title" className="input input-bordered w-full" required />
        </div> 
       <div className="w-full flex flex-col mb-2">

          <label className="label">
            <span className="label-text">Description: </span>
          </label>
          <input type="text" name="description" placeholder="description" className="input input-bordered w-full" required />
        </div> 
       <div className="w-full flex flex-col mb-2">

          <label className="label">
            <span className="label-text">Minimum donation amount: </span>
          </label>
          <input type="number" name="amount" placeholder="donation amount" className="input input-bordered w-full" required />
        </div> 
       <div className="w-full flex flex-col mb-2">

          <label className="label w-full ">
            <span className="label-text">Campaign type: </span>
            <select name="type" id="type" className=" w-full border-2 border-gray-400">
    <option value="personal issue">personal issue</option>
    <option value="startup">startup</option>
    <option value=" business"> business</option>
    <option value="creative ideas"> creative ideas</option>
  </select>
          </label>
          
        </div> 
       <div className="w-full flex flex-col mb-2">

          <label className="label">
      
       
        <span className="label-text">Dead Line: </span>
          </label>
          <input type="date" name="deadline" placeholder="deadline" className="input input-bordered w-full" required />
        </div> 
      
         
      <input type="submit" value="Add Campaign"  className="btn btn-block" />
      </form>
      </div>
    </div>



  );
};

export default AddCampaign;
