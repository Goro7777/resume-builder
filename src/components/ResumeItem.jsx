import EditableTitle from "./EditableTitle";
import EditablePar from "./EditablePar";
import { useState } from "react";
import { DEFAULT_PERSON } from "../constants";
import AddButton from "./AddButton";

let itemsExample = {
    0: {
        id: 0,
        title: "",
        time: "",
        place: "",
        info: [
            // optional sentence
            [
                "Portland par 127,Orlando, FL",
                "(123) 456-7891",
                "alice.barkley@example.com",
            ],
        ],
    },
};

const DEFAULT_ITEM = {
    title: "Title",
    time: "2020 - 2021",
    place: "Saint Petersburg, Russia",
    info: [],
};

export default function ResumeItem({ id, isEditing, isEditable }) {
    const [item, setItem] = useState(
        () => DEFAULT_PERSON.items[id] || DEFAULT_ITEM
    );

    const handleDeleteHeaderPart = (key) => {
        setItem((item) => ({
            ...item,
            [key]: "",
        }));
    };

    const handleAddHeaderPart = (key) => {
        setItem((item) => ({
            ...item,
            [key]: DEFAULT_ITEM[key],
        }));
    };

    const handleAddBodyPart = (part = "") => {
        setItem((item) => ({
            ...item,
            info: [
                ...item.info,
                part !== "list"
                    ? crypto.randomUUID()
                    : [
                          crypto.randomUUID(),
                          crypto.randomUUID(),
                          crypto.randomUUID(),
                      ],
            ],
        }));
    };

    return (
        <div className="resume-item">
            <header>
                <div className="mb-2">
                    {isEditable && !item.title && (
                        <AddButton
                            classes="py-0 w-25 me-2"
                            text="Add Title"
                            onAdd={() => handleAddHeaderPart("title")}
                        />
                    )}
                    {isEditable && !item.time && (
                        <AddButton
                            classes="py-0 w-25 me-2"
                            text="Add Time"
                            onAdd={() => handleAddHeaderPart("time")}
                        />
                    )}
                    {isEditable && !item.place && (
                        <AddButton
                            classes="py-0 w-25"
                            text="Add Place"
                            onAdd={() => handleAddHeaderPart("place")}
                        />
                    )}
                </div>
                {item.title && (
                    <h4 className="position-relative">
                        {isEditable && !isEditing && (
                            <button
                                className="btn py-0 position-absolute end-0"
                                onClick={() => handleDeleteHeaderPart("title")}
                            >
                                <i className="text-danger fs-5 bi bi-x"></i>
                            </button>
                        )}
                        <EditableTitle
                            isEditing={isEditing}
                            initialValue={
                                DEFAULT_PERSON.items[id]
                                    ? item.title
                                    : "Item Title"
                            }
                        />
                    </h4>
                )}

                {item.time && (
                    <h5>
                        {isEditable && !isEditing && (
                            <button
                                className="btn py-0 position-absolute end-0"
                                onClick={() => handleDeleteHeaderPart("time")}
                            >
                                <i className="text-danger fs-5 bi bi-x"></i>
                            </button>
                        )}
                        <EditableTitle
                            isEditing={isEditing}
                            initialValue={
                                DEFAULT_PERSON.items[id]
                                    ? item.time
                                    : "Time Interval"
                            }
                            classes="px-4"
                        />
                    </h5>
                )}
                {item.place && (
                    <div>
                        {isEditable && !isEditing && (
                            <button
                                className="btn py-0 position-absolute end-0"
                                onClick={() => handleDeleteHeaderPart("place")}
                            >
                                <i className="text-danger fs-5 bi bi-x"></i>
                            </button>
                        )}
                        <em>
                            <EditableTitle
                                isEditing={isEditing}
                                initialValue={
                                    DEFAULT_PERSON.items[id]
                                        ? item.place
                                        : "Location"
                                }
                            />
                        </em>
                    </div>
                )}
            </header>
            {item.info.map((infoItem, infoItemInd) => {
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
            })}
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
