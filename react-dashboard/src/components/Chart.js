import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function Chart() {

    const data = [
  {
    name: 'Jan',
    "Active User" : Math.trunc(Math.random()*230)
  },
  {
    name: 'Feb',
    "Active User" : Math.trunc(Math.random()*230),
  },
  {
    name: 'Mar',
    "Active User" : Math.trunc(Math.random()*230),
  },
  {
    name: 'Apr',
    "Active User" : Math.trunc(Math.random()*230),
  },
  {
    name: 'May',
    "Active User" : Math.trunc(Math.random()*230),
  },
  {
    name: 'Jun',
    "Active User" : Math.trunc(Math.random()*230),
  },
  {
    name: 'Jul',
    "Active User" : Math.trunc(Math.random()*300),
  },
  {
    name: 'Aug',
    "Active User" : Math.trunc(Math.random()*230),
  },
  {
    name: 'Sep',
    "Active User" : Math.trunc(Math.random()*230),
  },
  {
    name: 'Oct',
    "Active User" : Math.trunc(Math.random()*230),
  },
  {
    name: 'Nov',
    "Active User" : Math.trunc(Math.random()*230),
  },
  {
    name: 'Dec',
    "Active User" : Math.trunc(Math.random()*230),
  },

  
];


    return (
        <div className='chart'>
            <h3 className='chartTitle'>User Analytics</h3>
            <ResponsiveContainer width='100%' aspect={4/1}>
                <LineChart data={data}>
                    <XAxis dataKey="name"  stroke='#5550bd'/>
                    <Line type="monotone" dataKey="Active User" stroke="#5550bd" />
                    <Tooltip />
                    <CartesianGrid stroke='#e0dfdf' strokeDasharray='5 5'/>
                    </LineChart>
                </ResponsiveContainer>
        </div>
    )
}
