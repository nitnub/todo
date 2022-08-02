import React, { useState } from 'react';
import data from '../data/dummy-db';

function ToDos() {


  const [todos, setTodos] = useState(data);
  const [newTodo, setNewTodo] = useState('');
  const [id, setId] = useState(todos.length + 1);
  const [failedValidation, setFailedValidation] = useState(false);
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
      <div className="header">
        <h1>To-Dos</h1>
      </div>
      <div className="todo-list">
        {todos.map((todo) => (
          <div key={todo.id} className="todo" style={todoStyle}>
            <div id={todo.id}>{todo.task}</div>
            <button id={todo.id} onClick={removeTodo}>
              X
            </button>
          </div>
        ))}
      </div>
      <form onSubmit={addTodo}>
        <input
          value={newTodo}
          type="text"
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <input type="submit" value="Add Todo" />
        {failedValidation && (
          <div style={{ color: 'red' }}>Please enter a To-Do</div>
        )}
      </form>
    </div>
  );
}

export default ToDos;