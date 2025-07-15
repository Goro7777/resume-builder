export default function ControlButtons({ isEditing, onEdit, onDelete }) {
    return (
        <div className="position-absolute end-0 ">
            {onDelete && (
                <button
                    onClick={onDelete}
                    className="btn btn-link fs-5 text-danger bi bi-trash"
                ></button>
            )}
            {onEdit && (
                <button
                    onClick={onEdit}
                    className={
                        "btn btn-link fs-5 bi bi-" +
                        (isEditing ? "check2-square" : "pencil-square")
                    }
                ></button>
            )}
        </div>
    );
}
