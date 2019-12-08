import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
  {
    name: 'JAN', price: 3416,
  },
  {
    name: 'FEB', price: 3813,
  },
  {
    name: 'MAR', price: 4126,
  },
  {
    name: 'APR', price: 5304,
  },
  {
    name: 'MAY', price: 8543,
  },
  {
    name: 'JUN', price: 10691,
  },
  {
    name: 'JUL', price: 10083,
  },
  {
    name: 'AUG', price: 9626,
  },
  {
    name: 'SEP', price: 8362,
  },
  {
    name: 'OCT', price: 9155,
  },
  {
    name: 'NOV', price: 7352,
  },
];

export default class Chart extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';

  render() {
    return (
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="price" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    );
  }
}
