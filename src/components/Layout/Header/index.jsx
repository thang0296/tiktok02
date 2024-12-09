import styles from './Header.module.scss'
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical, faEarthAsia, faCircleQuestion, faKeyboard, faSignOut, faGear, faCoins, faUser } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import Button from '../../Button';
import Menu from '../../Popper/Menu';
import 'tippy.js/dist/tippy.css';
import { faCloudUpload } from '@fortawesome/free-solid-svg-icons/faCloudUpload';
import Image from '../../Image';
import Search from './Search';
import { Link } from 'react-router-dom';

const cx= classNames.bind(styles)
const MENU_ITEMS = [
  {
      icon: <FontAwesomeIcon icon={faEarthAsia} />,
      title: 'English',
      children: {
        title: 'Language',
        data: [
          {
            type: 'language',
            code: 'en',
            title: 'English'
          },
          {
            type: 'language',
            code: 'vi',
            title: 'Tieng Viet'
          },
          {
            type: 'language',
            code: 'en',
            title: 'English'
          },
          {
            type: 'language',
            code: 'vi',
            title: 'Tieng Viet'
          },
          {
            type: 'language',
            code: 'en',
            title: 'English'
          },
          {
            type: 'language',
            code: 'vi',
            title: 'Tieng Viet'
          },
          {
            type: 'language',
            code: 'en',
            title: 'English'
          },
          {
            type: 'language',
            code: 'vi',
            title: 'Tieng Viet'
          },
          {
            type: 'language',
            code: 'en',
            title: 'English'
          },
          {
            type: 'language',
            code: 'vi',
            title: 'Tieng Viet'
          },
          {
            type: 'language',
            code: 'en',
            title: 'English'
          },
          {
            type: 'language',
            code: 'vi',
            title: 'Tieng Viet'
          },
          {
            type: 'language',
            code: 'en',
            title: 'English'
          },
          {
            type: 'language',
            code: 'vi',
            title: 'Tieng Viet'
          },
          {
            type: 'language',
            code: 'en',
            title: 'English'
          },
          {
            type: 'language',
            code: 'vi',
            title: 'Tieng Viet'
          },
          {
            type: 'language',
            code: 'en',
            title: 'English'
          },
          {
            type: 'language',
            code: 'vi',
            title: 'Tieng Viet'
          },
          {
            type: 'language',
            code: 'en',
            title: 'English'
          },
          {
            type: 'language',
            code: 'vi',
            title: 'Tieng Viet'
          },
          {
            type: 'language',
            code: 'en',
            title: 'English'
          },
          {
            type: 'language',
            code: 'vi',
            title: 'Tieng Viet'
          },
          {
            type: 'language',
            code: 'en',
            title: 'English'
          },
          {
            type: 'language',
            code: 'vi',
            title: 'Tieng Viet'
          },
          {
            type: 'language',
            code: 'en',
            title: 'English'
          },
          {
            type: 'language',
            code: 'vi',
            title: 'Tieng Viet'
          },
        ]
      }
  },
  {
      icon: <FontAwesomeIcon icon={faCircleQuestion} />,
      title: 'Feedback and help',
      to: '/feedback',
  },
  {
      icon: <FontAwesomeIcon icon={faKeyboard} />,
      title: 'Keyboard shortcuts',
  },
];
const userMenu = [
  {
    icon: <FontAwesomeIcon icon={faUser} />,
    title: 'View profile',
    to: '/@hoaa',
},
{
    icon: <FontAwesomeIcon icon={faCoins} />,
    title: 'Get coins',
    to: '/coin',
},
{
    icon: <FontAwesomeIcon icon={faGear} />,
    title: 'Settings',
    to: '/settings',
},
...MENU_ITEMS,
{
    icon: <FontAwesomeIcon icon={faSignOut} />,
    title: 'Log out',
    to: '/logout',
    separate: true,
},
];

function Header() {
  
  const currentUser = false;
  
const handleMenuChange = (menuItem) => {
  switch (menuItem.type) {
    case ' languge':
      break;
      default: 
  }
}

  return (
    <header className={cx('wrapper')}>
        <div className={cx('inner')}>
            <Link to='/' className={cx('logo-link')}><img className={cx('logotiktok')} src="https://classic.vn/wp-content/uploads/2023/08/1200px-TikTok_logo.svg.png" alt="TikTok Logo"/></Link>
            <Search/>
            <div className={cx('actions')}>
            {currentUser ? (
              <>
              <Tippy content = "Upload video" placement='bottom' delay={(0,200)}><button className={cx('action-btn')}><FontAwesomeIcon icon={faCloudUpload}/></button></Tippy>
              
              </>
            ) : (
              <>
              <Button text>Upload</Button>
              <Button primary>Log in</Button>
               </>
            )}
              <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={{handleMenuChange}}>
                {currentUser ? (
                  <Image
                  className={cx('user-avatar')}
                  src="https://yt3.ggpht.com/yti/ANjgQV-QzAX6bT5tEfqmvuN5QU24aVIfKnsoBIjkm69Dweh0pw=s88-c-k-c0x00ffffff-no-rj"
                  alt="Le Cong Thang"
              />
                ) : (
                  
                  <button className={cx('more-btn')}>
                    <FontAwesomeIcon icon={faEllipsisVertical} />
                  </button>
                )}
              </Menu>
            </div>
        </div>        
    </header>
  )
}

export default Header
