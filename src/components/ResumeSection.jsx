import { useState } from "react";
import { DEFAULT_PERSON, GET_DEFAULT_ITEM_IDS } from "../constants";
import EditableTitle from "./EditableTitle";
import ResumeItem from "./ResumeItem";
import EditButton from "./EditButton";

export default function ResumeSection({ id, isEditable }) {
    const [isEditing, setIsEditing] = useState(false);
    const [itemIds, setItemIds] = useState(() => GET_DEFAULT_ITEM_IDS(id));

    if (!isEditable && isEditing) {
        setIsEditing(false);
        return null;
    }

    return (
        <section className="resume-section position-relative">
            <EditButton
                isEditable={isEditable}
                isEditing={isEditing}
                onClick={() => setIsEditing(!isEditing)}
            />
            <h3 className="resume-title">
                <EditableTitle
                    isEditing={isEditing}
                    initialValue={
                        DEFAULT_PERSON.sections[id]?.name || "Section Title"
                    }
                />
            </h3>
            {itemIds.map((id) => (
                <ResumeItem key={id} id={id} isEditing={isEditing} />
            ))}
            {/* <button type="button" className="btn btn-sm btn-info w-100">
                    <i className="bi bi-plus"></i> Add Item
                </button> */}
        </section>
    );
}
