import { useState } from "react";
import { DEFAULT_PERSON, DEFAULT_NEW_ITEM } from "../constants";
import EditableTitle from "./EditableTitle";
import ResumeItem from "./ResumeItem";
import EditButton from "./EditButton";

export default function ResumeSection({ id, initialItemIds, isEditable }) {
    const [isEditing, setIsEditing] = useState(false);
    const [itemIds, setItemIds] = useState(initialItemIds);

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
                    initialValue={DEFAULT_PERSON.sections[id]?.name || "Title"}
                />
            </h3>
            {itemIds.map((id) => (
                <ResumeItem
                    id={id}
                    isEditing={isEditing}
                    initialParts={
                        DEFAULT_PERSON.items[id]
                            ? DEFAULT_PERSON.items[id]
                            : DEFAULT_NEW_ITEM
                    }
                />
            ))}
            {/* <button type="button" className="btn btn-sm btn-info w-100">
                    <i className="bi bi-plus"></i> Add Item
                </button> */}
        </section>
    );

    return (
        <section>
            <h3 className="resume-title">Contacts</h3>
            <div className="resume-item pb-0">
                <ul>
                    <li>Portland par 127,Orlando, FL</li>
                    <li>(123) 456-7891</li>
                    <li>alice.barkley@example.com</li>
                </ul>
            </div>
        </section>
    );
}
