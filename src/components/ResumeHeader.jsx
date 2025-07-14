import { useState } from "react";
import { DEFAULT_NAME, DEFAULT_DESCRIPTION } from "../constants";
import EditableTitle from "./EditableTitle";
import EditablePar from "./EditablePar";

export default function ResumeHeader({ isEditable }) {
    const [isEditing, setIsEditing] = useState(false);

    if (!isEditable && isEditing) {
        setIsEditing(false);
        return null;
    }

    return (
        <div
            className={
                "resume-section section-title p-2 w-75 mx-auto position-relative" +
                (isEditing ? " highlighted" : "")
            }
        >
            {isEditable && (
                <a
                    href="#"
                    onClick={() => setIsEditing(!isEditing)}
                    className={
                        "position-absolute fs-5 end-0 bi bi-" +
                        (isEditing ? "check2-square" : "pencil-square")
                    }
                ></a>
            )}
            <>
                <EditableTitle
                    textClasses="h2 text-center"
                    isEditing={isEditing}
                    initialValue={DEFAULT_NAME}
                />
                <EditablePar
                    isEditing={isEditing}
                    initialValue={DEFAULT_DESCRIPTION}
                />
            </>
        </div>
    );
}
