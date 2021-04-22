import React from 'react'
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags'
import PeopleIcon from '@material-ui/icons/People'
import StorefrontIcon from '@material-ui/icons/Storefront'
import SidebarRow from './SidebarRow';
import './Sidebar.css';




function Sidebar() {
    return (
        <div className="sidebar">
        <SidebarRow 
            src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib%3Drb-1.2.1%26ixid"
            title="Nature"
        />
          <SidebarRow Icon={EmojiFlagsIcon} title="pages" />
          <SidebarRow Icon={PeopleIcon} title="freinds"/>
          <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
        </div>
    )
}

export default Sidebar
