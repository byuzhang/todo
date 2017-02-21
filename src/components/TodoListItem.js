import React from 'react';
import moment from 'moment';


const TodoListItem = (props) => {
  const { id, text, completed, createdAt, completedAt } = props;
  const todoClassName = completed ? 'todo todo-completed' : 'todo';
  const renderDate = () => {
    let message = '创建于 ';
    let timestamp = createdAt;

    if (completed) {
      message = '完成于 ';
      timestamp = completedAt;
    }

    return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
  };

  return (
    <div className="todo-item">
      <div className={todoClassName} onClick={() => {
          props.toggleTodo(id);
        }}>
        <div>
          <input type="checkbox" readOnly checked={completed}/>
        </div>
        <div className='todo-content'>
          <p>{text}</p>
          <p className="todo-subtext">{renderDate()}</p>
        </div>
      </div>
      <div className='remove-todo' onClick={() => {
          props.removeTodo(id);
        }}>✘</div>
    </div>
  )
}

TodoListItem.propTypes = {
  createdAt: React.PropTypes.number,
  completedAt: React.PropTypes.number,
  removeTodo: React.PropTypes.func.isRequired,
  toggleTodo: React.PropTypes.func.isRequired
}


export default TodoListItem;
