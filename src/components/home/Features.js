import React from 'react';
import fasticon from '../../assets/img/fasticon.png';
import secureicon from '../../assets/img/secureicon.PNG';
import smarticon from '../../assets/img/smarticon.PNG';

const features = [
  {
    img: fasticon,
    heading: 'Fast',
    desc: 'Share your current insurance information in seconds'
  },
  {
    img: secureicon,
    heading: 'Secure',
    desc: 'Transfer your insurance information safely and privately'
  },
  {
    img: smarticon,
    heading: 'Smart',
    desc: 'Double check whether you have the right coverage at the right price'
  }
];

const Features = () => {
  return (
    <div className="feature-list">
      {features.map(item => {
        return (
          <div className="feature-item">
            <div className="icon">
              <img src={item.img} alt="" />
            </div>
            <div className="text w-100 text-left">
              <h3>{item.heading}</h3>
              {item.desc}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Features;
