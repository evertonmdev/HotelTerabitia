import React from 'react'

const Button = ({onClick, placeholder, Icon, className}) => {
  return (
        <div onClick={onClick} className={`cursor-pointer flex justify-center items-center max-h-[50px] min-w-fit flex-1 gap-2 px-3 py-3 rounded-md  transition-all duration-200 border border-black/40 ${className}`}>
            <span className='min-w-fit'>{placeholder}</span>
            <Icon size={20} />
        </div>
  )
}

export default Button