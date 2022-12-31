import TodoListItem from './TodoListitem';
import Todo from '../constants';
import React, { useEffect } from 'react';

const TodoList = ({ todo, setTodo }: { todo: Todo[]; setTodo: Function }) => {
  const onRemove = (text: string) => {
    setTodo(todo.filter((eachtodo) => eachtodo.text !== text));
  };
  useEffect(() => {
    console.log('리랜더링');
  });

  return (
    <>
      {todo.map((eachtodo) => (
        <TodoListItem
          key={eachtodo.id}
          todo={{
            id: eachtodo.id,
            text: eachtodo.text,
            selected: eachtodo.selected,
          }}
          onremove={() => onRemove(eachtodo.text)}
        />
      ))}
    </>
  );
};

export default React.memo(TodoList);
