import './App.css';
import TodoTemplate from './Components/TodoTemplate';
import TodoInsert from './Components/TodoInsert';
import TodoList from './Components/TodoList';
import React, { useState, useRef, useCallback, useMemo } from 'react';
import Todo from './constants';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todo, setTodo] = useState<Todo[]>([]);
  const newtodoRef = useRef<HTMLInputElement>(null);

  const onSubmit = (newtext: React.RefObject<HTMLInputElement>) => {
    if (newtext.current === null) {
      return;
    }
    const newtodo: Todo = {
      id: uuidv4(),
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
