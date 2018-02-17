import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {sliderTop: "620px",
    height: "50px",
  temperature: 40};
    this.adjustTemperature = this.adjustTemperature.bind(this);
  }

  adjustTemperature(e) {
    e.persist();
    let temp = parseInt((660 - e.screenY + 120)/(660-120)*40 + 40);
    console.log("temperature being adjusted" + e.screenY);
    this.setState(prevState => ({
      sliderTop: e.screenY - 50 + "px",
      height: 660 - e.screenY + 120 + "px",
      temperature: temp
    }));
  }

  render() {
    return (
       <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Temperament</h1>
        </header>
        <p className="App-intro">
          To get started, use the thermometer <code>src/App.js</code> to set your
          temperature.
        </p>
        	<div>
        		<img id="thermo"  src="Thermometer.svg" alt="Thermometer" onClick={this.adjustTemperature}/>
        		<div id="temperature_slider" style={{ top: this.state.sliderTop,
            height: this.state.height}} onClick={this.adjustTemperature}>
        		</div>
        		<p id="temp_label" style={{top: this.state.sliderTop}}>{this.state.temperature}°F</p>
        	</div>
        		<div className="city-text">
        				<label className="city-text-input col-form-label">City</label>
        				<input type="text" value="Los Angeles" className="city-text-input" id="city-text-field" />
        		</div>
      </div>
    );
  }
}

export default App;
