'use client';
import React from 'react';
import './loading.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const Loading = () => {
  return (
    <div className="loading-container d-flex justify-content-center align-items-center">
      <img src="./loading-purple.gif" alt="Loading..." className="loading-spinner img-fluid" />
    </div>
  );
}

export default Loading;
