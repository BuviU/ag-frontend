import React from "react";
import '../index.css';

const SectionTwo = () => {
  return (
    <div className="section-two container py-5 d-flex align-items-center">
      <div className="row w-100">
        <div className="col-md-6">
          <img
            src="https://via.placeholder.com/600x400"
            alt="Placeholder"
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-6">
          <h2>About Us</h2>
          <p>
            We build modern, responsive websites using React and Bootstrap. Our mission is to
            deliver fast and user-friendly experiences for all platforms.
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default SectionTwo;
