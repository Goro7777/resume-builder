export default function EditableTitle({ isEditing, value, onChange }) {
    return (
        <div>
            {isEditing ? (
                <input
                    className="w-100 p-1 border-1 h2 text-center"
                    value={value}
                    onChange={onChange}
                />
            ) : (
                <div className="p-1 border border-1 border-white h2 text-center">
                    {value}
                </div>
            )}
        </div>
    );
}
