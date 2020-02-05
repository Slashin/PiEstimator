import React from 'react';
import './App.css';

class PiDisplay extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      points:[],
      piValue: 0,
      numberOfPoints: 100
    }
  }

  componentDidMount = () =>{
      this.calculate();
  }

  onChange=(e)=>{
    let numberOfPoints = e.target.value;
    this.setState({numberOfPoints});
  }

  calculate = () => {
    let x = 0, y = 0, totalPoints = 0, circlePoints = 0, points=[];


    for(let i = 0; i<this.state.numberOfPoints; i++){
        x = Math.random();
        y = Math.random();

        if(Math.sqrt(x*x + y*y) <= 1){
            points.push({x,y});
            circlePoints+=1; 
        }

        totalPoints+=1;
    }

    let piValue = ((circlePoints/totalPoints)*4).toFixed(4);

    this.setState({points, piValue});
  

  }

  render(){
    return (
      <div id="piDisplayContainer"> 
        <div id="leftBox">
            <div id="leftBoxContainer">
            <div id="leftBox1">
                <input type="number" className="form-control inputField" onChange={(e)=>{this.onChange(e)}} placeholder={this.state.numberOfPoints}/>
                <button className="btn btn-success" onClick={this.calculate}>Estimate</button>
            </div>
            <br/><br/>
            <div id="leftBox2">
                <h1><strong>&pi;</strong> &#8776; {this.state.piValue}</h1>
            </div>
            </div>
        </div>
        <div id="rightBox">
            <div id="circle">
                {
                this.state.points.map((point)=>{
                    return(
                        <div className="point" style={{"marginBottom":point.y*390, "marginLeft":point.x*390}}></div>
                    )
                })
                
                }
            
            </div>
        </div>
      

      </div>
    );
  }
  
}

export default PiDisplay;
