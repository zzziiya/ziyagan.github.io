import React, { Fragment } from 'react';

import AboutImg from 'media/image/dali.webp'

const About = () => (
  <Fragment>
    <div>
      <img className="about-img" src={AboutImg} alt="about" />
    </div>

    <div className="title about-title">
      About me
    </div> 

    <div className="content self-intro">
      Description
    </div> 
  </Fragment>
)

export default About;