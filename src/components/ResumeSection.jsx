import { useState } from "react";
import EditableTitle from "./EditableTitle";
import Button from "./Button";
import ResumeItem from "./ResumeItem";
import ResumeSectionControls from "./ResumeSectionControls";
import { DEFAULT_PERSON } from "../defaults";

export default function ResumeSection({ id, isEditable, onDelete }) {
    const [isEditing, setIsEditing] = useState(false);
    const [itemIds, setItemIds] = useState(
        DEFAULT_PERSON.sections[id]?.itemIds || [crypto.randomUUID()]
    );

    if (!isEditable && isEditing) {
        setIsEditing(false);
        return null;
    }

    const handleAddItem = () =>
        setItemIds((ids) => [...ids, crypto.randomUUID()]);

    const handleDeleteItem = (delId) =>
        setItemIds((ids) => ids.filter((id) => id !== delId));

    return (
        <section className="resume-section position-relative mb-4">
            {isEditable && (
                <ResumeSectionControls
                    isEditing={isEditing}
                    onEdit={() => setIsEditing(!isEditing)}
                    onDelete={onDelete}
                />
            )}

            <h3 className="resume-title">
                <EditableTitle
                    isEditing={isEditing}
                    initialValue={
                        DEFAULT_PERSON.sections[id]?.name || "Section Title"
                    }
                />
            </h3>
            {itemIds.map((id) => (
                <ResumeItem
                    key={id}
                    id={id}
                    isEditing={isEditing}
                    isEditable={isEditable}
                    onDelete={() => handleDeleteItem(id)}
                />
            ))}
            {isEditable && (
                <div className="resume-item">
                    <Button
                        text="Item"
                        onClick={handleAddItem}
                        classes="w-25"
                    />
                </div>
            )}
        </section>
    );
}
