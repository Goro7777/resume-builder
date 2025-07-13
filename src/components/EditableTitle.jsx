import { useState } from "react";

export default function EditableTitle({ isEditing, initialValue }) {
    const [title, setTitle] = useState(initialValue);

    return (
        <div>
            {isEditing ? (
                <input
                    className="w-100 p-1 border-1 h2 text-center"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            ) : (
                <div className="p-1 border border-1 border-white h2 text-center">
                    {title}
                </div>
            )}
        </div>
    );
}
