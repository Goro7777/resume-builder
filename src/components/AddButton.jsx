export default function AddButton({ onAdd, text }) {
    return (
        <button
            type="button"
            className="btn btn-sm btn-outline-success w-50"
            onClick={onAdd}
        >
            <i className="bi bi-plus"></i> {text}
        </button>
    );
}
