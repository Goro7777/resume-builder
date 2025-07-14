import { useState } from "react";
import { DEFAULT_PERSON } from "../constants";
import EditableTitle from "./EditableTitle";

export default function ResumeSection({ id, initialItemIds, isEditable }) {
    const [isEditing, setIsEditing] = useState(false);
    const [itemIds, setItemIds] = useState(initialItemIds);

    if (!isEditable && isEditing) {
        setIsEditing(false);
        return null;
    }

    return (
        <section>
            <h3 className="resume-title">
                <EditableTitle
                    isEditing={isEditing}
                    initialValue={DEFAULT_PERSON.sections[id]?.name || "Title"}
                />
            </h3>
            <div className="resume-item pb-0">
                {itemIds.map((itemId) => (
                    <h4>{itemId}</h4>
                ))}
                {/* <button type="button" className="btn btn-sm btn-info w-100">
                    <i className="bi bi-plus"></i> Add Item
                </button> */}
            </div>
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
