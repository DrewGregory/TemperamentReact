import { LineChart, Line, XAxis, CartesianGrid, YAxis, Tooltip, Legend } from 'recharts';
import React, { Component } from 'react';

class Graph2Y {
  g;
  constructor(width, height, data, color1 = '#ff0000', color2 = '#0000ff') {
    this.g = <LineChart width={width} height={height} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="time" type="number" domain={['auto', 'auto']} />
      <YAxis yAxisId="1" type="number" orientation="left" domain={['auto', 'auto']}/>
      <YAxis yAxisId="2" type="number" orientation="right" domain={['auto', 'auto']}/>
      <Line yAxisId="1" type='number' dataKey='temp' stroke={color1} animationDuration={300}/>
      <Line yAxisId="2" type='number' dataKey='energy' stroke={color2} animationDuration={300}/>
      <Tooltip />
      <Legend />
    </LineChart>;
  }

  graph() {return this.g};
}

export default Graph2Y;
