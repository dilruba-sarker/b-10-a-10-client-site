// import React, { useContext, useState } from 'react';
// import { CgProfile } from 'react-icons/cg';
// import { TbBasketDollar } from 'react-icons/tb';
// import { NavLink, useNavigate } from 'react-router-dom';
// import { AuthContext } from '../../Pages/AuthProvider/AuthProvider';


// const Header = () => {
//   const { user, logOut } = useContext(AuthContext);
// const [isDarkMode, setIsDarkMode] = useState(false);
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     logOut()
//       .then(() => navigate('/login'))
//       .catch(err => console.log(err.message));
//   };
// const toggleTheme = () => {
//   setIsDarkMode(!isDarkMode);
//   // Apply the theme to the body or a specific container
//   document.body.className = isDarkMode ? 'light-theme' : 'dark-theme';
// };
//   return (
//     <div className="navbar bg-amber-100 shadow-sm">
//       <div className="navbar-start">
//         <div className="dropdown">
//           <button tabIndex={0} className="btn btn-ghost lg:hidden">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
//             </svg>
//           </button>
       
//           <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
//             <li className='text-lg font-medium'><NavLink to='/'>Home</NavLink></li>
//             <li className='text-lg font-medium'><NavLink to='/campaigns'>All Campaign</NavLink></li>
//             <li className='text-lg font-medium'><NavLink to='/addCampaign'>Add New Campaign</NavLink></li>
//             <li className='text-lg font-medium'><NavLink to='/myCampaign'>My Campaign</NavLink></li>
//             <li className='text-lg font-medium'><NavLink to='/myDonations'>My Donations</NavLink></li>
//           </ul>
//         </div>
//         <TbBasketDollar className='text-4xl font-bold' />
//         <h1 className='text-2xl font-bold'>Crowd Fund</h1>
//       </div>
//       <button onClick={toggleTheme} className="btn btn-ghost ">
//           {isDarkMode ? '🔆' : '🌙'}
//         </button>
//       <div className="navbar-center hidden lg:flex">
//         <ul className="menu menu-horizontal px-1">

//           <li className='text-lg font-medium'><NavLink to='/'>Home</NavLink></li>
//           <li className='text-lg font-medium'><NavLink to='/campaigns'>All Campaign</NavLink></li>
//           <li className='text-lg font-medium'><NavLink to='/addCampaign'>Add New Campaign</NavLink></li>
//           <li className='text-lg font-medium'><NavLink to='/myCampaign'>My Campaign</NavLink></li>
//           <li className='text-lg font-medium'><NavLink to='/myDonations'>My Donations</NavLink></li>
//         </ul>
//       </div>

//       <div className=' py-8'>
// {/* <button onClick={toggleTheme} className="btn btn-ghost">
//           {isDarkMode ? '🔆' : '🌙'}
//         </button> */}

//         {user ? (
//           <>
//             <div className="relative group inline-block">
//               {/* Profile Image */}
//               <img
//                 src={user.photoURL}
//                 alt="Profile"
//                 className="w-10 h-10 rounded-full cursor-pointer"
//               />
              
//               {/* Hover Effect - Show Username */}
//               <p className="absolute left-1/2 top-8 w-max -translate-x-1/2 rounded-md  text-black opacity-0 transition-opacity group-hover:opacity-100">
//                 {user.displayName}
//               </p>
//             </div>

//             <button onClick={handleLogout} className="btn btn-error ml-4">Logout</button>
//           </>
//         ) : (
//           <>
            
//             <button className="btn"><NavLink to="/login">Login</NavLink></button>
//             <button className="btn mt-1"><NavLink to="/register">Register</NavLink></button>
            
//           </>
//         )}
//       </div>
//     </div>
//   );
// };
//  export default Header;
// // import React, { useContext, useState } from 'react';
// // import { CgProfile } from 'react-icons/cg';
// // import { TbBasketDollar } from 'react-icons/tb';
// // import { NavLink, useNavigate } from 'react-router-dom';
// // import { AuthContext } from '../../Pages/AuthProvider/AuthProvider';

// // const Header = () => {
// //   const { user, logOut } = useContext(AuthContext);
// //   const navigate = useNavigate();
// //   const [isDarkMode, setIsDarkMode] = useState(false);

// //   const handleLogout = () => {
// //     logOut()
// //       .then(() => navigate('/login'))
// //       .catch(err => console.log(err.message));
// //   };

// //   const toggleTheme = () => {
// //     setIsDarkMode(!isDarkMode);
// //     // Apply the theme to the body or a specific container
// //     document.body.className = isDarkMode ? 'light-theme' : 'dark-theme';
// //   };

