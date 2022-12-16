import React, { useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import ToDos from './ToDos';
import data from '../data/dummy-db';

const ToDoContainer = () => {
  const [todos, setTodos] = useState(data);
  const [activeTab, setActiveTab] = useState('tab-one');
  const [newTodo, setNewTodo] = useState('');
  const [id, setId] = useState(todos.length);
  const [failedValidation, setFailedValidation] = useState(false);

  const addTodo = (e) => {
    e.preventDefault();
    setFailedValidation(false);
    if (newTodo.length > 0) {
      const todosCopy = [...todos];
      todosCopy.push({ id, task: newTodo, complete: false });

      setTodos(() => todosCopy);
      setId(() => id + 1);
      setNewTodo('');
    } else {
      setFailedValidation(true);
    }
  };

  const noCompletedTasks = () => {
    let noCompletedTasks = true;

    todos.forEach((element) => {
      if (element.complete === true) {
        noCompletedTasks = false;
      }
    });

    return noCompletedTasks;
  };
  return (


    <div className="todo-container">
      <div className="header">
        <h1>To-Dos</h1>
      </div>

      <div className="tab-container">
        <Tabs className="tab-bar" activeKey={activeTab} onSelect={setActiveTab}>
          <Tab eventKey="tab-one" title="To-Dos">
            <ToDos todos={todos} setTodos={setTodos} />
          </Tab>
          <Tab eventKey="tab-two" title="Completed">
            {noCompletedTasks() && <p className="completed-label">No completed tasks yet...</p>}
            <ToDos todos={todos} setTodos={setTodos} status={'complete'} />
          </Tab>
        </Tabs>
      </div>

      {activeTab === 'tab-one' ? (
        <div className="update-container">
          <form onSubmit={addTodo}>
            <input
              className="form-control"
              value={newTodo}
              type="text"
              placeholder="Add To-Do..."
              onChange={(e) => setNewTodo(e.target.value)}
            />
            <div className="error-alert" style={{ color: 'red' }}>
              {failedValidation ? 'Please enter a To-Do' : ''} &nbsp;
            </div>
            <input
              id="add-todo"
              className="btn btn-primary btn-submit"
              type="submit"
              value="Add Todo"
            />
          </form>
        </div>
      ) : (
        <div className="update-container-empty">
          <br />
        </div>
        // null
      )}
    </div>

  );
};

export default ToDoContainer;
