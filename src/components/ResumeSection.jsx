import { useState } from "react";
import { DEFAULT_PERSON } from "../defaults";
import EditableTitle from "./EditableTitle";
import ResumeItem from "./ResumeItem";
import ControlButtons from "./ControlButtons";
import AddButton from "./AddButton";

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

    return (
        <section className="resume-section position-relative">
            {isEditable && (
                <ControlButtons
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
                />
            ))}
            {isEditable && (
                <div className="resume-item">
                    <AddButton
                        text="Add item"
                        onAdd={handleAddItem}
                        classes="w-50"
                    />
                </div>
            )}
        </section>
    );
}
