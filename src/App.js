import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import graph from './graph.js';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {sliderTop: "620px",
    height: "50px",
  temperature: 40,
  humanSrc: "happyhuman.svg"};
    this.adjustTemperature = this.adjustTemperature.bind(this);
    this.toggleJacket = this.toggleJacket.bind(this);
  }

  adjustTemperature(e) {
    e.persist();
    var newHumanSrc = "happyhuman.svg";
    let temp = parseInt((660 - e.screenY + 120)/(660-120)*40 + 40);
    if (temp < 68) {
      newHumanSrc = "sadhuman.svg";
    }
    this.setState(prevState => ({
      sliderTop: e.screenY - 50 + "px",
      height: 660 - e.screenY + 120 + "px",
      temperature: temp,
      humanSrc: newHumanSrc
    }));
  }

  toggleJacket(e){
    e.persist();
    var newHumanSrc = "humanwithjacket.svg";
    if (this.state.humanSrc == "humanwithjacket.svg") {
      if (this.state.temperature < 68) {
        newHumanSrc = "sadhuman.svg";
      } else {
        newHumanSrc = "happyhuman.svg";
      }
    }
    this.setState(prevState => ({
      humanSrc: newHumanSrc
    }));
  }

  render() {
    return (
       <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Temperament</h1>
        </header>
        <p className="App-intro">
        Welcome to Temperament! Input your thermostat settings, square footage, and local area. We will
        estimate your energy usage and cost.
        </p>
        	<div>
        		<img id="thermo"  src="Thermometer.svg" alt="Thermometer" onClick={this.adjustTemperature}/>
        		<div id="temperature_slider" style={{ top: this.state.sliderTop,
            height: this.state.height}} onClick={this.adjustTemperature}>
        		</div>
        		<p id="temp_label" style={{top: this.state.sliderTop}}>{this.state.temperature}°F</p>
        	</div>
        		<div className="city-text">
        				<label className="city-text-input col-form-label">City </label>
        				<input type="text" value="Los Angeles" className="city-text-input" id="city-text-field" />
        		</div>
            <label className="area-text-input col-form-label">Area of House </label>
        	<input type="text" value="2000 ft^2" className="area-text-input" id="area-text-field" />
          <div id="graph">
          {graph}
          </div>
          <div id="human">
          <img src={this.state.humanSrc} onClick={this.toggleJacket} alt="Human"/>
          </div>
      </div>

    );
  }
}

export default App;
