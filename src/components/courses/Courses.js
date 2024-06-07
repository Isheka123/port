import React from 'react';
import Card from '../card/Card';
import Navbar from '../navbar/Navbar';

const Courses = () => {
  return (
    <div>
    <Navbar />
    <div className='bg-black p-10 flex items-center justify-center'>
      <div className="text-white text-center flex flex-wrap justify-center gap-10">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
    </div>
  );
};

export default Courses;
