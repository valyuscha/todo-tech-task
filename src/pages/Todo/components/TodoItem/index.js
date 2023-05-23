import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

import s from './TodoItem.module.scss'

export const TodoItem = () => {
  return (
    <div className={ s.todoItem }>
      <div>
        <h3>Title</h3>
        <p>Description</p>
      </div>
      <div className={ s.actionBtns }>
        <input type="checkbox" />
        <FontAwesomeIcon icon={ faTrash } />
      </div>
    </div>
  )
}