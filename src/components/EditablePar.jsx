export default function EditablePar({ isEditing, value, onChange }) {
    return (
        <p>
            {isEditing ? (
                <textarea
                    className="w-100 border-0 p-0 m-0"
                    value={value}
                    rows={3}
                    onChange={onChange}
                ></textarea>
            ) : (
                value
            )}
        </p>
    );
}
