import React from 'react'

export default function Todocard(props) {
const {children}=props
  return (
    <div>
    <li className="todoItem">
      {children}
            <i className="fa-solid fa-pen-to-square"></i>
            <i className="fa-solid fa-trash"></i>
          </li>
    </div>
  )
}
