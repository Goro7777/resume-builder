import { useState } from "react";
import { DEFAULT_NAME, DEFAULT_DESCRIPTION } from "../constants";
import EditableTitle from "./EditableTitle";
import EditablePar from "./EditablePar";

export default function ResumeHeader({ isEditable }) {
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState(DEFAULT_NAME);
    const [description, setDescription] = useState(DEFAULT_DESCRIPTION);

    if (!isEditable && isEditing) {
        setIsEditing(false);
        return null;
    }

    return (
        <div
            className={
                "resume-section section-title p-2 w-50 mx-auto position-relative" +
                (isEditing ? " highlighted" : "")
            }
        >
            {isEditable && (
                <a
                    href="#"
                    onClick={() => setIsEditing(!isEditing)}
                    className={
                        "position-absolute end-0 bi bi-" +
                        (isEditing ? "save" : "pen")
                    }
                ></a>
            )}
            <>
                <EditableTitle
                    classes="h2 text-center"
                    isEditing={isEditing}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <EditablePar
                    isEditing={isEditing}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </>
        </div>
    );
}
