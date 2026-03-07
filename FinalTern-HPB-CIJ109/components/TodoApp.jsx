import { useState } from "react";

const TABS = {
  ALL: "all",
  ACTIVE: "active",
  COMPLETED: "completed",
};

let nextId = 4;

export const TodoApp = () => {
  const [tab, setTab] = useState(TABS.ALL);
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([
    { id: 1, text: "Do coding challenges", active: true },
    { id: 2, text: "Do coding challenges", active: true },
    { id: 3, text: "Task done", active: false },
  ]);

  const handleAdd = (e) => {
    e.preventDefault();
    if (!text.trim() || tab === TABS.COMPLETED) return;

    setTodos((prev) => [
      ...prev,
      { id: nextId++, text: text.trim(), active: true },
    ]);
    setText("");
  };

  const handleToggle = (id) => {
    setTodos((prev) =>
      prev.map((t) =>
        t.id === id
          ? {
              ...t,
              active: !t.active,
            }
          : t,
      ),
    );
  };

  const handleDeleteOne = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  const handleDeleteAllCompleted = () => {
    setTodos((prev) => prev.filter((t) => t.active));
  };

  const filteredTodos = todos.filter((t) => {
    if (tab === TABS.ALL) return true;
    if (tab === TABS.ACTIVE) return t.active;
    return !t.active;
  });

  return (
    <div className="todo-page">
      <div className="todo-card">
        <h1 className="todo-title">#todo</h1>

        <div className="todo-tabs">
          <button
            className={`tab-btn ${tab === TABS.ALL ? "active" : ""}`}
            onClick={() => setTab(TABS.ALL)}
          >
            All
          </button>
          <button
            className={`tab-btn ${tab === TABS.ACTIVE ? "active" : ""}`}
            onClick={() => setTab(TABS.ACTIVE)}
          >
            Active
          </button>
          <button
            className={`tab-btn ${tab === TABS.COMPLETED ? "active" : ""}`}
            onClick={() => setTab(TABS.COMPLETED)}
          >
            Completed
          </button>
        </div>

        <form className="todo-form" onSubmit={handleAdd}>
          <input
            type="text"
            className="todo-input"
            placeholder="add details"
            value={text}
            onChange={(e) => setText(e.target.value)}
            disabled={tab === TABS.COMPLETED}
          />
          <button
            type="submit"
            className="todo-add-btn"
            disabled={tab === TABS.COMPLETED}
          >
            Add
          </button>
        </form>

        <ul className="todo-list">
          {filteredTodos.map((todo) => (
            <li key={todo.id} className="todo-item">
              <label className="todo-checkbox-wrapper">
                <input
                  type="checkbox"
                  checked={!todo.active}
                  onChange={() => handleToggle(todo.id)}
                />
                <span className={`todo-text ${todo.active ? "" : "done"}`}>
                  {todo.text}
                </span>
              </label>

              {tab === TABS.COMPLETED && (
                <button
                  className="todo-delete-one"
                  type="button"
                  onClick={() => handleDeleteOne(todo.id)}
                  aria-label="Delete task"
                >
                  🗑
                </button>
              )}
            </li>
          ))}

          {filteredTodos.length === 0 && (
            <li className="todo-empty">Không có task nào.</li>
          )}
        </ul>

        {tab === TABS.COMPLETED && todos.some((t) => !t.active) && (
          <div className="todo-footer">
            <button
              type="button"
              className="todo-delete-all"
              onClick={handleDeleteAllCompleted}
            >
              delete all
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
