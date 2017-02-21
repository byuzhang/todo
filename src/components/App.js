import React, { Component } from 'react';
import uuid from 'node-uuid';
import moment from 'moment';
import { Grid, Row, Col } from 'react-bootstrap';

import TodoList from './TodoList';
import AddTodo from './AddTodo';
import TodoSearch from './TodoSearch';
import Address from './Address';

import TodoAPI from '../api/TodoAPI';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      showCompleted: false,
      searchText: '',
      todos: TodoAPI.getTodos()
    };

  }
  componentDidUpdate(){
    TodoAPI.setTodos(this.state.todos);
  }
  handleAddTodo = (text) => {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: text,
          completed: false,
          createdAt: moment().unix(),
          completedAt: undefined
        }
      ]
    });
  }
  handleSearch = (showCompleted, searchText) => {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    })
  }
  toggleTodo = (id) => {
    const updatedTodos = this.state.todos.map((todo) => {
      if(todo.id === id){
        todo.completed = !todo.completed;
        todo.completedAt = todo.completed ? moment().unix() : undefined;
      }
      return todo;
    });

    this.setState({
      todos: updatedTodos
    })
   }
   removeTodo = (id) => {
     const leftTodos = this.state.todos.filter((todo) => {
       return todo.id !== id;
     });

     this.setState({
       todos: leftTodos
     })
   }
   render(){
     const { todos, showCompleted, searchText } = this.state;
     const filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

     return (
       <div>
         <h1 className="page-title">Todo</h1>
         <Grid>
           <Row>
             <Col xs={10} xsOffset={1} sm={8} smOffset={2} md={6} mdOffset={3} lg={4} lgOffset={4}>
               <div className="wrapper">
                 <TodoSearch handleSearch={this.handleSearch}/>
                 <TodoList todos={filteredTodos} toggleTodo={this.toggleTodo} removeTodo={this.removeTodo} />
                 <AddTodo handleAddTodo={this.handleAddTodo}/>
               </div>
             </Col>
           </Row>
           <Address/>
         </Grid>
       </div>
    )
  }
}



export default App;
