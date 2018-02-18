import { LineChart, Line, XAxis, CartesianGrid, YAxis, Tooltip, Legend, Label} from 'recharts';
import React, { Component } from 'react';
var moment = require("moment");

// this.g = <LineChart width={width} height={height} data={data}>
//   <CartesianGrid strokeDasharray="3 3" />
//   <XAxis dataKey="time" type="number" domain={['auto', 'auto']} />
//   <YAxis yAxisId="1" type="number" orientation="left" domain={['auto', 'auto']}/>
//   <Line yAxisId="1" type='monotone' dataKey='temperature' stroke={color1} animationDuration={300}/>
//   <YAxis yAxisId="2" type="number" orientation="right" domain={['auto', 'auto']}/>
//   <Line yAxisId="2" type='monotone' dataKey='energy' stroke={color2} animationDuration={300}/>
//   <Tooltip />
//   <Legend />
// </LineChart>;

class Graph2Y {
  g;
  constructor(width, height, data, color1 = '#ff0000', color2 = '#0000ff') {
    console.log("graph "+data);

    this.g = <LineChart width={width} height={height} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="time" type="number" domain={['auto', 'auto']}
      tickFormatter = {(unixTime) => moment(unixTime*1000).format('DD HH:mm')}
      >
      </XAxis>
      <YAxis yAxisId="1" type="number" domain={['auto', 'auto']}>
      <Label angle={270} position='insideLeft' style={{ textAnchor: 'middle' }}>
        Temperature (°F)
      </Label>

      </YAxis>
      <YAxis yAxisId="2" orientation="right" type="number" domain={['auto', 'auto']}>
      <Label angle={90} position='insideRight' style={{ textAnchor: 'middle' }}>
        Forecasted Hourly Energy Demand (MWh)
      </Label>
      </YAxis>
      <Line yAxisId="1" type='monotone' dataKey='temperature' stroke={color1} animationDuration={300}/>
      <Line yAxisId="2" type='monotone' dataKey='energy' stroke={color2} animationDuration={300}/>
      <Tooltip labelFormatter = {(unixTime) => moment(unixTime*1000).format('MM-DD-YYYY HH:mm')} />
      <Legend />
    </LineChart>;
  }

  graph() {return this.g};
}

class Graph {
  g;
  constructor(width, height, data, color = '#ff0000') {
    this.g = <LineChart width={width} height={height} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="time" type="category" domain={['auto', 'auto']} >
      </XAxis>
      <YAxis type="number" domain={['auto', 'auto']}>
      <Label angle={270} position='insideLeft' style={{ textAnchor: 'middle' }}>
        Temperature (°F)
      </Label>

      </YAxis>
      <Line  type='monotone' dataKey='temperature' stroke={color} animationDuration={300}/>
      <Tooltip />
      <Legend />
    </LineChart>;
  }

  graph() {return this.g};
}

export {Graph2Y, Graph};
