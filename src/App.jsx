import { useState, useMemo } from 'react'
import './App.css'

import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import TodoFilters from './components/TodoFilters'

function uid() {
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`
}

export default function App() {
  const [text, setText] = useState("");
  const [filter, setFilter] = useState("all"); //all |active | done
  const [todos, setTodos] = useState([
    { id: uid(), title: "Nakoupit", done: false },
    { id: uid(), title: "Udělat 30 min React", done: true },
  ]);

  const visibleTodos = useMemo(() => {
    if (filter === "active") return todos.filter((t) => !t.done);
    if (filter === "done") return todos.filter((t) => t.done);
    return todos
  }, [todos, filter]);

  const remainingCount = useMemo(
    () => todos.filter((t) => !t.done).length,
    [todos]
  );

  function addTodo() {
    const title = text.trim();
    if (!title) return;

    setTodos((prev) => [{ id: uid(), title, done: false }, ...prev]);
    setText("");
  }

  function toggleTodo(id) {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  }

  function removeTodo(id) {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  }

  function clearDone() {
    setTodos((prev) => prev.filter((t) => !t.done));
  }

  function setAllDone(value) {
    setTodos((prev) => prev.map((t) => ({ ...t, done: value})));
  }

  return (
    <div className="page">
      <div className="card cardWithBg">
        <div className="cardBg">
          <span className="blob blob1"></span>
          <span className="blob blob2"></span>
        </div>
        <header className="header headerFancy">
          <h1 className="title">Plán na dnešek✨</h1>
          <p className="subtitle">Malé kroky = velký posun.</p>
        </header>

        <TodoForm
          text={text}
          setText={setText}
          onAdd={addTodo}
        />

        <TodoFilters
          filter={filter}
          setFilter={setFilter}
          remainingCount={remainingCount}
          onMarkAllDone={() => setAllDone(true)}
          onMarkAllActive={() => setAllDone(false)}
          onClearDone={clearDone}
        />

        <TodoList
        todos={visibleTodos}
        onToggle={toggleTodo}
        onRemove={removeTodo}
        />
      </div>
    </div>
  );

}
