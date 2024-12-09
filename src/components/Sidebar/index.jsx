import React from 'react'
import styles from './Sidebar.module.scss'
import classNames from 'classnames/bind'
import Menu from './Menu'
import MenuItem from './Menu/MenuItem'
import { HomeIcon, UserGroupIcon, LiveIcon, HomeActiveIcon, UserGroupActiveIcon, LiveActiveIcon  } from '../Icons/Icons'
import SuggestedAccounts from '../SuggestedAccounts'

const cx=classNames.bind(styles)
function Sidebar() {
  return (
    <aside className={cx('wrapper')}>
      <Menu>
        <MenuItem title="For Your" to='/home' icon={<HomeIcon/>} activeIcon={<HomeActiveIcon/>}/>
        <MenuItem title="Following" to='/following' icon={<UserGroupIcon/>} activeIcon={<UserGroupActiveIcon/>}/>
        <MenuItem title="Live" to='/live' icon={<LiveIcon/>} activeIcon={<LiveActiveIcon/>}/>
      </Menu>
      <SuggestedAccounts label={'Suggested accounts'}/>
      <SuggestedAccounts label={'Followings'}/>
    </aside>
  )
}

export default Sidebar
