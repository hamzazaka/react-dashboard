import React from 'react'
import Chart from './Chart'
import Feathedinfo from './Feathedinfo';
import { Userdata } from './ChartData';

export default function Home() {
    return (
        <div className='home'>
            <Feathedinfo/>
            <Chart data={Userdata} title='User Analytics' grid dataKey='Active User'/>
        </div>
    )
}
