import EditableTitle from "./EditableTitle";
import EditablePar from "./EditablePar";
import { useState } from "react";
import { DEFAULT_PERSON } from "../constants";

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

export default function ResumeItem({ id, isEditing, isEditable }) {
    const [item, setItem] = useState(
        () =>
            DEFAULT_PERSON.items[id] || {
                title: "Title",
                time: "2020 - 2021",
                place: "Saint Petersburg, Russia",
                info: [],
            }
    );

    const handleDeleteHeaderItem = (property) => {
        setItem((item) => ({
            ...item,
            [property]: "",
        }));
    };

    return (
        <div className="resume-item">
            <header>
                {item.title && (
                    <h4 className="position-relative">
                        {isEditable && !isEditing && (
                            <button
                                className="btn py-0 position-absolute end-0"
                                onClick={() => handleDeleteHeaderItem("title")}
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
                                onClick={() => handleDeleteHeaderItem("time")}
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
                                onClick={() => handleDeleteHeaderItem("place")}
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
            {item.info.map((infoItem) => {
                return Array.isArray(infoItem) ? (
                    <ul key={infoItem[0]}>
                        {infoItem.map((point) => (
                            <li key={point}>
                                <EditablePar
                                    initialValue={
                                        DEFAULT_PERSON.items[id]
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
                            DEFAULT_PERSON.items[id]
                                ? infoItem
                                : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        }
                    />
                );
            })}
        </div>
    );
}
