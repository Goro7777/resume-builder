import { useState } from "react";
import EditablePar from "./EditablePar";
import AddButton from "./AddButton";
import DeleteButton from "./DeleteButton";
import ItemHeader from "./ItemHeader";
import { DEFAULT_PERSON } from "../constants";

const DEFAULT_PARAGRAPH =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
const DEFAULT_LIST_ITEM = "Lorem ipsum dolor sit amet.";

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

    const handleDeleteBodyPart = (partId, listItemId = null) => {
        if (!listItemId) {
            setBody((body) => body.filter((part) => part.id !== partId));
        } else {
            setBody((body) => {
                let nextParts = [];
                for (let part of body) {
                    if (part.id === partId) {
                        let list = {
                            ...part,
                            data: part.data.filter((id) => id !== listItemId),
                        };
                        if (list.data.length > 0) nextParts.push(list);
                    } else {
                        nextParts.push(part);
                    }
                }
                return nextParts;
            });
        }
    };

    let bodyParts = body.map((part) => {
        let isList = Array.isArray(part.data);

        if (isList) {
            return (
                <ul key={part.id}>
                    {part.data.map((listItem) => {
                        let initialValue = DEFAULT_PERSON.items[id]?.info
                            .find((infoPart) => infoPart.id === part.id)
                            ?.data.includes(listItem)
                            ? listItem
                            : DEFAULT_LIST_ITEM;

                        return (
                            <li key={listItem}>
                                {isEditable && !isEditing && (
                                    <DeleteButton
                                        onDelete={() =>
                                            handleDeleteBodyPart(
                                                part.id,
                                                listItem
                                            )
                                        }
                                    />
                                )}
                                <EditablePar
                                    initialValue={initialValue}
                                    isEditing={isEditing}
                                />
                            </li>
                        );
                    })}
                </ul>
            );
        }

        if (!isList) {
            let initialValue = DEFAULT_PERSON.items[id]?.info.find(
                (infoPart) => infoPart.id === part.id
            )
                ? part.data
                : DEFAULT_PARAGRAPH;

            return (
                <div key={part.id} className="position-relative">
                    {isEditable && !isEditing && (
                        <DeleteButton
                            onDelete={() => handleDeleteBodyPart(part.id)}
                        />
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
