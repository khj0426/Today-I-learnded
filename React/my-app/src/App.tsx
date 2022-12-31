import './App.css';
import TodoTemplate from './Components/TodoTemplate';
import TodoInsert from './Components/TodoInsert';
import TodoList from './Components/TodoList';
import React, { useState, useRef, useCallback, useMemo } from 'react';
import Todo from './constants';
function App() {
  const todoarr: Todo[] = [];
  for (let i = 0; i < 2500; i++) {
    todoarr.push({ id: `${i}`, text: `${i}`, selected: false });
  }
  const [todo, setTodo] = useState<Todo[]>(todoarr);
  const newtodoRef = useRef<HTMLInputElement>(null);

  const onSubmit = (newtext: React.RefObject<HTMLInputElement>) => {
    if (newtext.current === null) {
      return;
    }
    const newtodo: Todo = {
      id: String(todo.length + 1),
      text: String(newtext.current.value),
      selected: false,
    };
    setTodo([...todo, newtodo]);
    newtext.current.value = '';
  };

  return (
    <>
      <TodoTemplate>
        <TodoInsert newtodoRef={newtodoRef} onsubmit={onSubmit} />
        <TodoList todo={todo} setTodo={setTodo} />
      </TodoTemplate>
    </>
  );
}

export default React.memo(App);
