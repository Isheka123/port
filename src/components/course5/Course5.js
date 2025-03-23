import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaArrowLeft, FaArrowRight, FaGithub } from 'react-icons/fa';
import { rag,voicechatbot,tvseries, maxresdefault, demo,land,pot,yolo,movie,crosswork,mtop,lip,helipad,real,person, tennis } from '../../assests';

const projects = [
  {
    title: "Voice Chat Bot",
    img_url: voicechatbot,
    description: "Developed a voice-based AI chatbot for hands-free, interactive conversations. It integrates speech-to-text, LLM processing, and text-to-speech for seamless human-AI interactions, providing real-time intelligent responses.",
    github_url: "https://github.com/Vikas-ABD/voice_chat_bot.git"
  },
  {
    title: "Tv Series Analysis System With AI",
    img_url: tvseries,
    description: "Developed an AI system for theme extraction, character network visualization, and TV series classification using Scrapy and Transformers. Built a chatbot with a fine-tuned LLaMA 3.1 model for character simulations.",
    github_url: "https://github.com/Vikas-ABD/tv_series_analysis-system_with_AI_NLP_LLM.git"
  },
  {
    title: "Tennis Analysis system with AI",
    img_url: tennis,
    description: "This project provides an in-depth analysis of tennis players in a video, focusing on measuring their speed, ball shot speed, and the number of shots. The analysis involves detecting players and the tennis ball using YOLO models and extracting key points of the tennis court using a ResNet50 model.",
    github_url: "https://github.com/Vikas-ABD/Tennis-Analysis-system-with-AI.git"
  },
  {
    title: "Digital Shadow Of Tello Drone",
    img_url: maxresdefault,
    description: "Integrated Tello drone control via MATLAB with Tiny YOLOv4 for object detection and SVM, Isolation Forest, and autoencoders for anomaly detection. Enabled data exchange via OPC UA and Node-RED.",
    github_url: "https://github.com/Vikas-ABD/digital_shadow_of_Tello_drone"
  },

  {
    title: "RAG LLM Application With Wisper Integration",
    img_url: rag,
    description: "Developed a Retrieval-Augmented Generation (RAG) application using the Whisper Large V3 model for pre-processing and a large language model for retrieving and answering questions.",
    github_url: "https://github.com/Vikas-ABD/RAG_LLM_Application_with_Wisper_Integration"
  },
  {
    title: "Coco-Cola level State Detection",
    img_url: demo,
    description: "Developed a deep learning model for detecting ThumsUp bottle variations, including data collection, annotation, augmentation, training, and edge deployment.",
    github_url: "https://github.com/Vikas-ABD/coco-cola_level_state_detection"
  },
  {
    title: "Pose Detection using YOLOv8",
    img_url: yolo,
    description: "Developed a project for pose detection using YOLOv8, aiming to detect and visualize human poses in images and videos.",
    github_url: "https://github.com/Vikas-ABD/pose_detection_using_yolov8"
  },
  {
    title: "Movie Similarity Analysis and Recommendation",
    img_url: movie,
    description: "Conducted movie similarity analysis with Kaggle's Movie Plot Synopses using BoW, TF-IDF, and CBOW; CBOW performed best.",
    github_url: "https://github.com/Vikas-ABD/Movie_Similarity_Analysis_Recommendation"
  },
  {
    title: "Object Detection and Evaluation",
    img_url: crosswork,
    description: "This project uses YOLO for object detection, compares predictions with ground truth, and visualizes results, identifying false positives/negatives.",
    github_url: "https://github.com/Vikas-ABD/yolov8_custom_data_evaluation"
  },
  {
    title: "Pothole Detection using YOLOv8",
    img_url: pot,
    description: "Developed a Python web interface for YOLOv8 to detect potholes in images using an object detection neural network.",
    github_url: "https://github.com/Vikas-ABD/Pothole_detection_with_web_app"
  },
  {
    title: "Lip Syncing with Wav2Lip",
    img_url: lip,
    description: "Implemented Wav2Lip, a lip-syncing model trained on LRS2 dataset, offering high accuracy across identities, voices, languages, CGI faces, and synthetic voices.",
    github_url: "https://github.com/Vikas-ABD/Lip_Syncing"
  },
  {
    title: "Helipad Detection and Alignment",
    img_url: helipad,
    description: "Cutting-edge system developed for helipad detection and precise alignment using computer vision and deep learning, enabling seamless autonomous drone operations.",
    github_url: "https://github.com/Vikas-ABD/Helipad_detection_and_alignment_for_automatic_charging_of_drones"
  },
  {
    title: "Landmarks detection using YOLOv8 ",
    img_url: land,
    description: "Python-based web interface for YOLOv8 object detection, detecting landmarks on images using a trained model, facilitating seamless usage.",
    github_url: "https://github.com/Vikas-ABD/landmarks_detectionL_webapp"
  },
  {
    title: "MATLAB and Python for Fruit Quality Classification",
    img_url: mtop,
    description: "Bridging MATLAB and Python, this project classifies fruit quality via a CNN model, trained in MATLAB, converted to TensorFlow in Python. Integrated into Flask web app.",
    github_url: "https://github.com/Vikas-ABD/matlab_to_python_classification_using_DL"
  },
  {
    title: "Real-Time Power Consumption Forecasting",
    img_url: real,
    description: "Integrates Azure Blob Storage, MATLAB, and OPC UA with Node-RED for real-time power consumption forecasting, uploading data to Azure and MATLAB.",
    github_url: "https://github.com/Vikas-ABD/Real-TimePowerConsumptionForecastingwithAzure_MATLAB_Node-RED_and_OPCUAIntegration"
  },
  {
    title: "Person Tracking Reidentification",
    img_url: person,
    description: "Collected publicly available CCTV footage, preprocess video data, convert to frames, annotate objects, and apply data augmentation for Person Tracking.",
    github_url: "https://github.com/Vikas-ABD/person_tracking_reidentification"
  },
];

