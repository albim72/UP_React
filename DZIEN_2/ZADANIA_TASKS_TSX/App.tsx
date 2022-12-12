// Zależności
import React, { useState, useEffect, useMemo, useCallback } from 'react'

// Komponenty
import List, { Todo } from './List'

const initialTodos = [
  { id: 1, task: 'Idź na zakupy' },
  { id: 2, task: 'Zapłać rachunek za prąd'}
]

function App() {
  const [todoList, setTodoList] = useState(initialTodos)
  const [task, setTask] = useState('')
  const [term, setTerm] = useState('')

  const printTodoList = useCallback(() => {
    console.log('Modyfikowanie elementu todoList', todoList)
  }, [todoList])

  useEffect(() => {
    // console.log('Renderowanie komponentu <App />')
  })

  useEffect(() => {
    printTodoList()
  }, [todoList, printTodoList])

  const handleCreate = () => {
    const newTodo = {
      id: Date.now(), 
      task
    }

    setTodoList([...todoList, newTodo])
    setTask('')
  }

  const handleSearch = () => {
    setTerm(task)
  }

  const handleDelete = useCallback((taskId: number) => {
    const newTodoList = todoList.filter((todo: Todo) => todo.id !== taskId)
    setTodoList(newTodoList)
  }, [todoList])

  const filteredTodoList = useMemo(() => todoList.filter((todo: Todo) => {
    // console.log('Filtrowanie...')
    return todo.task.toLowerCase().includes(term.toLowerCase())
  }), [term, todoList])

  return (
    <div>
      <input 
        type="text" 
        value={task} 
        onChange={(e) => setTask(e.target.value)} 
      />

      <button onClick={handleCreate}>Utwórz</button>
      <button onClick={handleSearch}>Szukaj</button>

      <List todoList={filteredTodoList} handleDelete={handleDelete} />
    </div>
  )
}

export default App
