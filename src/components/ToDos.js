import React, { useState } from 'react';

import ToDo from './ToDo';

function ToDos({ status, todos, setTodos }) {
  const updateStatus = (e) => {
    const id = e.target.id;
    console.log(e);
    const todosCopy = [...todos];

    const filteredTodos = todosCopy.map((todo) => {
      if (todo.id === Number(id)) {
        todo.complete = !todo.complete;
        return todo;
      }
      return todo;
    });
    setTodos(() => filteredTodos);
  };

  const removeTodo = (e) => {
    const todosCopy = [...todos];
    const filteredTodos = todosCopy.filter(
      (todo) => todo.id !== Number(e.target.id)
    );
    setTodos(() => filteredTodos);
  };

  return (
    <div className="container">
      <div className="todo-list">
        {todos.map((todo, index) => {
          if (status === 'complete' && todo.complete === true) {
            return (
              <ToDo
                key={index}
                todo={todo}
                updateStatus={updateStatus}
                removeTodo={removeTodo}
              />
            );
          }
          if (status !== 'complete' && todo.complete === false) {
            return (
              <ToDo
                key={index}
                todo={todo}
                updateStatus={updateStatus}
                removeTodo={removeTodo}
              />
            );
          }
        })}
      </div>
    </div>
  );
}

export default ToDos;
