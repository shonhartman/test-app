import React from 'react'

const Body = ({ title, subtitle }) => {
  return (
    <header>
      <h1>{title}</h1>
      {subtitle && <h2>{subtitle}</h2>}
    </header>
  )
}

export default Body
