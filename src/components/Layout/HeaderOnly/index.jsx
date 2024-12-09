import Header from '../DefaultLayout/Header'

import React from 'react'

function HeaderOnly({children}) {
  return (
    <div>
      <Header/>
      <div className='container'>
        
        <div className='content'>
            {children}
        </div>
      </div>
    </div>
  )
}

export default HeaderOnly
