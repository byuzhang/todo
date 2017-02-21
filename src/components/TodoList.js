import React from 'react';
import TodoListItem from './TodoListItem';


const TodoList = (props) => {
  const { todos } = props;
  const renderTodos = () => {
    if(todos.length === 0) {
      return (
        <p className="wrapper-message">无待办事项</p>
      );
    }
    return todos.map((todo) => {
      return (
        <TodoListItem
          key={todo.id}
          {...todo}
          removeTodo={props.removeTodo}
          toggleTodo={props.toggleTodo}/>
      )
    });
  };
  return (
    <div>
      {renderTodos()}
    </div>
  )
}

TodoList.propTypes = {
  todo: React.PropTypes.string,
  removeTodo: React.PropTypes.func.isRequired,
  toggleTodo: React.PropTypes.func.isRequired
}
export default TodoList;
