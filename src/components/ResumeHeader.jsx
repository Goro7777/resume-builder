import { useState } from "react";
import { DEFAULT_PERSON } from "../constants";
import EditableTitle from "./EditableTitle";
import EditablePar from "./EditablePar";
import EditButton from "./EditButton";

export default function ResumeHeader({ isEditable }) {
    const [isEditing, setIsEditing] = useState(false);

    if (!isEditable && isEditing) {
        setIsEditing(false);
        return null;
    }

    return (
        <div className="resume-section section-title p-2 w-75 mx-auto position-relative">
            <EditButton
                isEditable={isEditable}
                isEditing={isEditing}
                onClick={() => setIsEditing(!isEditing)}
            />
            <>
                <EditableTitle
                    classes="h2 text-center"
                    isEditing={isEditing}
                    initialValue={DEFAULT_PERSON.fullName}
                />
                <EditablePar
                    isEditing={isEditing}
                    initialValue={DEFAULT_PERSON.description}
                />
            </>
        </div>
    );
}
