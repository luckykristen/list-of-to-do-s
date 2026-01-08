export default function TodoForm({ text, setText, onAdd }) {
    function handleSubmit(e) {
        e.preventDefault();
        onAdd();
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <input 
            value={text}
            className="input"
            onChange={(e) => setText(e.target.value)}
            placeholder="Napiš úkol a dej Enter..."            
            />

            <button className="btn btnPrimary" type="submit">Přidat</button>
        </form>
    );
}