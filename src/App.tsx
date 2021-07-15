import React from 'react';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router';

import './Login.scss';
import fbNameLogo from '../../assets/fbNameLogo.png';

function App(): React.ReactElement {


  return (
    <div className='login'>
      <div className='logo'>
        <img src={fbNameLogo} alt='name logo' />
        <h3>Facebook helps you connect and share with the people in your life.</h3>
      </div>
      <div className='loginCard'>
        <div className='card'>
          <span className='title'>Sign In</span>
          <p>Sign in with your Google account</p>
          <Button className='button' type='submit' >
            LOG IN
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;

