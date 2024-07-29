import './ErrorComponent.css';
import React from 'react';
import Link from 'next/link';

const ErrorComponent = () => {
    return (
      <div className="Error-outer">
        <div className="Error-Inner">
            <div className="Error-container">
                <div className="Error-header">
                    <img src="./assets/UniSourceLogo.png" className="Error-header-img" alt="UniSource-logo" />
                    <h1 id="uniSource">UNISOURCE</h1>
                </div>
                <div className="Error-body-container">
                    <div className="Error-body">
                        <div className="Error-left">
                            <div className="left-text">
                            <h1 id='ooops'>Ooops!</h1>
                            <h3 id='sorry'>Sorry,</h3>
                            <h3 id='page-not-found'>Page not found :(</h3>
                                <div className="Back-To-Home-btn-container">
                                <Link href="/" passHref>
                                    <button className="back-to-home-btn">Back to Home</button>  
                                </Link>    
                                </div>
                            </div>
                        </div>
                        <div className="Error-right">
                            <div className="Animation-container">
                                <img src="./assets/ErrorPage/page not found.jpg" id='error-image' alt="Page not found image" />
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
        </div>
      </div>
    );
  };
  
  export default ErrorComponent;
  

  