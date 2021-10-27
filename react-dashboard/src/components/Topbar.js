import React from 'react';
import {NotificationsNone, Language, Settings} from '@material-ui/icons';

export default function Topbar() {
    return (
        <div className='topbar'>
            <div className="topbarWrapper">
                <div className="topLeft">
                    <div className="logo">Data Dog </div>
                </div>


                <div className="topRight">
                    <div className="topbarIconsContainer">
                        <NotificationsNone/>
                        <span className='topIconBadge'>2</span>
                    </div>
                     <div className="topbarIconsContainer">
                        <Language/>
                        <span className='topIconBadge'>2</span>
                    </div>
                     <div className="topbarIconsContainer">
                        <Settings/>
                    </div>
                    <img src="https://media.istockphoto.com/photos/learn-to-love-yourself-first-picture-id1291208214?b=1&k=20&m=1291208214&s=170667a&w=0&h=sAq9SonSuefj3d4WKy4KzJvUiLERXge9VgZO-oqKUOo=" alt="" className="topAvatar" />
                </div>
            </div>
        </div>
    )
}
