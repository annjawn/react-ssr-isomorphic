import React, { Component } from 'react';

const Home = () => {
  return (
    <div className="center-align" style={{ marginTop: '200px' }}>
      <h3>
        Welcome
      </h3>
      <p>
        Checkout these awesome features
      </p>
    </div>
  );
};

//returns an object rather tan just the function
export default {
  component: Home
};
