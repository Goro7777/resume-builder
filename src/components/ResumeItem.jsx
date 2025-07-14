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

export default function ResumeItem({ id, isEditing }) {
    const [item, setItem] = useState(
        () =>
            DEFAULT_PERSON.items[id] || {
                title: "Title",
                time: "2020 - 2021",
                place: "Saint Petersburg, Russia",
                info: [],
            }
    );

    return (
        <div className="resume-item">
            <header>
                {item.title && (
                    <h4>
                        {
                            <EditableTitle
                                isEditing={isEditing}
                                initialValue={item.title}
                            />
                        }
                    </h4>
                )}

                {item.time && (
                    <h5>
                        <EditableTitle
                            isEditing={isEditing}
                            initialValue={item.time}
                            classes="px-4"
                        />
                    </h5>
                )}
                {item.place && (
                    <div>
                        <em>
                            <EditableTitle
                                isEditing={isEditing}
                                initialValue={item.place}
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
                                    initialValue={point}
                                    isEditing={isEditing}
                                />
                            </li>
                        ))}
                    </ul>
                ) : (
                    <EditablePar
                        key={infoItem}
                        isEditing={isEditing}
                        initialValue={infoItem}
                    />
                );
            })}
        </div>
    );
}
