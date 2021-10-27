import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function Chart({ data, title,dataKey,grid  }) {




    return (
        <div className='chart'>
            <h3 className='chartTitle'>{title}</h3>
            <ResponsiveContainer width='100%' aspect={4/1}>
                <LineChart data={data}>
                    <XAxis dataKey="name"  stroke='#5550bd'/>
                    <YAxis stroke='#5550bd'/>
                    <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
                    <Line type="monotone" dataKey="NewUser" stroke="green" />
                    <Tooltip />
                {grid &&<CartesianGrid stroke='#e0dfdf' strokeDasharray='5 5'/>}
                    <Legend />
                    </LineChart>
                </ResponsiveContainer>
        </div>
    )
}
