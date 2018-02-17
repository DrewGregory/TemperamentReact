import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {sliderTop: "100px"};
    this.adjustTemperature = this.adjustTemperature.bind(this);
  }

  adjustTemperature(e) {
    console.log("temperature being adjusted");
    this.setState(prevState => ({
      sliderTop: "200px"
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
        <div className="container">
        	<div>
        		<img id="thermo"  src="Thermometer.svg" alt="Thermometer" onClick={this.adjustTemperature}/>
        		<div id="temperature_slider" style={{ top: this.context.sliderTop}} onClick={this.adjustTemperature}>
        		</div>
        		<p id="temp_label">40°F</p>
        	</div>
          <div class="row">
            <div class="col-md-4" >

            </div>
        	<div class="col-md-4 form-group">
        	    <label for="example-text-input" class="city-text-input col-form-label">City</label>
        	    <input type="text" value="Los Angeles" class="city-text-input" id="city-text-field" />
        	</div>
          </div>

          <div class="row">
            <div class="col-md-4" >

            </div>
        
              <div class="col-md-4 form-group">
        	<label for="example-text-input" class="area-text-input col-form-label">Area of House</label>
        	<input type="text" value="2000" class="area-text-input" id="area-text-field" />
              </div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
