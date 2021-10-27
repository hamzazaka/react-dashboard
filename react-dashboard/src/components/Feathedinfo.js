import { ArrowDownward, ArrowUpward } from '@material-ui/icons'
import React from 'react'

export default function Feathedinfo() {
    return (
        <div className='featured'>
            <div className="featuredItem">
                <span className="featuredTitle">Revenue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">2,415</span>
                    <span className="featuredMoneyRate">-15 <ArrowDownward className='featuredIcon negative'/></span>
                </div>
            <span className='featuredSub'>Compared to last Week</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">4,215</span>
                    <span className="featuredMoneyRate">-12 <ArrowDownward className='featuredIcon negative'/></span>
                </div>
            <span className='featuredSub'>Compared to last Week</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">2,225</span>
                    <span className="featuredMoneyRate">+15 <ArrowUpward className='featuredIcon '/></span>
                </div>
            <span className='featuredSub'>Compared to last Week</span>
            </div>
        </div>
    )
}
