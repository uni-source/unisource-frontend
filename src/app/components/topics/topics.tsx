import React from 'react';
import './topics.css'; 

interface TopicsProps {
  message: string;
}

const Topic: React.FC<TopicsProps> = ({ message }) => {
  return (
    <div className="text-center my-5 whole-topic">
      <h2 className='topic-name'>{message}</h2>
      <div className="d-flex justify-content-center">
        <div className="dot mx-1"></div>
        <div className="dot mx-1"></div>
        <div className="dot mx-1"></div>
        <div className="dot mx-1"></div>
        <div className="dot mx-1"></div>
      </div>
    </div>
  );
};

export default Topic;
