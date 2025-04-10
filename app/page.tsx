'use client'
import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Nav from './components/Navbar/Nav';
import Home from './components/Home';



const Page = () => {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js')
      .then((bootstrap) => {
        // Bootstrap loaded successfully
      })
      .catch((err) => console.error("Bootstrap JS loading failed", err));
  }, []);
  

  return (
    <>
      <Nav />
      <Home />
    </>
  );
};

export default Page;
