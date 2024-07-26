import React from 'react';
import ImageSlider from './ImageSlider'; // Import the ImageSlider component
import OrderForm from './OrderForm'; // Import the OrderForm component
import CallBackForm from './CallBackForm'; // Import the CallBackForm component
import './MainContent.css'; // Import the CSS file

function MainContent() {
  return (
    <div className="main-content">
      <div className="row mb-4">
        <div className="col-md-12">
          <ImageSlider /> {/* Insert the ImageSlider component */}
        </div>
      </div>

      <div className="text-center mb-4">
        <h4>
          Title Search Direct is a provider of residential property title searches an does not perform
          searches on commercial property.
        </h4>
      </div>

      <div className="row">
        <div className="col-md-6 mb-4">
          <OrderForm /> {/* Insert the OrderForm component */}
        </div>
        <div className="col-md-6 mb-4">
          <CallBackForm /> {/* Insert the CallBackForm component */}
        </div>
      </div>
    </div>
  );
}

export default MainContent;
