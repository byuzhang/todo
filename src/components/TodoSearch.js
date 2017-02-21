import React, { Component } from 'react';
import { FormGroup, FormControl, Checkbox } from 'react-bootstrap';


class TodoSearch extends Component {
  searchTodo = () => {
    let searchText = this.searchText.value;
    let showCompleted = this.showCompleted.checked;
    this.props.handleSearch(showCompleted, searchText);
  }

  render(){
     return (
      <div className="wrapper-header">
        <form>
          <FormGroup>
              <FormControl
                type="text"
                placeholder="查询事项"
                inputRef={ref => {this.searchText = ref; }}
                onChange={this.searchTodo}
              />
          </FormGroup>
        </form>
          <Checkbox
            bsClass="check"
            inputRef={ref => {this.showCompleted = ref; }}
            onChange={this.searchTodo}>
            <span className='show-completed'>
              显示已完成事项
            </span>
          </Checkbox>
      </div>
    )
  }
}




export default TodoSearch;
