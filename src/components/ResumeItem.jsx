import { useState } from "react";
import EditablePar from "./EditablePar";
import ItemList from "./ItemList";
import AddButton from "./AddButton";
import ItemHeader from "./ItemHeader";
import { DEFAULT_PERSON } from "../constants";

const DEFAULT_PARAGRAPH =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

export default function ResumeItem({ id, isEditing, isEditable }) {
    const [body, setBody] = useState(DEFAULT_PERSON.items[id]?.info || []);

    const handleAddBodyPart = (partType = "paragraph") => {
        setBody((body) => {
            let newPart;

            if (partType === "paragraph")
                newPart = {
                    id: crypto.randomUUID(),
                    data: DEFAULT_PARAGRAPH,
                };
            else if (partType === "list")
                newPart = {
                    id: crypto.randomUUID(),
                    data: [
                        crypto.randomUUID(),
                        crypto.randomUUID(),
                        crypto.randomUUID(),
                    ],
                };

            return [...body, newPart];
        });
    };

    const handleDeleteBodyPart = (partId) => {
        setBody((body) => body.filter((part) => part.id !== partId));
    };

    let bodyParts = body.map((part) => {
        let bulletList = Array.isArray(part.data);

        if (bulletList) {
            <ItemList itemId={id} data={part} />;
        }

        if (!bulletList) {
            let initialValue = DEFAULT_PERSON.items[id]?.info.find(
                (infoPart) => infoPart.id === part.id
            )
                ? part.data
                : DEFAULT_PARAGRAPH;

            return (
                <div key={part.id} className="position-relative">
                    {isEditable && !isEditing && (
                        <button
                            className="btn py-0 position-absolute end-0"
                            onClick={() => handleDeleteBodyPart(part.id)}
                        >
                            <i className="text-danger fs-5 bi bi-x"></i>
                        </button>
                    )}
                    <EditablePar
                        isEditing={isEditing}
                        initialValue={initialValue}
                    />
                </div>
            );
        }
    });

    return (
        <div className="resume-item">
            <ItemHeader
                isEditable={isEditable}
                isEditing={isEditing}
                itemId={id}
            />
            {bodyParts}
            {/* {item.info.map((infoItem, infoItemInd) => {
                return Array.isArray(infoItem) ? (
                    <ul key={infoItem[0]}>
                        {infoItem.map((point, pointInd) => (
                            <li key={point}>
                                <EditablePar
                                    initialValue={
                                        DEFAULT_PERSON.items[id]?.info[
                                            infoItemInd
                                        ]?.includes(point)
                                            ? point
                                            : "Lorem ipsum dolor sit amet"
                                    }
                                    isEditing={isEditing}
                                />
                            </li>
                        ))}
                    </ul>
                ) : (
                    <EditablePar
                        key={infoItem}
                        isEditing={isEditing}
                        initialValue={
                            DEFAULT_PERSON.items[id]?.info[infoItemInd]
                                ? infoItem
                                : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        }
                    />
                );
            })} */}
            {isEditable && (
                <div>
                    <AddButton
                        classes="py-0 w-25 me-2"
                        text="Add Paragraph"
                        onAdd={() => handleAddBodyPart()}
                    />
                    <AddButton
                        classes="py-0 w-25 me-2"
                        text="Add Bullet List"
                        onAdd={() => handleAddBodyPart("list")}
                    />
                </div>
            )}
        </div>
    );
}
