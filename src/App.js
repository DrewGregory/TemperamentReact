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

var data1 = [{"time": 1518886800.0, "temp": 49.51}, {"time": 1518890400.0, "temp": 55.1}, {"time": 1518894000.0, "temp": 59.59}, {"time": 1518897600.0, "temp": 62.82}, {"time": 1518901200.0, "temp": 64.87}, {"time": 1518904800.0, "temp": 66.05}, {"time": 1518908400.0, "temp": 66.66}, {"time": 1518912000.0, "temp": 66.18}, {"time": 1518915600.0, "temp": 63.18}, {"time": 1518919200.0, "temp": 57.81}, {"time": 1518922800.0, "temp": 53.82}, {"time": 1518926400.0, "temp": 51.41}, {"time": 1518930000.0, "temp": 50.67}, {"time": 1518933600.0, "temp": 50.12}, {"time": 1518937200.0, "temp": 50.21}, {"time": 1518940800.0, "temp": 50.63}, {"time": 1518944400.0, "temp": 50.77}, {"time": 1518948000.0, "temp": 50.4}, {"time": 1518951600.0, "temp": 49.92}, {"time": 1518955200.0, "temp": 49.51}, {"time": 1518958800.0, "temp": 49.33}, {"time": 1518962400.0, "temp": 49.23}, {"time": 1518966000.0, "temp": 49.4}, {"time": 1518969600.0, "temp": 49.96}, {"time": 1518973200.0, "temp": 51.06}, {"time": 1518976800.0, "temp": 52.18}, {"time": 1518980400.0, "temp": 53.86}, {"time": 1518984000.0, "temp": 55.2}, {"time": 1518987600.0, "temp": 55.73}, {"time": 1518991200.0, "temp": 55.04}, {"time": 1518994800.0, "temp": 54.07}, {"time": 1518998400.0, "temp": 53.02}, {"time": 1519002000.0, "temp": 52.12}, {"time": 1519005600.0, "temp": 50.58}, {"time": 1519009200.0, "temp": 48.98}, {"time": 1519012800.0, "temp": 47.5}, {"time": 1519016400.0, "temp": 46.37}, {"time": 1519020000.0, "temp": 45.79}, {"time": 1519023600.0, "temp": 45.73}, {"time": 1519027200.0, "temp": 45.84}, {"time": 1519030800.0, "temp": 45.72}, {"time": 1519034400.0, "temp": 45.21}, {"time": 1519038000.0, "temp": 44.58}, {"time": 1519041600.0, "temp": 44.11}, {"time": 1519045200.0, "temp": 43.67}, {"time": 1519048800.0, "temp": 43.16}, {"time": 1519052400.0, "temp": 43.03}, {"time": 1519056000.0, "temp": 43.7}, {"time": 1519059600.0, "temp": 44.84}, {"time": 1518998400.0, "energy": 1623}, {"time": 1518994800.0, "energy": 1755}, {"time": 1518991200.0, "energy": 1843}, {"time": 1518987600.0, "energy": 1916}, {"time": 1518984000.0, "energy": 1943}, {"time": 1518980400.0, "energy": 1963}, {"time": 1518976800.0, "energy": 1811}, {"time": 1518973200.0, "energy": 1687}, {"time": 1518969600.0, "energy": 1645}, {"time": 1518966000.0, "energy": 1640}, {"time": 1518962400.0, "energy": 1661}, {"time": 1518958800.0, "energy": 1688}, {"time": 1518955200.0, "energy": 1734}, {"time": 1518951600.0, "energy": 1775}, {"time": 1518948000.0, "energy": 1804}, {"time": 1518944400.0, "energy": 1829}, {"time": 1518940800.0, "energy": 1792}, {"time": 1518937200.0, "energy": 1749}, {"time": 1518933600.0, "energy": 1651}, {"time": 1518930000.0, "energy": 1592}, {"time": 1518926400.0, "energy": 1558}, {"time": 1518922800.0, "energy": 1567}, {"time": 1518919200.0, "energy": 1595}, {"time": 1518915600.0, "energy": 1646}, {"time": 1518912000.0, "energy": 1665}, {"time": 1518908400.0, "energy": 1811}, {"time": 1518904800.0, "energy": 1925}, {"time": 1518901200.0, "energy": 2024}, {"time": 1518897600.0, "energy": 2077}, {"time": 1518894000.0, "energy": 2098}, {"time": 1518890400.0, "energy": 1940}];
var data2 = [{"time":1518926400,"summary":"Clear","icon":"clear-night","precipIntensity":0.0015,"precipProbability":0.04,"precipType":"rain","temperature":54.23,"apparentTemperature":54.23,"dewPoint":47.46,"humidity":0.78,"pressure":1017.73,"windSpeed":4.91,"windGust":7.64,"windBearing":262,"cloudCover":0.03,"uvIndex":0,"visibility":9.89,"ozone":238.08},{"time":1518930000,"summary":"Clear","icon":"clear-night","precipIntensity":0.0027,"precipProbability":0.03,"precipType":"rain","temperature":54.25,"apparentTemperature":54.25,"dewPoint":48.29,"humidity":0.8,"pressure":1017.68,"windSpeed":6.22,"windGust":10.21,"windBearing":273,"cloudCover":0.07,"uvIndex":0,"visibility":9.84,"ozone":241.14},{"time":1518933600,"summary":"Clear","icon":"clear-night","precipIntensity":0.0001,"precipProbability":0.01,"precipType":"rain","temperature":54.46,"apparentTemperature":54.46,"dewPoint":49.05,"humidity":0.82,"pressure":1017.44,"windSpeed":7.64,"windGust":12.93,"windBearing":273,"cloudCover":0.14,"uvIndex":0,"visibility":9.82,"ozone":243.89},{"time":1518937200,"summary":"Partly Cloudy","icon":"partly-cloudy-night","precipIntensity":0.0013,"precipProbability":0.05,"precipType":"rain","temperature":54.44,"apparentTemperature":54.44,"dewPoint":49.3,"humidity":0.83,"pressure":1017.19,"windSpeed":9.3,"windGust":16.1,"windBearing":266,"cloudCover":0.28,"uvIndex":0,"visibility":9.68,"ozone":246.36},{"time":1518940800,"summary":"Partly Cloudy","icon":"partly-cloudy-night","precipIntensity":0.0011,"precipProbability":0.05,"precipType":"rain","temperature":54.27,"apparentTemperature":54.27,"dewPoint":49.2,"humidity":0.83,"pressure":1016.95,"windSpeed":10.35,"windGust":17.81,"windBearing":296,"cloudCover":0.44,"uvIndex":0,"visibility":10,"ozone":248.48},{"time":1518944400,"summary":"Partly Cloudy","icon":"partly-cloudy-night","precipIntensity":0.0007,"precipProbability":0.03,"precipType":"rain","temperature":53.79,"apparentTemperature":53.79,"dewPoint":48.68,"humidity":0.83,"pressure":1016.77,"windSpeed":11.32,"windGust":19.6,"windBearing":281,"cloudCover":0.55,"uvIndex":0,"visibility":10,"ozone":249.93},{"time":1518948000,"summary":"Partly Cloudy","icon":"partly-cloudy-night","precipIntensity":0.0006,"precipProbability":0.03,"precipType":"rain","temperature":53.43,"apparentTemperature":53.43,"dewPoint":48.01,"humidity":0.82,"pressure":1016.81,"windSpeed":11.55,"windGust":19.94,"windBearing":279,"cloudCover":0.54,"uvIndex":0,"visibility":10,"ozone":250.28},{"time":1518951600,"summary":"Mostly Cloudy","icon":"partly-cloudy-night","precipIntensity":0.0007,"precipProbability":0.03,"precipType":"rain","temperature":53.62,"apparentTemperature":53.62,"dewPoint":47.28,"humidity":0.79,"pressure":1016.77,"windSpeed":12.22,"windGust":21.24,"windBearing":294,"cloudCover":0.6,"uvIndex":0,"visibility":10,"ozone":250.1},{"time":1518955200,"summary":"Partly Cloudy","icon":"partly-cloudy-night","precipIntensity":0.0006,"precipProbability":0.03,"precipType":"rain","temperature":53.66,"apparentTemperature":53.66,"dewPoint":46.46,"humidity":0.77,"pressure":1016.82,"windSpeed":12.25,"windGust":21.46,"windBearing":290,"cloudCover":0.59,"uvIndex":0,"visibility":10,"ozone":250.2},{"time":1518958800,"summary":"Partly Cloudy","icon":"partly-cloudy-night","precipIntensity":0.0004,"precipProbability":0.03,"precipType":"rain","temperature":53.5,"apparentTemperature":53.5,"dewPoint":45.96,"humidity":0.76,"pressure":1016.55,"windSpeed":12.08,"windGust":21.66,"windBearing":288,"cloudCover":0.58,"uvIndex":0,"visibility":10,"ozone":251.22},{"time":1518962400,"summary":"Partly Cloudy","icon":"partly-cloudy-night","precipIntensity":0.0003,"precipProbability":0.02,"precipType":"rain","temperature":52.95,"apparentTemperature":52.95,"dewPoint":45.6,"humidity":0.76,"pressure":1016.17,"windSpeed":12.75,"windGust":21.78,"windBearing":300,"cloudCover":0.54,"uvIndex":0,"visibility":10,"ozone":252.66},{"time":1518966000,"summary":"Partly Cloudy","icon":"partly-cloudy-night","precipIntensity":0.0003,"precipProbability":0.02,"precipType":"rain","temperature":52.46,"apparentTemperature":52.46,"dewPoint":45.03,"humidity":0.76,"pressure":1016.06,"windSpeed":13.05,"windGust":21.93,"windBearing":297,"cloudCover":0.52,"uvIndex":0,"visibility":10,"ozone":254.14},{"time":1518969600,"summary":"Partly Cloudy","icon":"partly-cloudy-day","precipIntensity":0.0003,"precipProbability":0.02,"precipType":"rain","temperature":52.43,"apparentTemperature":52.43,"dewPoint":44.05,"humidity":0.73,"pressure":1016.63,"windSpeed":13.26,"windGust":22.25,"windBearing":298,"cloudCover":0.58,"uvIndex":0,"visibility":10,"ozone":255.43},{"time":1518973200,"summary":"Mostly Cloudy","icon":"partly-cloudy-day","precipIntensity":0.0011,"precipProbability":0.05,"precipType":"rain","temperature":52.84,"apparentTemperature":52.84,"dewPoint":42.85,"humidity":0.69,"pressure":1017.51,"windSpeed":13.75,"windGust":22.73,"windBearing":300,"cloudCover":0.66,"uvIndex":1,"visibility":10,"ozone":256.66},{"time":1518976800,"summary":"Mostly Cloudy","icon":"partly-cloudy-day","precipIntensity":0.0019,"precipProbability":0.07,"precipType":"rain","temperature":53.06,"apparentTemperature":53.06,"dewPoint":41.75,"humidity":0.65,"pressure":1017.98,"windSpeed":14.48,"windGust":23.28,"windBearing":301,"cloudCover":0.66,"uvIndex":2,"visibility":10,"ozone":258.09},{"time":1518980400,"summary":"Partly Cloudy","icon":"partly-cloudy-day","precipIntensity":0.0012,"precipProbability":0.05,"precipType":"rain","temperature":53.15,"apparentTemperature":53.15,"dewPoint":40.97,"humidity":0.63,"pressure":1017.69,"windSpeed":15.73,"windGust":23.93,"windBearing":300,"cloudCover":0.49,"uvIndex":3,"visibility":10,"ozone":259.41},{"time":1518984000,"summary":"Breezy and Partly Cloudy","icon":"wind","precipIntensity":0.0003,"precipProbability":0.02,"precipType":"rain","temperature":52.86,"apparentTemperature":52.86,"dewPoint":40.27,"humidity":0.62,"pressure":1017.01,"windSpeed":17.35,"windGust":24.62,"windBearing":297,"cloudCover":0.25,"uvIndex":4,"visibility":10,"ozone":260.88},{"time":1518987600,"summary":"Breezy","icon":"wind","precipIntensity":0.0001,"precipProbability":0.02,"precipType":"rain","temperature":52.31,"apparentTemperature":52.31,"dewPoint":39.5,"humidity":0.62,"pressure":1016.37,"windSpeed":18.83,"windGust":25.43,"windBearing":297,"cloudCover":0.07,"uvIndex":4,"visibility":10,"ozone":263.02},{"time":1518991200,"summary":"Breezy","icon":"wind","precipIntensity":0.0001,"precipProbability":0.02,"precipType":"rain","temperature":51.66,"apparentTemperature":51.66,"dewPoint":38.57,"humidity":0.61,"pressure":1015.86,"windSpeed":19.96,"windGust":26.46,"windBearing":297,"cloudCover":0.04,"uvIndex":3,"visibility":10,"ozone":265.62},{"time":1518994800,"summary":"Breezy","icon":"wind","precipIntensity":0.0001,"precipProbability":0.01,"precipType":"rain","temperature":51.35,"apparentTemperature":51.35,"dewPoint":37.59,"humidity":0.59,"pressure":1015.38,"windSpeed":20.91,"windGust":27.67,"windBearing":299,"cloudCover":0.03,"uvIndex":2,"visibility":10,"ozone":268.97},{"time":1518998400,"summary":"Breezy","icon":"wind","precipIntensity":0.0001,"precipProbability":0.02,"precipType":"rain","temperature":51.17,"apparentTemperature":51.17,"dewPoint":36.72,"humidity":0.58,"pressure":1015.08,"windSpeed":21.52,"windGust":28.94,"windBearing":301,"cloudCover":0.03,"uvIndex":1,"visibility":10,"ozone":273.69},{"time":1519002000,"summary":"Breezy","icon":"wind","precipIntensity":0.0001,"precipProbability":0.02,"precipType":"rain","temperature":50.89,"apparentTemperature":50.89,"dewPoint":36.02,"humidity":0.57,"pressure":1015.13,"windSpeed":21.71,"windGust":30.49,"windBearing":303,"cloudCover":0.02,"uvIndex":1,"visibility":10,"ozone":280.67},{"time":1519005600,"summary":"Breezy","icon":"wind","precipIntensity":0.0001,"precipProbability":0.02,"precipType":"rain","temperature":49.97,"apparentTemperature":43.27,"dewPoint":35.43,"humidity":0.57,"pressure":1015.37,"windSpeed":21.61,"windGust":32.11,"windBearing":305,"cloudCover":0.01,"uvIndex":0,"visibility":10,"ozone":289.18},{"time":1519009200,"summary":"Breezy","icon":"wind","precipIntensity":0.0002,"precipProbability":0.03,"precipType":"rain","temperature":48.81,"apparentTemperature":41.79,"dewPoint":34.88,"humidity":0.58,"pressure":1015.59,"windSpeed":21.33,"windGust":33.11,"windBearing":308,"cloudCover":0.01,"uvIndex":0,"visibility":10,"ozone":297.01},{"time":1519012800,"summary":"Breezy","icon":"wind","precipIntensity":0.0002,"precipProbability":0.03,"precipType":"rain","temperature":47.81,"apparentTemperature":40.56,"dewPoint":34.38,"humidity":0.59,"pressure":1015.7,"windSpeed":20.89,"windGust":33.16,"windBearing":311,"cloudCover":0.04,"uvIndex":0,"visibility":10,"ozone":303.46},{"time":1519016400,"summary":"Breezy","icon":"wind","precipIntensity":0.0003,"precipProbability":0.03,"precipType":"rain","temperature":47,"apparentTemperature":39.61,"dewPoint":33.95,"humidity":0.6,"pressure":1015.8,"windSpeed":20.28,"windGust":32.61,"windBearing":314,"cloudCover":0.09,"uvIndex":0,"visibility":10,"ozone":309.3},{"time":1519020000,"summary":"Breezy","icon":"wind","precipIntensity":0.0004,"precipProbability":0.03,"precipType":"rain","temperature":46.39,"apparentTemperature":38.92,"dewPoint":33.6,"humidity":0.61,"pressure":1015.87,"windSpeed":19.74,"windGust":31.95,"windBearing":315,"cloudCover":0.12,"uvIndex":0,"visibility":10,"ozone":315.03},{"time":1519023600,"summary":"Breezy","icon":"wind","precipIntensity":0.0006,"precipProbability":0.04,"precipType":"rain","temperature":45.89,"apparentTemperature":38.35,"dewPoint":33.34,"humidity":0.61,"pressure":1015.9,"windSpeed":19.35,"windGust":31.2,"windBearing":314,"cloudCover":0.11,"uvIndex":0,"visibility":10,"ozone":320.99},{"time":1519027200,"summary":"Breezy","icon":"wind","precipIntensity":0.0009,"precipProbability":0.06,"precipType":"rain","temperature":45.36,"apparentTemperature":37.72,"dewPoint":33.18,"humidity":0.62,"pressure":1015.91,"windSpeed":19,"windGust":30.34,"windBearing":313,"cloudCover":0.09,"uvIndex":0,"visibility":10,"ozone":326.84},{"time":1519030800,"summary":"Breezy","icon":"wind","precipIntensity":0.001,"precipProbability":0.07,"precipType":"rain","temperature":44.83,"apparentTemperature":37.11,"dewPoint":32.91,"humidity":0.63,"pressure":1015.86,"windSpeed":18.68,"windGust":29.81,"windBearing":313,"cloudCover":0.08,"uvIndex":0,"visibility":10,"ozone":331.94},{"time":1519034400,"summary":"Breezy","icon":"wind","precipIntensity":0.0006,"precipProbability":0.05,"precipType":"rain","temperature":44.42,"apparentTemperature":36.64,"dewPoint":32.38,"humidity":0.62,"pressure":1015.75,"windSpeed":18.36,"windGust":29.98,"windBearing":313,"cloudCover":0.13,"uvIndex":0,"visibility":10,"ozone":335.98},{"time":1519038000,"summary":"Breezy","icon":"wind","precipIntensity":0.0001,"precipProbability":0.03,"precipType":"rain","temperature":44.21,"apparentTemperature":36.44,"dewPoint":31.75,"humidity":0.61,"pressure":1015.6,"windSpeed":18.05,"windGust":30.47,"windBearing":315,"cloudCover":0.17,"uvIndex":0,"visibility":10,"ozone":339.3},{"time":1519041600,"summary":"Breezy","icon":"wind","precipIntensity":0,"precipProbability":0,"temperature":44.27,"apparentTemperature":36.55,"dewPoint":31.09,"humidity":0.6,"pressure":1015.52,"windSpeed":17.94,"windGust":30.7,"windBearing":316,"cloudCover":0.2,"uvIndex":0,"visibility":10,"ozone":342.76},{"time":1519045200,"summary":"Breezy","icon":"wind","precipIntensity":0,"precipProbability":0,"temperature":43.9,"apparentTemperature":35.98,"dewPoint":30.43,"humidity":0.59,"pressure":1015.52,"windSpeed":18.31,"windGust":30.67,"windBearing":318,"cloudCover":0.16,"uvIndex":0,"visibility":10,"ozone":346.77},{"time":1519048800,"summary":"Breezy","icon":"wind","precipIntensity":0.0001,"precipProbability":0.02,"precipType":"rain","temperature":43.41,"apparentTemperature":35.23,"dewPoint":29.74,"humidity":0.58,"pressure":1015.61,"windSpeed":18.79,"windGust":30.38,"windBearing":320,"cloudCover":0.1,"uvIndex":0,"visibility":10,"ozone":350.93},{"time":1519052400,"summary":"Breezy","icon":"wind","precipIntensity":0.0002,"precipProbability":0.03,"precipType":"rain","temperature":43.12,"apparentTemperature":34.84,"dewPoint":29.01,"humidity":0.57,"pressure":1015.82,"windSpeed":18.81,"windGust":29.23,"windBearing":322,"cloudCover":0.06,"uvIndex":0,"visibility":10,"ozone":354.52},{"time":1519056000,"summary":"Breezy","icon":"wind","precipIntensity":0.0001,"precipProbability":0.03,"precipType":"rain","temperature":43.55,"apparentTemperature":35.62,"dewPoint":28.08,"humidity":0.54,"pressure":1016.3,"windSpeed":17.91,"windGust":26.37,"windBearing":326,"cloudCover":0.04,"uvIndex":0,"visibility":10,"ozone":357.85},{"time":1519059600,"summary":"Breezy","icon":"wind","precipIntensity":0.0001,"precipProbability":0.03,"precipType":"rain","temperature":44.45,"apparentTemperature":37.14,"dewPoint":26.94,"humidity":0.5,"pressure":1016.9,"windSpeed":16.51,"windGust":22.54,"windBearing":328,"cloudCover":0.04,"uvIndex":1,"visibility":10,"ozone":360.64},{"time":1519063200,"summary":"Breezy","icon":"wind","precipIntensity":0.0001,"precipProbability":0.03,"precipType":"rain","temperature":45.43,"apparentTemperature":38.71,"dewPoint":25.95,"humidity":0.46,"pressure":1017.33,"windSpeed":15.29,"windGust":19.55,"windBearing":330,"cloudCover":0.03,"uvIndex":2,"visibility":10,"ozone":361.6},{"time":1519066800,"summary":"Clear","icon":"clear-day","precipIntensity":0.0001,"precipProbability":0.02,"precipType":"rain","temperature":46.34,"apparentTemperature":40.09,"dewPoint":25.18,"humidity":0.43,"pressure":1017.38,"windSpeed":14.48,"windGust":18.19,"windBearing":327,"cloudCover":0.02,"uvIndex":3,"visibility":10,"ozone":359.31},{"time":1519070400,"summary":"Clear","icon":"clear-day","precipIntensity":0.0002,"precipProbability":0.02,"precipType":"rain","temperature":47.22,"apparentTemperature":41.37,"dewPoint":24.63,"humidity":0.41,"pressure":1017.23,"windSpeed":13.93,"windGust":17.77,"windBearing":323,"cloudCover":0.01,"uvIndex":4,"visibility":10,"ozone":355.21},{"time":1519074000,"summary":"Clear","icon":"clear-day","precipIntensity":0.0002,"precipProbability":0.02,"precipType":"rain","temperature":48.17,"apparentTemperature":42.57,"dewPoint":24.31,"humidity":0.39,"pressure":1017.04,"windSpeed":13.93,"windGust":17.8,"windBearing":320,"cloudCover":0,"uvIndex":3,"visibility":10,"ozone":352.27},{"time":1519077600,"summary":"Clear","icon":"clear-day","precipIntensity":0.0002,"precipProbability":0.02,"precipType":"rain","temperature":49.09,"apparentTemperature":43.53,"dewPoint":24.33,"humidity":0.38,"pressure":1016.71,"windSpeed":14.77,"windGust":18.18,"windBearing":318,"cloudCover":0.01,"uvIndex":3,"visibility":10,"ozone":351.32},{"time":1519081200,"summary":"Clear","icon":"clear-day","precipIntensity":0.0001,"precipProbability":0.02,"precipType":"rain","temperature":50.35,"apparentTemperature":50.35,"dewPoint":24.58,"humidity":0.36,"pressure":1016.3,"windSpeed":16.13,"windGust":18.91,"windBearing":317,"cloudCover":0.03,"uvIndex":2,"visibility":10,"ozone":351.62},{"time":1519084800,"summary":"Clear","icon":"clear-day","precipIntensity":0.0001,"precipProbability":0.02,"precipType":"rain","temperature":51.15,"apparentTemperature":51.15,"dewPoint":24.94,"humidity":0.36,"pressure":1016.23,"windSpeed":17.15,"windGust":19.77,"windBearing":318,"cloudCover":0.04,"uvIndex":1,"visibility":10,"ozone":353.66},{"time":1519088400,"summary":"Clear","icon":"clear-day","precipIntensity":0.0001,"precipProbability":0.02,"precipType":"rain","temperature":51.08,"apparentTemperature":51.08,"dewPoint":25.46,"humidity":0.37,"pressure":1016.72,"windSpeed":17.53,"windGust":21.06,"windBearing":319,"cloudCover":0.04,"uvIndex":0,"visibility":10,"ozone":358.59},{"time":1519092000,"summary":"Clear","icon":"clear-night","precipIntensity":0.0001,"precipProbability":0.02,"precipType":"rain","temperature":49.86,"apparentTemperature":43.9,"dewPoint":26.02,"humidity":0.39,"pressure":1017.55,"windSpeed":17.55,"windGust":22.52,"windBearing":320,"cloudCover":0.04,"uvIndex":0,"visibility":10,"ozone":365.3},{"time":1519095600,"summary":"Clear","icon":"clear-night","precipIntensity":0.0002,"precipProbability":0.02,"precipType":"rain","temperature":48.5,"apparentTemperature":42.2,"dewPoint":26.35,"humidity":0.42,"pressure":1018.38,"windSpeed":17.21,"windGust":22.94,"windBearing":322,"cloudCover":0.03,"uvIndex":0,"visibility":10,"ozone":370.98},{"time":1519099200,"summary":"Clear","icon":"clear-night","precipIntensity":0.0001,"precipProbability":0.03,"precipType":"rain","temperature":47.2,"apparentTemperature":40.7,"dewPoint":26.34,"humidity":0.44,"pressure":1019.2,"windSpeed":16.48,"windGust":21.61,"windBearing":326,"cloudCover":0.02,"uvIndex":0,"visibility":10,"ozone":374.53}];
// function cb(text){
//   data = text;
//   console.log(data);
// }
//
// httpGetAsync("https://tree-hacks.herokuapp.com/api/weather/San%20Francisco", cb);


