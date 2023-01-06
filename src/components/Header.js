import React from 'react'

const Header = ({ title, subtitle }) => {
  return (
    <header>
      <h1 className='text-3xl font-bold underline bg-indigo-500 text-white'>{title}</h1>
      {subtitle && <h2>{subtitle}</h2>}
    </header>
  )
}

export default Header
