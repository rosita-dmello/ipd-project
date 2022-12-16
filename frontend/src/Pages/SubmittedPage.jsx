import React from 'react';
import { NavBar } from '../Components/Navbar';
import { Loader } from '../Components/Loader';

export const Result = () => {
  return (
    <>
      <NavBar />
      <Loader show={true} />
    </>
  );
};
