export default function AddButton({ onAdd, text, classes = "" }) {
    return (
        <button
            type="button"
            className={"btn btn-sm btn-outline-success  " + classes}
            onClick={onAdd}
        >
            <i className="bi bi-plus"></i> {text}
        </button>
    );
}
