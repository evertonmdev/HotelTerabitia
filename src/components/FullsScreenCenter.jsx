import React from 'react'

function FullsScreenCenter({children, className}) {
  return (
    <div className={'min-w-full h-full flex justify-center items-center ' + className}>
        {children}
    </div>
  )
}

export default FullsScreenCenter