// //   return (
// //     <div className={`navbar ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-amber-200 text-black'} shadow-sm`}>
// //       <div className="navbar-start">
// //         <div className="dropdown">
// //           <button tabIndex={0} className="btn btn-ghost lg:hidden">
// //             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" stroke="currentColor">
// //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
// //             </svg>
// //           </button>
// //           <ul tabIndex={0} className={`menu menu-sm dropdown-content ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-base-100 text-black'} rounded-box z-10 mt-3 w-52 p-2 shadow`}>
// //             <li className='text-lg font-medium'><NavLink to='/'>Home</NavLink></li>
// //             <li className='text-lg font-medium'><NavLink to='/campaigns'>All Campaign</NavLink></li>
// //             <li className='text-lg font-medium'><NavLink to='/addCampaign'>Add New Campaign</NavLink></li>
// //             <li className='text-lg font-medium'><NavLink to='/myCampaign'>My Campaign</NavLink></li>
// //             <li className='text-lg font-medium'><NavLink to='/myDonations'>My Donations</NavLink></li>
// //           </ul>
// //         </div>
// //         <TbBasketDollar className='text-4xl font-bold' />
// //         <h1 className='text-2xl font-bold'>Crowd Fund</h1>
// //       </div>

// //       <div className="navbar-center hidden lg:flex">
// //         <ul className="menu menu-horizontal px-1">
// //           <li className='text-lg font-medium'><NavLink to='/'>Home</NavLink></li>
// //           <li className='text-lg font-medium'><NavLink to='/campaigns'>All Campaign</NavLink></li>
// //           <li className='text-lg font-medium'><NavLink to='/addCampaign'>Add New Campaign</NavLink></li>
// //           <li className='text-lg font-medium'><NavLink to='/myCampaign'>My Campaign</NavLink></li>
// //           <li className='text-lg font-medium'><NavLink to='/myDonations'>My Donations</NavLink></li>
// //         </ul>
// //       </div>

// //       <div className="navbar-end flex items-center gap-4">
// //         {/* Theme Toggle Button */}
// //         <button onClick={toggleTheme} className="btn btn-ghost">
// //           {isDarkMode ? '🔆' : '🌙'}
// //         </button>

// //         {user ? (
// //           <>
// //             <div className="relative group inline-block">
// //               {/* Profile Image */}
// //               <img
// //                 src={user.photoURL}
// //                 alt="Profile"
// //                 className="w-10 h-10 rounded-full cursor-pointer"
// //               />
// //               {/* Hover Effect - Show Username */}
// //               <p className={`absolute left-1/2 top-8 w-max -translate-x-1/2 rounded-md ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-base-100 text-black'} opacity-0 transition-opacity group-hover:opacity-100 z-50`}>
// //                 {user.displayName}
// //               </p>
// //             </div>

// //             <button onClick={handleLogout} className="btn btn-error ml-4">Logout</button>
// //           </>
// //         ) : (
// //           <>
// //             <button className="btn"><NavLink to="/login">Login</NavLink></button>
// //             <button className="btn"><NavLink to="/register">Register</NavLink></button>
// //           </>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Header;

import React, { useContext, useState, useEffect } from 'react';
import { TbBasketDollar } from 'react-icons/tb';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Pages/AuthProvider/AuthProvider';

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  // Apply theme on initial load
  useEffect(() => {
    document.documentElement.className = isDarkMode ? 'dark' : 'light';
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  const handleLogout = () => {
    logOut()
      .then(() => navigate('/login'))
      .catch(err => console.log(err.message));
  };

  return (
    <div className={isDarkMode ? 'dark bg-gray-900 text-white' : 'light bg-red-400 text-black'}>
      <div className="navbar shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <button tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </button>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
              <li className='text-xl font-bold'><NavLink to='/'>Home</NavLink></li>
              <li className='text-xl font-bold'><NavLink to='/campaigns'>All Campaign</NavLink></li>
              <li className='text-xl font-bold'><NavLink to='/addCampaign'>Add New Campaign</NavLink></li>
              <li className='text-xl font-bold'><NavLink to='/myCampaign'>My Campaign</NavLink></li>
              <li className='text-xl font-bold'><NavLink to='/myDonations'>My Donations</NavLink></li>
            </ul>
          </div>
          <TbBasketDollar className='text-4xl font-bold' />
          <h1 className='text-2xl font-bold'>Crowd Fund</h1>
        </div>

        {/* Dark Mode Toggle */}
        <button onClick={toggleTheme} className="btn btn-primary">
          {isDarkMode ? '🔆' : '🌙'}
        </button>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className='text-xl font-bold'><NavLink to='/'>Home</NavLink></li>
            <li className='text-xl font-bold'><NavLink to='/campaigns'>All Campaign</NavLink></li>
            <li className='text-xl font-bold'><NavLink to='/addCampaign'>Add New Campaign</NavLink></li>
            <li className='text-xl font-bold'> <NavLink to='/myCampaign'>My Campaign</NavLink></li>
            <li className='text-xl font-bold'><NavLink to='/myDonations'>My Donations</NavLink></li>
          </ul>
        </div>

        <div className="py-8">
          {user ? (
            <>
              <div className="relative group inline-block">
                <img
                  src={user.photoURL}
                  alt="Profile"
                  className="w-10 h-10 rounded-full cursor-pointer"
                />
                <p className="absolute left-1/2 top-8 w-max -translate-x-1/2 rounded-md text-black opacity-0 transition-opacity group-hover:opacity-100">
                  {user.displayName}
                </p>
              </div>
              <button onClick={handleLogout} className="btn btn-error ml-4">Logout</button>
            </>
          ) : (
            <>
              <button className="btn"><NavLink to="/login">Login</NavLink></button>
              <button className="btn mt-1"><NavLink to="/register">Register</NavLink></button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
