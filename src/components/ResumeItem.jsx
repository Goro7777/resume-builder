import { useState } from "react";
import EditablePar from "./EditablePar";
import Button from "./Button";
import ResumeItemHeader from "./ResumeItemHeader";
import {
    DEFAULT_PERSON,
    DEFAULT_LIST_ITEM,
    DEFAULT_PARAGRAPH,
} from "../defaults";

export default function ResumeItem({ id, isEditing, isEditable, onDelete }) {
    const [body, setBody] = useState(DEFAULT_PERSON.items[id]?.info || []);

    const handleAddBodyPart = (type = "paragraph") => {
        setBody((body) => {
            let newPart;

            if (type === "paragraph")
                newPart = {
                    id: crypto.randomUUID(),
                    data: DEFAULT_PARAGRAPH,
                };
            else if (type === "list")
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

    const handleAddListPoint = (partId) => {
        setBody((body) =>
            body.map((part) => {
                if (part.id !== partId) return part;

                let nextPart = {
                    ...part,
                    data: [...part.data, crypto.randomUUID()],
                };
                return nextPart;
            })
        );
    };

    let bodyContent = body.map((part) => {
        let isList = Array.isArray(part.data);

        if (isList) {
            return (
                <div key={part.id}>
                    <ul>
                        {part.data.map((listItem) => {
                            let initialValue = DEFAULT_PERSON.items[id]?.info
                                .find((infoPart) => infoPart.id === part.id)
                                ?.data.includes(listItem)
                                ? listItem
                                : DEFAULT_LIST_ITEM;

                            return (
                                <li key={listItem}>
                                    {isEditable && !isEditing && (
                                        <Button
                                            type="delete"
                                            classes="border-0 position-absolute end-0"
                                            onClick={() =>
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
                        {isEditable && (
                            <div>
                                <Button
                                    text="Point"
                                    onClick={() => handleAddListPoint(part.id)}
                                    classes="w-25 py-0"
                                />
                            </div>
                        )}
                    </ul>
                </div>
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
                        <Button
                            type="delete"
                            classes="border-0 position-absolute end-0"
                            onClick={() => handleDeleteBodyPart(part.id)}
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
            {isEditable && (
                <Button
                    text="Item"
                    type="delete"
                    onClick={onDelete}
                    classes="w-25"
                />
            )}
            <ResumeItemHeader
                isEditable={isEditable}
                isEditing={isEditing}
                itemId={id}
            />

            {bodyContent}

            {isEditable && (
                <div>
                    <Button
                        text="Paragraph"
                        onClick={() => handleAddBodyPart()}
                        classes="w-25 py-0"
                    />
                    <Button
                        text="Bullet List"
                        onClick={() => handleAddBodyPart("list")}
                        classes="w-25 py-0"
                    />
                </div>
            )}
        </div>
    );
}
