import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
Indulge your senses and embark on a culinary adventure with us at [Restaurant Name]. Our website is your gateway to discovering the flavors, ambiance, and passion that define our dining experience.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Welcome to Ge, where passion for food meets a commitment to excellence. Founded in 2005 by Chef Maria Rodriguez and her husband, Roberto, Gourmet Haven began as a humble bistro in the heart of downtown. What started as a dream shared between two culinary enthusiasts has blossomed into a beloved dining destination renowned for its inventive cuisine and warm hospitality.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
