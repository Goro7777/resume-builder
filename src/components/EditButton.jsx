export default function EditButton({ isEditable, isEditing, onClick }) {
    if (!isEditable) return null;

    return (
        <button
            onClick={onClick}
            className={
                "btn btn-link fs-5 bi bi-" +
                (isEditing ? "check2-square" : "pencil-square")
            }
        ></button>
    );
}
