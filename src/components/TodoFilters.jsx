export default function TodoFilters({
    filter,
    setFilter,
    remainingCount,
    onMarkAllDone,
    onMarkAllActive,
    onClearDone,
})  {
    return (
        <div className="filters">
            <div className="filterRow">
                <button
                className={`btn ${filter === "all" ? "btnActive" : ""}`}
                onClick={() => setFilter("all")}
                type="button"
                >
                Vše
                </button>

                <button
                className={`btn ${filter === "active" ? "btnActive" : ""}`}
                onClick={() => setFilter("active")}
                type="button"
                >
                Aktivní
                </button>

                <button
                className={`btn ${filter === "done" ? "btnActive" : ""}`}
                onClick={() => setFilter("done")}
                type="button"
                >
                Hotové
                </button>

                <span className="stats">
                    Zbývá: <b>{remainingCount}</b>
                </span>
            </div>

            <div className="actionsRow">
                <button
                className="btn"
                onClick={onMarkAllDone}
                type="button"
                >
                Označit vše jako hotové
                </button>

                <button
                className="btn"
                onClick={onMarkAllActive}
                type="button"
                >
                Označit vše jako aktivní
                </button>

                <button
                className="btn"
                onClick={onClearDone}
                type="button"
                >
                Smazat hotové položky
                </button>
            </div>
        </div>
    );
}