class App extends Component {
  graph1 = new Graph(800,400, data1, "#abcdef").graph();
  constructor(props) {
       super(props);
       this.state = {sliderTop: "620px",
       height: "50px",
       temperature: 40,
       selCity: "Los Angeles",
       area: 2000,
    humanSrc: "sadhuman.svg"};
    let self = this;
    httpGetAsync("https://tree-hacks.herokuapp.com/api/weather/" + self.state.selCity, function(data){
      self.setState(prevState =>({
        data: JSON.parse(data)
      })
      )
    });
    this.adjustTemperature = this.adjustTemperature.bind(this);
      this.toggleJacket = this.toggleJacket.bind(this);
      this.asyncGraph = this.asyncGraph.bind(this);
      this.changeArea = this.changeArea.bind(this);
      this.requestCost = this.requestCost.bind(this);
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
  }
  //This asynchronous rendering is incredibly stupid. There has to be a better way
  asyncGraph(e) {
    e.persist();
      const self = this;
      httpGetAsync("https://tree-hacks.herokuapp.com/api/weather/" + e.target.value, function(data){
        self.setState(prevState =>({
          data: JSON.parse(data)
        })
        )
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
            {this.state && this.state.data && new Graph(800,400, this.state.data, "#abcdef").graph()}
        </div>
        <div className="city-text form-group">
          <label className="text-input">City </label>
          <input type="text" value="Los Angeles" value={this.state.selCity} onChange={this.asyncGraph} id="city-text-field" />
          <label className="text-input">Area of House (ft^2)</label>
          <input type="number" value={this.state.area} className="form-text" id="area-text-field" onChange={this.changeArea} />
          <button id="reqCost" type="submit" onClick={this.requestCost} className="btn btn-primary">Cook the Numbers</button>
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
          Developed by Ryan Tolsma, Daniel Tan, Drew Gregory, and Griffin Kardos. Icon Credits go to Luboš Volkov. Uses data from the National Reneweable Energy Library, DarkSky, Google Maps, and the U.S. Energy Information Administraiton.
        </span>
       </div>
    );
  }
}

export default App;
