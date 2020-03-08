import React from 'react';
import Header from './header';
import personimg from '../../assets/img/person.png';

const Layout = ({ children }) => {
  return (
    <div className="content height-100 bg-light">
      <Header />
      <div className="container pb-5">
        <div className="wrapper">
          <img src={personimg} alt="" className="wrapperperson" />
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
