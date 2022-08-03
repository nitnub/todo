import React, { useState } from 'react';
import data from '../data/dummy-db';
import { Button } from 'react-bootstrap'
function ToDos() {


  const [todos, setTodos] = useState(data);
  const [newTodo, setNewTodo] = useState('');
  const [id, setId] = useState(todos.length + 1);
  const [failedValidation, setFailedValidation] = useState(false);


  const styles = {

  }



  // addTodo
  const addTodo = (e) => {
    e.preventDefault();
    setFailedValidation(false);
    if (newTodo.length > 0) {
      const todosCopy = [...todos];
      todosCopy.push({ id, task: newTodo, complete: false });
      setTodos(todosCopy);
      setId(() => id + 1);
      setNewTodo('');
    } else {
      setFailedValidation(true);
    }
  };
  // removeTodo
  const removeTodo = (e) => {
    const todosCopy = [...todos];
    const filteredTodos = todosCopy.filter(
      (todo) => todo.id !== Number(e.target.id)
    );
    setTodos(filteredTodos);
  };

  const todoStyle = {
    display: 'flex',
    
  }

  return (
    <div className="container">
  
      <div className="todo-list">
        {todos.map((todo) => (
          <div key={todo.id} className="todo" style={todoStyle}>
            <div className="todo-text" id={todo.id}>{todo.task}</div>
            <Button id={todo.id} onClick={removeTodo}>
              X
            </Button>
          </div>
        ))}
      </div>
      <form onSubmit={addTodo}>
        <input
        className="form-control"
          value={newTodo}
          type="text"
          placeholder="Add To-Do..."
          onChange={(e) => setNewTodo(e.target.value)}
        />
        {failedValidation && (
          <div style={{ color: 'red' }}>Please enter a To-Do</div>
        )}
        <input className="btn btn-primary btn-submit" type="submit" value="Add Todo" />
        
      </form>
    </div>
  );
}

export default ToDos;