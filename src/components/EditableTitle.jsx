import { useState } from "react";

export default function EditableTitle({
    isEditing,
    initialValue,
    classes = "",
}) {
    const [title, setTitle] = useState(initialValue);

    return (
        <div>
            {isEditing ? (
                <input
                    className={"w-100 p-1 border-1 " + classes}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            ) : (
                <div className={"p-1 border border-1 border-white " + classes}>
                    {title}
                </div>
            )}
        </div>
    );
}
