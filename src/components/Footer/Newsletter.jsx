import React from 'react';
import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => (
  <div className='app__newsletter'>
    <div className='app__newsletter-heading'>
    <SubHeading className='newsletter' tittle="Newsletter" />

      <h1 className='headtext__cormorant-newsletter'>Subscribe to Our Newsletter</h1>
      <p className='p__cormorant-newsletter'>And never miss latest Updates!</p>
    </div>
    <div className='app__newsletter-input'>
      <input type="email" placeholder="Enter your email" />
      <button type="button">Subscribe</button>
    </div>
  </div>
);

export default Newsletter;
