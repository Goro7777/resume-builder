import { useState } from "react";
import { DEFAULT_PERSON, DEFAULT_ITEM_HEADER } from "../defaults";
import EditableTitle from "./EditableTitle";
import AddButton from "./AddButton";
import DeleteButton from "./DeleteButton";

export default function ItemHeader({ itemId, isEditable, isEditing }) {
    let [header, setHeader] = useState(
        DEFAULT_PERSON.items[itemId]
            ? {
                  title: DEFAULT_PERSON.items[itemId].title,
                  place: DEFAULT_PERSON.items[itemId].place,
                  time: DEFAULT_PERSON.items[itemId].time,
              }
            : DEFAULT_ITEM_HEADER
    );

    const handleDeletePart = (part) => {
        setHeader((header) => ({
            ...header,
            [part]: "",
        }));
    };

    const handleAddPart = (part) => {
        setHeader((header) => ({
            ...header,
            [part]: DEFAULT_HEADER[part],
        }));
    };

    return (
        <header>
            <div className="mb-2">
                {isEditable && !header.title && (
                    <AddButton
                        classes="py-0 w-25 me-2"
                        text="Add Title"
                        onAdd={() => handleAddPart("title")}
                    />
                )}
                {isEditable && !header.time && (
                    <AddButton
                        classes="py-0 w-25 me-2"
                        text="Add Time"
                        onAdd={() => handleAddPart("time")}
                    />
                )}
                {isEditable && !header.place && (
                    <AddButton
                        classes="py-0 w-25"
                        text="Add Place"
                        onAdd={() => handleAddPart("place")}
                    />
                )}
            </div>
            {header.title && (
                <h4 className="position-relative">
                    {isEditable && !isEditing && (
                        <DeleteButton
                            onDelete={() => handleDeletePart("title")}
                        />
                    )}
                    <EditableTitle
                        isEditing={isEditing}
                        initialValue={header.title}
                    />
                </h4>
            )}
            {header.time && (
                <h5>
                    {isEditable && !isEditing && (
                        <DeleteButton
                            onDelete={() => handleDeletePart("time")}
                        />
                    )}
                    <EditableTitle
                        isEditing={isEditing}
                        initialValue={header.time}
                        classes="px-4"
                    />
                </h5>
            )}
            {header.place && (
                <div>
                    {isEditable && !isEditing && (
                        <DeleteButton
                            onDelete={() => handleDeletePart("place")}
                        />
                    )}
                    <em>
                        <EditableTitle
                            isEditing={isEditing}
                            initialValue={header.place}
                        />
                    </em>
                </div>
            )}
        </header>
    );
}
