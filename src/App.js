import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Graph, Graph2Y} from './graph.js'

function httpGetAsync(theUrl, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState === 4 && xmlHttp.status === 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous
    xmlHttp.send(null);
}

var data = [{"time": 1518886800.0, "temp": 49.51}, {"time": 1518890400.0, "temp": 55.1}, {"time": 1518894000.0, "temp": 59.59}, {"time": 1518897600.0, "temp": 62.82}, {"time": 1518901200.0, "temp": 64.87}, {"time": 1518904800.0, "temp": 66.05}, {"time": 1518908400.0, "temp": 66.66}, {"time": 1518912000.0, "temp": 66.18}, {"time": 1518915600.0, "temp": 63.18}, {"time": 1518919200.0, "temp": 57.81}, {"time": 1518922800.0, "temp": 53.82}, {"time": 1518926400.0, "temp": 51.41}, {"time": 1518930000.0, "temp": 50.67}, {"time": 1518933600.0, "temp": 50.12}, {"time": 1518937200.0, "temp": 50.21}, {"time": 1518940800.0, "temp": 50.63}, {"time": 1518944400.0, "temp": 50.77}, {"time": 1518948000.0, "temp": 50.4}, {"time": 1518951600.0, "temp": 49.92}, {"time": 1518955200.0, "temp": 49.51}, {"time": 1518958800.0, "temp": 49.33}, {"time": 1518962400.0, "temp": 49.23}, {"time": 1518966000.0, "temp": 49.4}, {"time": 1518969600.0, "temp": 49.96}, {"time": 1518973200.0, "temp": 51.06}, {"time": 1518976800.0, "temp": 52.18}, {"time": 1518980400.0, "temp": 53.86}, {"time": 1518984000.0, "temp": 55.2}, {"time": 1518987600.0, "temp": 55.73}, {"time": 1518991200.0, "temp": 55.04}, {"time": 1518994800.0, "temp": 54.07}, {"time": 1518998400.0, "temp": 53.02}, {"time": 1519002000.0, "temp": 52.12}, {"time": 1519005600.0, "temp": 50.58}, {"time": 1519009200.0, "temp": 48.98}, {"time": 1519012800.0, "temp": 47.5}, {"time": 1519016400.0, "temp": 46.37}, {"time": 1519020000.0, "temp": 45.79}, {"time": 1519023600.0, "temp": 45.73}, {"time": 1519027200.0, "temp": 45.84}, {"time": 1519030800.0, "temp": 45.72}, {"time": 1519034400.0, "temp": 45.21}, {"time": 1519038000.0, "temp": 44.58}, {"time": 1519041600.0, "temp": 44.11}, {"time": 1519045200.0, "temp": 43.67}, {"time": 1519048800.0, "temp": 43.16}, {"time": 1519052400.0, "temp": 43.03}, {"time": 1519056000.0, "temp": 43.7}, {"time": 1519059600.0, "temp": 44.84}, {"time": 1518998400.0, "energy": 1623}, {"time": 1518994800.0, "energy": 1755}, {"time": 1518991200.0, "energy": 1843}, {"time": 1518987600.0, "energy": 1916}, {"time": 1518984000.0, "energy": 1943}, {"time": 1518980400.0, "energy": 1963}, {"time": 1518976800.0, "energy": 1811}, {"time": 1518973200.0, "energy": 1687}, {"time": 1518969600.0, "energy": 1645}, {"time": 1518966000.0, "energy": 1640}, {"time": 1518962400.0, "energy": 1661}, {"time": 1518958800.0, "energy": 1688}, {"time": 1518955200.0, "energy": 1734}, {"time": 1518951600.0, "energy": 1775}, {"time": 1518948000.0, "energy": 1804}, {"time": 1518944400.0, "energy": 1829}, {"time": 1518940800.0, "energy": 1792}, {"time": 1518937200.0, "energy": 1749}, {"time": 1518933600.0, "energy": 1651}, {"time": 1518930000.0, "energy": 1592}, {"time": 1518926400.0, "energy": 1558}, {"time": 1518922800.0, "energy": 1567}, {"time": 1518919200.0, "energy": 1595}, {"time": 1518915600.0, "energy": 1646}, {"time": 1518912000.0, "energy": 1665}, {"time": 1518908400.0, "energy": 1811}, {"time": 1518904800.0, "energy": 1925}, {"time": 1518901200.0, "energy": 2024}, {"time": 1518897600.0, "energy": 2077}, {"time": 1518894000.0, "energy": 2098}, {"time": 1518890400.0, "energy": 1940}];

// function cb(text){
//   data = text;
//   console.log(data);
// }
//
// httpGetAsync("https://tree-hacks.herokuapp.com/api/weather/San%20Francisco", cb);


class App extends Component {
  graph1 = new Graph(800,400, data, "#abcdef").graph();

  //This asynchronous rendering is incredibly stupid. There has to be a better way
  asyncGraph = function() {
      const self = this;
      httpGetAsync("https://tree-hacks.herokuapp.com/api/weather/San%20Francisco", data => self.setState({ data: data }));
  }

  _ = this.asyncGraph();

  render() {
    while(data===null){};
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
        <div class="container">
        	<div>
        		<img id="thermo"  src="Thermometer.svg" />
        		<div id="temperature_slider">
        		</div>
        		<p id="temp_label">40°F</p>
        	</div>
          <div>
            {this.state && this.state.data && new Graph(800,400, JSON.parse(this.state.data), "#abcdef").graph()}
          </div>
          <div class="row">
        		<div class="col-md-4 form-group">
        				<label for="example-text-input" class="city-text-input col-form-label">City</label>
        				<input class="form-control" type="text" value="Los Angeles" class="city-text-input" id="city-text-field" />
        		</div>
        	</div>
        </div>

      </div>
    );
  }
}

export default App;
