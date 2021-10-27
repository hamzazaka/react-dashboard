import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function Chart() {

    const data = [
  {
    name: 'Jan',
    NewUser: Math.trunc(Math.random()*50),
    "Active User" : Math.trunc(Math.random()*230)
  },
  {
    name: 'Feb',
    NewUser: Math.trunc(Math.random()*50),
    "Active User" : Math.trunc(Math.random()*230),
  },
  {
    name: 'Mar',
    NewUser: Math.trunc(Math.random()*50),
    "Active User" : Math.trunc(Math.random()*230),
  },
  {
    name: 'Apr',
    NewUser: Math.trunc(Math.random()*50),
    "Active User" : Math.trunc(Math.random()*230),
  },
  {
    name: 'May',
    NewUser: Math.trunc(Math.random()*50),
    "Active User" : Math.trunc(Math.random()*230),
  },
  {
    name: 'Jun',
    NewUser: Math.trunc(Math.random()*50),
    "Active User" : Math.trunc(Math.random()*230),
  },
  {
    name: 'Jul',
    NewUser: Math.trunc(Math.random()*50),
    "Active User" : Math.trunc(Math.random()*300),
  },
  {
    name: 'Aug',
    NewUser: Math.trunc(Math.random()*50),
    "Active User" : Math.trunc(Math.random()*230),
  },
  {
    name: 'Sep',
    NewUser: Math.trunc(Math.random()*50),
    "Active User" : Math.trunc(Math.random()*230),
  },
  {
    name: 'Oct',
    NewUser: Math.trunc(Math.random()*50),
    "Active User" : Math.trunc(Math.random()*230),
  },
  {
    name: 'Nov',
    NewUser: Math.trunc(Math.random()*50),
    "Active User" : Math.trunc(Math.random()*230),
  },
  {
    name: 'Dec',
    NewUser: Math.trunc(Math.random()*50),
    "Active User" : Math.trunc(Math.random()*230),
  },

  
];


    return (
        <div className='chart'>
            <h3 className='chartTitle'>User Analytics</h3>
            <ResponsiveContainer width='100%' aspect={4/1}>
                <LineChart data={data}>
                    <XAxis dataKey="name"  stroke='#5550bd'/>
                    <YAxis stroke='#5550bd'/>
                    <Line type="monotone" dataKey="Active User" stroke="#5550bd" />
                    <Line type="monotone" dataKey="NewUser" stroke="green" />
                    <Tooltip />
                    <CartesianGrid stroke='#e0dfdf' strokeDasharray='5 5'/>
                    </LineChart>
                </ResponsiveContainer>
        </div>
    )
}
