// import React, { useContext, useEffect, useState } from 'react';
// import { useLoaderData } from 'react-router-dom';
// import { AuthContext } from './AuthProvider/AuthProvider';

// const MyDonations = () => {
//     const {user}=useContext(AuthContext)
//     const data=useLoaderData()
//    const [myData, setMyData] = useState([]);
//    useEffect(() => {
//        if (user?.email) {
//          fetch(`http://localhost:3000/myDonations?}`)
//            .then((res) => res.json())
//            .then((data) => {
//              console.log("Data from backend:", data);
//              setMyData(data); // Set the fetched data in state
//            })
//            .catch((error) => {
//              console.error("Error fetching data:", error);
//            });
//        }
//      }, [user]);
//     return (
//         <div>
//             <h1>my donation {myData.length}</h1>
           
            
//         </div>
//     );
// };

// export default MyDonations;
import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from './AuthProvider/AuthProvider';


const MyDonations = () => {
    const { user } = useContext(AuthContext);
    const allDonations = useLoaderData();
    const [myDonations, setMyDonations] = useState([]);

    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:3000/donate?email=${user.email}`)
                .then((res) => res.json())
                .then((data) => {
                    console.log("Fetched Donations:", data);
                    setMyDonations(data);
                })
                .catch((error) => {
                    console.error("Error fetching donations:", error);
                });
        }
    }, [user]);

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold text-center mb-6">My Donations ({myDonations.length})</h1>
            {myDonations.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {myDonations.map((donation) => (
                        <div key={donation._id} className="bg-white shadow-md rounded-lg p-4 border">
                            <h2 className="text-xl font-semibold">{donation.title}</h2>
                            <h2 className="text-xl font-semibold">{donation.name}</h2>
                            <h2 className="text-xl font-semibold"></h2>
                            <h2 className="text-xl font-semibold">{donation.type}</h2>
                            <img src={donation.photo} alt="" />
                            <p className="text-gray-600">Amount: <strong>${donation.amount}</strong></p>
                            <p className="text-gray-500">Date: {new Date(donation.deadline
).toLocaleDateString()}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-center text-gray-500">No donations found.</p>
            )}
        </div>
    );
};

export default MyDonations;
