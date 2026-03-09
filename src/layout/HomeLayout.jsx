import React from 'react';
import Navber from '../Shared/Navber';
import Footer from '../Shared/Footer';
import { Outlet } from 'react-router';

const HomeLayout = () => {
  return (
    <div>
      <Navber></Navber>
      <div className='bg-gray-200 '>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default HomeLayout;