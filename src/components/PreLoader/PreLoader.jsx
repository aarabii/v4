import React from 'react';
import './preloader.scss';

const PreLoader = () => {
  return (
    <div className='main-container'>
      <div class="content">
      <div class="planet">
          <div class="ring"></div>
              <div class="cover-ring"></div>
          <div class="spots">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>

          </div>
      </div>
      <p>loading</p>
      </div>
    </div>
  )
}

export default PreLoader