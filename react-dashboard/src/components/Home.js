import React from 'react'
import Chart from './Chart'
import Feathedinfo from './Feathedinfo';
import { Userdata } from './ChartData';
import WidgetSm from './WidgetSm';
import WidgetLg from './WidgetLg';

export default function Home() {
    return (
        <div className='home'>
            <Feathedinfo/>
            <Chart data={Userdata} title='User Analytics' grid dataKey='Active User'/>
            <div className="homeWidgets">
                <WidgetSm/>
                <WidgetLg/>

            </div>
        </div>
    )
}