const Course5 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [numCardsToShow, setNumCardsToShow] = useState(getCardsToShow());

  useEffect(() => {
    const handleResize = () => {
      setNumCardsToShow(getCardsToShow());
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      const lastIndex = projects.length - numCardsToShow;
      return prevIndex === 0 ? lastIndex : prevIndex - numCardsToShow;
    });
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      const lastIndex = projects.length - numCardsToShow;
      return prevIndex >= lastIndex ? 0 : prevIndex + numCardsToShow;
    });
  };

  function getCardsToShow() {
    if (window.innerWidth >= 1024) return 3; // Large screen
    if (window.innerWidth >= 768) return 2; // Medium screen
    return 1; // Small screen
  }

  return (
    <div className='lg:h-screen md:h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#354445] to-black text-white lg:p-4 pt-4 pb-4 md:p-10'>
      <p className='text-5xl pb-3'>Projects</p>
      <div className="flex items-center justify-center w-full">
        <button
          onClick={handlePrev}
          className="p-2 mx-4 transition-transform transform hover:scale-110 hover:bg-gray-700 rounded-full"
        >
          <FaArrowLeft className="lg:text-3xl md:text-3xl text-2xl" />
        </button>
        <div className="w-full max-w-6xl lg:p-4 p-2 flex items-center overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 transition-transform duration-500 ease-in-out transform">
            {projects.slice(currentIndex, currentIndex + numCardsToShow).map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>
        <button
          onClick={handleNext}
          className="p-2 mx-4 transition-transform transform hover:scale-110 hover:bg-gray-700 rounded-full"
        >
          <FaArrowRight className="lg:text-3xl md:text-3xl text-2xl" />
        </button>
      </div>
    </div>
  );
};

const ProjectCard = ({ project, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,  // Trigger animation only once
    threshold: 0.1,     // Trigger when 10% of the component is visible
  });

  return (
    <motion.div
      ref={ref}
      className="relative bg-gray-800 rounded-lg p-6 flex flex-col items-center text-center transition-transform transform w-full"
      style={{ minWidth: '100%' }}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      whileHover={{ scale: 1.05, backgroundColor: '#2a2a2a' }}
    >
      <div className="relative w-full h-48 mb-4">
        <img
          src={project.img_url}
          alt={project.title}
          className="w-full h-full object-cover rounded-lg"
        />
        <a
          href={project.github_url}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-2 right-2 text-white bg-black bg-opacity-50 rounded-full p-2"
        >
          <FaGithub className="text-2xl" />
        </a>
      </div>
      <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
      <p className="text-gray-400">{project.description}</p>
    </motion.div>
  );
};

export default Course5;
