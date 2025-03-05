import React from 'react';
import img from '../assets/images/img2.jpg'
const Impact = () => {
    return (
        <div className='w-7/8 mx-auto mt-10 bg-gray-200 p-4'>
            <h1 className='flex  justify-center text-3xl font-bold mb-4'>Transforming Aid and Philanthropy</h1>
            <h2  className='flex justify-center text-xl mb-4' >Our impact goes beyond moving money to where it's needed most.</h2>
            <p className='flex justify-center text-base mb-4' > GlobalGiving is on a mission to transform the way aid and philanthropy work so communities are in the driver's seat of change.</p>
<div className='flex flex-col lg:flex-row'>
    <div>
        <h1 className='text-xl text-blue-500 '>Since 2002, we've raised more than</h1>
        <p className='text-xl font-bold text-amber-500'>$998M</p>
        < h1 className='text-xl text-blue-500 '>from</h1>
        <p className='text-xl font-bold text-amber-500'>1,925,425
        </p>
        <h1  className='text-xl text-blue-500 ' >people like you who support</h1>
        <p className='text-xl font-bold text-amber-500'>39,317</p>
        <p className='text-xl text-blue-500 '>projects in</p>
        <p className='text-xl font-bold text-amber-500'>175+</p>
        <h1  className='text-xl text-blue-500 ' >countries.</h1>
    </div>
    <div>
        <img src={img} alt="" />
    </div>
</div>

        </div>
    );
};

export default Impact;