import { LineChart, Line, XAxis, CartesianGrid, YAxis, Tooltip, Legend, Label} from 'recharts';
import React, { Component } from 'react';

class Graph2Y {
  g;
  constructor(width, height, data, color1 = '#ff0000', color2 = '#0000ff') {
    this.g = <LineChart width={width} height={height} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="time" type="number" domain={['auto', 'auto']} />
      <YAxis yAxisId="1" type="number" orientation="left" domain={['auto', 'auto']}/>
      <YAxis yAxisId="2" type="number" orientation="right" domain={['auto', 'auto']}/>
      <Line yAxisId="1" type='number' dataKey='temperature' stroke={color1} animationDuration={300}/>
      <Line yAxisId="2" type='number' dataKey='energy' stroke={color2} animationDuration={300}/>
      <Tooltip />
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
