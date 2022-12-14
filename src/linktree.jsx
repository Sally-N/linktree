import React from 'react';
import './index.css';
import Header from './Components/Header/header';
// eslint-disable-next-line no-unused-vars
import Twitter from './Components/Twitterlink/twitter';
import ZuriTeam from './Components/ZuriTeam/zuriteam';
import ZuriBooks from './Components/ZuriBooks/zuribooks';
import PythonBooks from './Components/PythonBooks/pythonbooks';
import Bcheck from './Components/BackgroundCheck/backgroundcheckers';
import DesignBooks from './Components/DesignTools/design';
import Gitandslack from './Components/GitandSlack/gitslack';
import Footer from './Components/Footer/footer';
import Clink from './Components/Contact/contactlink';


// eslint-disable-next-line no-unused-vars
const LinkTree = () => {
    
    return (
      <div className="page">
        <div class="main">
          <div class="content">
            <Header />
            <Twitter />
            <ZuriTeam />
            <ZuriBooks />
            <PythonBooks />
            <Bcheck />
            <DesignBooks />
            <Clink />
          </div>
        </div>
        <Gitandslack />
        <Footer />
      </div>
    );
  }


export default LinkTree;

