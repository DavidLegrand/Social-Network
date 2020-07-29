import React from 'react'

const Title = (props) => {
  const rand = Math.random()
  return (
    <h1>{props.children}</h1>
  )
}

export default React.memo(Title)
