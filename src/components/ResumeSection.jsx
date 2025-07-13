import { useState } from "react";

export default function ResumeSection() {
    const [isEditing, setIsEditing] = useState(false);

    if (!isEditable && isEditing) {
        setIsEditing(false);
        return null;
    }

    return null;
}
