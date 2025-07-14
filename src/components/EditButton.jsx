export default function EditButton({ isEditable, isEditing, onClick }) {
    if (!isEditable) return null;

    return (
        <button
            onClick={onClick}
            className={
                "btn btn-link position-absolute fs-5 end-0 bi bi-" +
                (isEditing ? "check2-square" : "pencil-square")
            }
        ></button>
    );
}
