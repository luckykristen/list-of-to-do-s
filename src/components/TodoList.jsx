import TodoItem from './TodoItem';

export default function TodoList({ todos, onToggle, onRemove }) {
    if (todos.length === 0) {
        return <p className="empty">Nic tu není 👀</p>;
    }

    return (
        <ul className="list">
            {todos.map((t) => (
                <TodoItem
                key={t.id}
                todo={t}
                onToggle={onToggle}
                onRemove={onRemove} 
                />
            ))}
        </ul>
    );
}