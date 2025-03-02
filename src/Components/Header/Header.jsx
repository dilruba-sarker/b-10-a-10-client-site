import React from 'react';
import { CgProfile } from 'react-icons/cg';

import { TbBasketDollar } from 'react-icons/tb';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const links=< >
    <li className='text-md font-bold'><NavLink to='/'>Home</NavLink></li>
    <li className='text-md font-bold'><NavLink to='/campaigns'>All Campaign</NavLink></li>
    <li className='text-md font-bold'><NavLink to='/addCampaign'>Add New Campaign</NavLink></li>
    <li className='text-md font-bold'><NavLink to='/myCampaign'>My Campaign</NavLink></li>
    <li className='text-md font-bold'><NavLink to='/myDonations'>My Donations</NavLink></li>
 
    </>
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
     {  links}
      </ul>
    </div>
    <div className='text-4xl font-bold'><TbBasketDollar /></div>
    <h1 className='text-2xl font-bold'>Crowd Fund </h1>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {  links}
    </ul>
  </div>
  {/* profile pic */}
  <div><CgProfile /></div>
  <div className="navbar-end">
<NavLink className='text-md font-bold' to='/register'>Register</NavLink>
  </div>
</div>
        </div>
    );
};

export default Header;