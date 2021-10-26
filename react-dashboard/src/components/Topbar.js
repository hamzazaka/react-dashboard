import React from 'react';
import {NotificationsNone} from '@material-ui/icons';

export default function Topbar() {
    return (
        <div className='topbar'>
            <div className="topbarWrapper">
                <div className="topLeft">
                    <div className="logo">lamaaadmin</div>
                </div>


                <div className="topRight">
                    <div className="topbarIconsContainer">
                        <NotificationsNone />
                        <span className='topIconBadge'>2</span>

                    </div>
                </div>
            </div>
        </div>
    )
}
