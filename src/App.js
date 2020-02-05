import React from 'react';
import logo from './logo.svg';
import './App.css';
import PiDisplay from './PiDisplay';

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      
    };
  }

  render(){
    return (
      <div id="main"> 
        <div id="container">
          <h2 id="mainTitle">Random Number &pi; Estimator</h2>
          <div>
              <div><PiDisplay/></div>
          </div>
        </div>
         
      </div>



    );
  }
  
}

export default App;
