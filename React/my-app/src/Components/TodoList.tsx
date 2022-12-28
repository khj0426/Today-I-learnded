import TodoListItem from './TodoListitem';
import Todo from '../constants';
const TodoList = ({ todo, onremove }: { todo: Todo[]; onremove: Function }) => {
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
          onremove={onremove}
        />
      ))}
    </>
  );
};

export default TodoList;
