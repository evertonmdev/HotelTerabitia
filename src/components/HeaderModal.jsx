import React from 'react'

const HeaderModal = ({title}) => {
  return (
    <>
        <h3 className='text-actionDark w-full text-center font-semibold text-lg'>{title}</h3>
        <div className='mt-2 mb-5 bg-action/20 h-1 w-full' />
    </>
  )
}

export default HeaderModal