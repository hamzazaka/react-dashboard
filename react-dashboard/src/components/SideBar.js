import React from 'react'
import { AttachMoney, ChatBubbleOutline, Email, Equalizer, Feedback, LineStyle,  PermIdentity, Report, Storefront, Timeline, TrendingUp, WorkOutline } from '@material-ui/icons'
// import { Link } from 'react-router-dom'

export default function SideBar() {
    return (
        <div className='sidebar'>
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className='sidebarList'>
                        <li className="sidebarListItem active">
                            <LineStyle className='sidebarIcon' /> Home
                        </li>
                        <li className="sidebarListItem">
                            <Timeline className='sidebarIcon'/> Analytics
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUp className='sidebarIcon'/> Sales
                            </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className='sidebarList'>
                        <li className="sidebarListItem ">
                            <PermIdentity/> Users
                        </li>
                        <li className="sidebarListItem">
                            <Storefront /> Products
                        </li>
                        <li className="sidebarListItem">
                            <AttachMoney/> Transactions
                        </li>
                        <li className="sidebarListItem">
                            <Equalizer/> Reports
                        </li>
                    </ul>
                </div>

                 <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notifications</h3>
                    <ul className='sidebarList'>
                        <li className="sidebarListItem ">
                            <Email/> Mail
                        </li>
                        <li className="sidebarListItem">
                            <Feedback/> Feedback
                        </li>
                        <li className="sidebarListItem">
                            <ChatBubbleOutline/> Messages
                        </li>
                    </ul>
                </div>

                 <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Staff</h3>
                    <ul className='sidebarList'>
                        <li className="sidebarListItem ">
                            <WorkOutline/> Manage
                        </li>
                        <li className="sidebarListItem">
                            <Timeline/> Analytics
                        </li>
                        <li className="sidebarListItem">
                            <Report/> Reports
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
