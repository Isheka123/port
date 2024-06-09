import React from 'react';
import Card from '../card/Card';
import Navbar from '../navbar/Navbar';
import { youtube } from '../../assests';

const Courses = () => {
  return (
    <div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }

        .animate-marquee {
          display: inline-block;
          animation: marquee 10s linear infinite;
        }
      `}</style>
      <Navbar />
      <div className="bg-black p-10 flex items-center justify-center relative">
        <div className="absolute top-0 w-full">
          <div className="bg-yellow-500 text-black py-2 text-center overflow-hidden">
            <div className="animate-marquee text-xl font-bold whitespace-nowrap">
              Coming Soon
            </div>
          </div>
        </div>
        <div className="text-white text-center flex flex-wrap justify-center gap-10 mt-12">
          <Card
            title="Yolov10 object detection and tracking"
            rating={5}
            imageSrc={youtube}
            description="Computer Vision Freelancer"
            price="Free"
          />
          <Card
            title="Old principals of computer vision"
            rating={4}
            imageSrc={youtube}
            description="Computer Vision Freelancer"
            price="Free"
          />
          <Card
            title="Object detection using transformers"
            rating={4}
            imageSrc={youtube}
            description="Computer Vision Freelancer"
            price="Free"
          />
          <Card
            title="Solve Real-World Problems with YOLOv8 and Django"
            rating={4}
            imageSrc={youtube}
            description="Computer Vision Freelancer"
            price="Free"
          />
          <Card
            title="From Zero to Hero: YOLOv8 Object Detection and Flask Web Applications"
            rating={4}
            imageSrc={youtube}
            description="Computer Vision Freelancer"
            price="Free"
          />
          <Card
            title="The Evolution of Object Detection: From Inception to Modern Breakthroughs"
            rating={4}
            imageSrc={youtube}
            description="Computer Vision Freelancer"
            price="Free"
          />
        </div>
      </div>
    </div>
  );
};

export default Courses;
