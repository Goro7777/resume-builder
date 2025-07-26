import { useState } from "react";
import EditableTitle from "./EditableTitle";
import Button from "./Button";
import { DEFAULT_PERSON, DEFAULT_ITEM_HEADER } from "../defaults";

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
            [part]: DEFAULT_ITEM_HEADER[part],
        }));
    };

    return (
        <header>
            <div className="mb-2">
                {isEditable && !header.title && (
                    <Button
                        text="Title"
                        onClick={() => handleAddPart("title")}
                        classes="py-0 w-25 "
                    />
                )}
                {isEditable && !header.time && (
                    <Button
                        text="Time"
                        onClick={() => handleAddPart("time")}
                        classes="py-0 w-25 "
                    />
                )}
                {isEditable && !header.place && (
                    <Button
                        text="Place"
                        onClick={() => handleAddPart("place")}
                        classes="py-0 w-25 "
                    />
                )}
            </div>
            {header.title && (
                <h4 className="position-relative">
                    {isEditable && !isEditing && (
                        <Button
                            type="delete"
                            classes="border-0 position-absolute end-0"
                            onClick={() => handleDeletePart("title")}
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
                        <Button
                            type="delete"
                            classes="border-0 position-absolute end-0"
                            onClick={() => handleDeletePart("time")}
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
                        <Button
                            type="delete"
                            classes="border-0 position-absolute end-0"
                            onClick={() => handleDeletePart("place")}
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
