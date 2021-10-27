import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function Chart() {

    const data = [
  {
    name: 'jan',
    "Active User" : 4000,
  },
  {
    name: 'jan',
    "Active User" : 4000,
  },
  {
    name: 'jan',
    "Active User" : 4000,
  },
  {
    name: 'jan',
    "Active User" : 4000,
  },
  {
    name: 'jan',
    "Active User" : 4000,
  },
  {
    name: 'jan',
    "Active User" : 4000,
  },
  {
    name: 'jan',
    "Active User" : 4000,
  },
  {
    name: 'jan',
    "Active User" : 4000,
  },
  {
    name: 'jan',
    "Active User" : 4000,
  },
  {
    name: 'jan',
    "Active User" : 4000,
  },
  {
    name: 'jan',
    "Active User" : 4000,
  },
  {
    name: 'jan',
    "Active User" : 4000,
  },
  
  
];


    return (
        <div className='chart'>
            <h3 className='chartTitle'>User Analytics</h3>
            <ResponsiveContainer width='100%' aspect={4/1}>
                <LineChart data={data}>
                    <XAxis dataKey="name"  stroke='#5550bd'/>
                    <Line type="monotone" dataKey="Active User" stroke="#5550bd" />
                    </LineChart>
                </ResponsiveContainer>
        </div>
    )
}
