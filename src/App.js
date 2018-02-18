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


// function cb(text){
//   data = text;
//   console.log(data);
// }
//
// httpGetAsync("https://tree-hacks.herokuapp.com/api/weather/San%20Francisco", cb);


class App extends Component {
  constructor(props) {
      super(props);
      this.state = {sliderTop: "620px",
      height: "50px",
      temperature: 40,
      selCity: "Los Angeles",
      area: 2000,
      humanSrc: "sadhuman.svg"};
      let self = this;
      let data1 = [];
      httpGetAsync("https://tree-hacks.herokuapp.com/api/weather/" + self.state.selCity, function(data){
        data1 = data1.concat(JSON.parse(data));
        for(var i=0; i<data1.length;i++){
          data1['time']
        }
        self.setState(prevState =>({
          data: data1,
        })
        )
        console.log(data1);
      });

      httpGetAsync("https://tree-hacks.herokuapp.com/api/energydemand/" + self.state.selCity, function(data){
        data = JSON.parse(data);
        for(var i=0;i<26;i++){
          data1.push(
            {
              time : data[i][0] + 8*60*60,
              energy : data[i][1],
            }
          );
        }
        self.setState(prevState =>({
          data: data1,
          })
        );
      });
      this.adjustTemperature = this.adjustTemperature.bind(this);
      this.toggleJacket = this.toggleJacket.bind(this);
      this.asyncGraph = this.asyncGraph.bind(this);
      this.changeArea = this.changeArea.bind(this);
    }

    requestCost(e){
      var xmlHttp = new XMLHttpRequest();
      var self = this;
      xmlHttp.onreadystatechange = function() {
          if (xmlHttp.readyState === 4 && xmlHttp.status === 200){
            console.log(JSON.parse(xmlHttp.responseText));
            self.setState(prevState =>({
              cost: parseFloat(JSON.parse(xmlHttp.responseText).cost * 15).toFixed(2),
              energy: parseFloat(JSON.parse(xmlHttp.responseText).energy * 15).toFixed(2)
            }));
          }
      }
      let reqURL = 'https://tree-hacks.herokuapp.com/api/energycost/' + this.state.selCity + '/'
      + this.state.temperature + '/' + this.state.area;
      xmlHttp.open("GET", reqURL,true);
      xmlHttp.send(null);

    }


  adjustTemperature(e) {
    e.persist();
    console.log(e);
    var newHumanSrc = this.state.humanSrc.includes("jacket") ? "humanwithjacket.png" : "human.svg";
    let temp = parseInt((620 - e.pageY )/(620-212)*40 + 40);
    newHumanSrc = this.checkIfSad(newHumanSrc, temp);
    this.setState(prevState => ({
      sliderTop: e.pageY + "px",
      height: 620 - e.pageY + 120 + "px",
      temperature: temp,
      humanSrc: newHumanSrc
      }));
      this.requestCost();

    }

    checkIfSad(src, temp) {
      let jacket= src.includes("jacket");
      if (jacket && temp > 75 || !jacket && temp < 65) {
        src = "sad" + src;
      }
      return src;
    }

  toggleJacket(e){
    e.persist();
    var newHumanSrc = this.state.humanSrc.includes("jacket") ? "human.svg" : "humanwithjacket.png";
    newHumanSrc = this.checkIfSad(newHumanSrc, this.state.temperature);
    this.setState(prevState => ({
      humanSrc: newHumanSrc,
    }));
  }

  changeArea (e){
    e.persist();
    this.setState(prevState => ({
      area: parseInt(e.target.value)
    }));
    this.requestCost();
  }

  asyncGraph(e) {
    e.persist();
    const self = this;
    let data1 = [];
    httpGetAsync("https://tree-hacks.herokuapp.com/api/weather/" + e.target.value, function(data){
      data1 = data1.concat(JSON.parse(data));
      self.setState(prevState =>({
        data: data1,
      })
      )
      console.log(data1);
    });

    httpGetAsync("https://tree-hacks.herokuapp.com/api/energydemand/" + e.target.value, function(data){
      data = JSON.parse(data);
      for(var i=0;i<26;i++){
        data1.push(
          {
            time : data[i][0],
            energy : data[i][1],
          }
        );
      }
      self.setState(prevState =>({
        data: data1,
        })
      );
    });

    this.setState(prevState => ({
      selCity: e.target.value
    }));
  }


  render() {
    //while(data===null){};
    return (
       <div className="App">
        <header className="App-header">
          <h1 className="App-title">Temperament</h1>
          <p id="subtitle">The Hottest Heating Bill Estimator</p>
          <img src="thermo_icon.svg" className="App-logo" alt="logo" />
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
        <div id="graph">
            <span id="graph_label"> Outside Temperatures in {this.state.selCity}</span>
            {this.state && this.state.data &&
              new Graph2Y(800,400, this.state.data, "#8b5454", "#00ff00").graph()}
        </div>
        <div className="city-text">
          <label className="text-input">City </label>
          <input type="text" value="Los Angeles" value={this.state.selCity} onChange={this.asyncGraph} className="text-input" id="city-text-field" />
        </div>
        <div className="form-group">
          <label className="text-input">Area of House (ft^2)</label>
          <input type="number" value={this.state.area} className="text-input form-text" id="area-text-field" onChange={this.changeArea} />
        </div>
        <div >
          <img id="human" src={this.state.humanSrc} onClick={this.toggleJacket} alt="Human"/>
        </div>
        <div id="est_cost" className="badge">
          Estimated Cost: $ {this.state.cost}/month
        </div>
        <div id="est_energy" className="badge">
          Estimated Energy: {this.state.energy} kWH/month
        </div>
        <span id="credits">
          Developed by Ryan Tolsma, Daniel Tan, Drew Gregory, and Griffin Kardos. Icon Credits go to Luboš Volkov. Estimated worse case cost.
        </span>
       </div>
    );
  }
}

export default App;
