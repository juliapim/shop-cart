import React from 'react';
import '../scss/App.scss';
import Products from './Products.js';
import { connect } from "react-redux";


const App=(props)=> {
  return (
    <div className="App">
      <header className="App-header">
    <Products></Products>
      </header>
    </div>
  );
};


const mapsStateToProps = (state) => { //pega o state para retorna-lo
  console.log('APP.JS: I got the new state: ', state);
  return state;
};

export default connect(mapsStateToProps)(App);