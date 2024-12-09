import React, { useEffect, useState, useRef } from 'react'
import AccountItem from '../../../AccountItem'
import classNames from 'classnames/bind'
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { Wrapper as PopperWrapper } from '../../../Popper';
import HeadlessTippy from '@tippyjs/react/headless';
import {faMagnifyingGlass, faSpinner} from '@fortawesome/free-solid-svg-icons';
import styles from './Search.module.scss'
import useDebounce from '../../../../hooks/useDebounce';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const cx=classNames.bind(styles)
function Search() {
  const [searchValue, setSearchValue]= useState('');
  const [searchResult, setSearchResult]= useState([]);
  const [showResult, setShowResult]= useState(false);
  const [loading, setLoading]= useState(false);
  const debounced = useDebounce(searchValue,800)
  const inputRef = useRef()
  const handleHideZResult= () => {setShowResult(false)}
  const handleChange=(e) => {
    const searchValue = e.target.value;
    if (!searchValue.startsWith(' ')) 
    {setSearchValue(searchValue)}
    }
  const handleClear= () => {
    setSearchValue('');
    inputRef.current.focus();
    setSearchResult([])
  }

  useEffect(() => {
    if(!debounced.trim()) {setSearchResult([]);return;}
    setLoading(true)
    fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debounced)}&type=less`)
    .then(res=>res.json())
    .then(res=>{setSearchResult(res.data); setLoading(false)})
    .catch(()=>setLoading(false))
    
}, [debounced]);
  
  return (    
    <div>
      <HeadlessTippy
            interactive
            appendTo={() => document.body}
            visible={showResult && searchResult.length > 0}
            render={(attrs) => (
              <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                <PopperWrapper>
                <h4 className={cx('search-title')}>Accounts</h4>
                {searchResult.map(result =>(
                  <AccountItem key={result.id} data={result}/>
                ))}
                </PopperWrapper>
                </div>
            )}
            onClickOutside= {handleHideZResult}
            >
              <div className={cx('search')}>
                <input value={searchValue} 
                ref={inputRef}
                placeholder='Nhap' spellCheck={false} 
                onChange={handleChange}
                onFocus={()=>setShowResult(true)}/>
                {!!searchValue && !loading && (
                  <button className={cx('clear')} onClick={handleClear}>
                  <FontAwesomeIcon icon={faCircleXmark} />
                </button>)}
                {loading&&<button className={cx('loading')}><FontAwesomeIcon icon={faSpinner} /></button>}
                
                  <button className={cx('search-button')} onMouseDown={(e)=> e.preventDefault()}><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                
  
              </div>
            </HeadlessTippy>
    </div>
  )
}

export default Search
