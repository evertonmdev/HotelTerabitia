import React from 'react'

const Input = ({handleChange, title, type, value, ...rest}) => {
  return (
    <div className='flex flex-col md:flex-row  justify-start items-start md:items-center gap-3 text-xsm flex-wrap '>
        <label className='min-w-fit'>{title}</label>
        {
          value ?
          <input value={value} {...rest} onChange={event => handleChange(event.currentTarget.value)} type={type} className='min-w-fit flex-1 bg-transparent text-primary outline-none border-b border-black/20 ' />
          : <input {...rest} onChange={event => handleChange(event.currentTarget.value)} type={type} className='min-w-fit flex-1 bg-transparent text-primary outline-none border-b border-black/20 ' />
        }
    </div>
  )
}

export default Input