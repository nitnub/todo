import { Button } from 'react-bootstrap';

function ToDo({ removeTodo, updateStatus, todo }) {
  return (
    <div key={todo.id} className="todo">
      <div className="todo-text" id={todo.id}>
        {todo.task}
      </div>

      <div className="controls">
        <div className="btn-container">
          {todo.complete ? (
            <>
              <Button
                className="btn-update"
                id={todo.id}
                onClick={updateStatus}
              >
                Revert
              </Button>
              <Button className="btn-delete" id={todo.id} onClick={removeTodo}>
                X
              </Button>
            </>
          ) : (
            <>
              <Button
                className="btn-update"
                id={todo.id}
                onClick={updateStatus}
              >
                Done
              </Button>
              <Button className="btn-delete" id={todo.id} onClick={removeTodo}>
                X
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default ToDo;
