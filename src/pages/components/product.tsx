import React from 'react'
import Header from './header'

const Product = () => {
  return (
    <>  
     <Header/>
     <div className='relative'></div>
     
     <div className='absolute text-6xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        product page
     </div>
    </>
   
  )
}

export default Product