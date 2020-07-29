import React from 'react'

const ListItemView = ({item1, item2, item3}) => {
  return (
    <li className="task">
      <div>{item1}</div>
      <div>{item2}</div>
      <div>{item3}</div>
    </li>
  )
}

export default ListItemView
