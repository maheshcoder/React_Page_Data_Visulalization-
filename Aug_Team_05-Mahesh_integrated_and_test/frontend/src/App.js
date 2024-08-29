import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
import SecondFooter from './components/Footer/SecondFooter';
function Page() {
    return (
      <div className="App">
        <Navbar />
        <Body />
        <Footer />
        <SecondFooter />
      </div>
    );
  }
  
  export default Page;
  