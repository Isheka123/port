import React from "react";
import Navbar from "../navbar/Navbar";
const SmartBotProductPage = () => {
  return (
    <div className=" bg-black">
         <Navbar />
      <h1 className="text-4xl font-bold text-center text-white  mb-6">SMART BOT</h1>
      <p className="text-lg text-center text-white mb-10">
        The Future of Interaction Today
      </p>
      
      <section className="text-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold ">Boost Your Business with Smart AI Chatbots!</h2>
        <p className="mt-4 ">
          AI Chatbots are transforming modern businesses by providing 24/7 support, automating workflows, and enhancing customer experiences. Whether you're a startup or an enterprise, AI-driven interactions can give you a competitive edge in speed, efficiency, and scale.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-white ">What is Our AI Chatbot Solution?</h2>
        <p className="mt-4 text-white ">
          We offer Agentic AI Chatbots designed for business automation and customer service. Our bots integrate seamlessly with your databases, APIs, and workflows, automating everything from customer queries to complex transactions.
        </p>
      </section>

      <section className="text-white  p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold">Key Features & Advantages</h2>
        <ul className="mt-4  list-disc pl-6">
          <li>✅ Custom chatbot development with LangGraph, LangChain, or AWS Bedrock</li>
          <li>✅ Business automation for order processing, CRM updates, and FAQs</li>
          <li>✅ Seamless database & API integration</li>
          <li>✅ RAG (Retrieval Augmented Generation) for accurate responses</li>
          <li>✅ Scalable backend on AWS ECS & Load Balancer</li>
          <li>✅ Multi-platform deployment (web, mobile, APIs)</li>
          <li>✅ End-to-end development, deployment & support</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-white ">Real Client Success Story</h2>
        <p className="mt-4 text-white ">
          We developed a fully automated chatbot for a client to manage shipment creation and bid placement workflows. By integrating with their database and APIs, we enabled seamless transactions through natural language interactions.
        </p>
      </section>

      <section className="text-white  p-6 rounded-lg shadow-md mb-8 text-center">
        <h2 className="text-2xl font-semibold">Watch the Demo</h2>
        <a
          href="https://drive.google.com/drive/folders/1GPtmjuSYFq-iBVku3-HvJgjdzaxWTAPL?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline mt-4 block"
        >
          Full Demo Video Link
        </a>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-white ">Smart Bot Across Industries</h2>
        <ul className="mt-4 text-white  list-disc pl-6">
          <li>✅ eCommerce & Retail</li>
          <li>✅ Healthcare</li>
          <li>✅ Finance & Banking</li>
          <li>✅ Customer Support</li>
          <li>✅ Logistics & Supply Chain</li>
          <li>✅ Flights/Hotel/Travel Booking</li>
        </ul>
      </section>

      <section className="text-center mt-10">
        <h2 className="text-2xl font-semibold text-white ">Have an Idea? Let's Connect!</h2>
        <p className="mt-4 text-white ">
          Together, we can make the world a safer, smarter, and better place with AI.
        </p>
        <a
          href="https://www.linkedin.com/in/ch-vikas/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline mt-4 block"
        >
          LinkedIn Profile
        </a>
        <p className="mt-2 text-white ">📧 vikaschelluru@gmail.com</p>
      </section>
    </div>
  );
};

export default SmartBotProductPage;
