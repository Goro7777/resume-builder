export default function DeleteButton({ onDelete }) {
    return (
        <button
            className="btn py-0 position-absolute end-0"
            onClick={(e) => onDelete(e)}
        >
            <i className="text-danger fs-5 bi bi-x"></i>
        </button>
    );
}
