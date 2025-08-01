import { useState } from "react";

export default function EditablePar({ isEditing, initialValue }) {
    const [text, setText] = useState(initialValue);

    return (
        <>
            {isEditing ? (
                <textarea
                    className="align-top w-100 p-1 border-1"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                ></textarea>
            ) : (
                <div className="p-1 border border-1 border-white">{text}</div>
            )}
        </>
    );
}
