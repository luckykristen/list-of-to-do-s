export default function TodoItem({ todo, onToggle, onRemove }) {
    return (
        <li className="item">
            <input 
            type="checkbox"
            className="checkbox"
            checked={todo.done}
            onChange={() => onToggle(todo.id)}
            />

            <span className={`itemText ${todo.done ? "done" : ""}`}>
                {todo.title}
            </span>

            <button
            className="btn btnDanger"
            onClick={() => onRemove(todo.id)}
            type="button"
            >
                Smazat
            </button>
        </li>
    );
}