import React, { Component } from 'react';
import { FormGroup, FormControl, Button } from 'react-bootstrap';


class AddTodo extends Component {
  addTodoItem(e){
    e.preventDefault();
    const todoItem = this.todoItem.value;
    if(todoItem.length > 0){
      this.props.handleAddTodo(todoItem);
      this.addForm.reset();
    }else {
      this.todoItem.focus()
    }
  }

  render(){

     return (
      <div className="wrapper-footer">
        <form ref={(input) => this.addForm = input} onSubmit={(e) => (this.addTodoItem(e))}>
          <FormGroup>
            <FormControl
              type="text"
              placeholder="添加事项"
              inputRef={ref => {this.todoItem = ref; }}
             />
          </FormGroup>
          <Button type="submit" bsStyle="primary" block>添加</Button>
        </form>
      </div>
    )
  }
}

AddTodo.propTypes = {
  handleAddTodo: React.PropTypes.func.isRequired
}


export default AddTodo;
