import TodoTemplate from './components/TodoTemplate.js';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import { useRef, useCallback, useState } from 'react';

function createBulkTodos() {
  const array = [];
  for (let i=1; i<=2500; i++) {
    array.push({
      id: i,
      text: `할 일 ${i}`,
      checked: false
    })
  }
  return array;
}

function todoReducer(todos, action) {
  switch (action.type) {
    case 'INSERT':
      return todos.concat(action.todo)
    case 'REMOVE':
      return todos.filter(todo => todo.id !== action.id)
    case 'TOGGLE':
      return todos.map(todo =>
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo
      )
    default:
      return todos
  }
}

function App() {
  const [todos, setTodos] = useState(createBulkTodos);

  // 고유값으로 사용 될 id
  // ref를 사용해서 변수 담기
  const nextId = useRef(2501);

  const onInsert = useCallback(text => {
      const todo = {
        id: nextId.current,
        text,
        checked: false
      }
      setTodos(todos => todos.concat(todo))
      nextId.current += 1 // nextId 1씩 더하기
    }, [])

  const onRemove = useCallback(id => {
      setTodos(todos => todos.filter(todo => todo.id !== id))
    }, [])

  const onToggle = useCallback(id => {
      setTodos(todos => todos.map(todo => todo.id === id ? { ...todo, checked: !todo.checked } : todo))
    }, [])

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
    </TodoTemplate>)
}

export default App;
