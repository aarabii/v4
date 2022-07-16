import React from 'react';
import './404.css'

import { useLocation } from 'react-router-dom';

const PageNotFount = () => {
  const location = useLocation();

  return (
    <div id='notfound'>
        <div className='notfound'>
            <div className='notfound-404'>
                <h1>404</h1>
                <h2>Page not found</h2>
            </div>
            <a href='/'>Go To Homepage</a>
            <p>No match for <code>{location.pathname}</code></p>
        </div>
    </div>
  )
}

export default PageNotFount