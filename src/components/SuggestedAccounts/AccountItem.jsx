import React from 'react'
import classNames from 'classnames/bind'
import styles from './SuggestedAccounts.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import Tippy from '@tippyjs/react/headless';
import AccountPreview from './AccountPreview/AccountPreview'
import Wrapper from '../Popper/Wrapper'

const cx=classNames.bind(styles)
function AccountItem() {
  return (
    <div>
      <Tippy
      interactive
      delay={[800,0]}
      placement="bottom-start"
      offset={[-50,0]}
      render={(props)=>(
      <div className={cx('preview')} tabIndex="-1" {...props}>
        {<Wrapper>
          <AccountPreview/>
          </Wrapper>}
      </div>)}
      >
        <div className={cx('account-item')}>
            <img className={cx('avatar')}
                        src="https://i.ytimg.com/vi/lc0gis09VZs/sddefault.jpg"
                        alt=""
            />
    
          <div className={cx('item-info')}>
            <p className={cx('nickname')}>
            <strong>lecongthang</strong>
            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
            </p>
            <p className={cx('name')}>Lê Công Thắng</p>
          </div>
        </div>
      </Tippy>
    </div>
  )
}

export default AccountItem
