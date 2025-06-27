import React from 'react';
import { SubHeading } from "../../components";
import { data } from "../../constants";
import Background from '../../assets/strawcream.png'; 
import './Laurels.css';

const Laurels = () => (
  <div 
    className='app__wrapper section__padding' 
    id='awards'
    style={{ 
      background: `url(${Background}) no-repeat center center fixed`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}
    
  >
    <div className='app__wrapper_info'>
      <p className="chefs__word">Chef's Awards</p>
      <SubHeading className="sub-title" title="Awards & Recognition" />
      <h1 className='app__h1'>Our Laurels</h1>
      <div className='app__laurels-awards'>
        {data.awards.map((award) => (
          <div className='app__laurels-award' key={award.title}>
            <img src={award.imgUrl} alt={award.title} />
            <div className='app__laurels-award-content'>
              <p className='p__cormorant1'>{award.title}</p>
              <p className='p__sub'>{award.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div> 
);

export default Laurels;