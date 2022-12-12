// Zależności
import React, { FC, useEffect, memo } from 'react'

// Komponenty
import Task from './Task'

// Typy
export type Todo = {
  id: number
  task: string
}

interface Props {
  todoList: Todo[]
  handleDelete: any
}

const List: FC<Props> = ({ todoList, handleDelete }) => {
  useEffect(() => {
    // Efekt ten jest aktywowany dla każdego nowego renderowania
    // console.log('Renderowanie komponentu <List />')
  })

  return (
    <ul>
      {todoList.map((todo: Todo) => (
        <Task 
          key={todo.id} 
          id={todo.id}
          task={todo.task} 
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  )
}

export default memo(List)
