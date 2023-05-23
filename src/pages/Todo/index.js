import React from 'react'
import { TodoItem } from './components/TodoItem'

import s from './styles.module.scss'

export const Todo = () => {
  return (
    <div className={ s.container }>
      List d
      <TodoItem />
    </div>
  )
}