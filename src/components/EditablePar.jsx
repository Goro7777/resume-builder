export default function EditablePar({ isEditing, value, onChange }) {
    return (
        <div>
            {isEditing ? (
                <textarea
                    className="align-top w-100 p-1 border-1"
                    value={value}
                    rows={3}
                    onChange={onChange}
                ></textarea>
            ) : (
                <div className="p-1 border border-1 border-white">{value}</div>
            )}
        </div>
    );
}
