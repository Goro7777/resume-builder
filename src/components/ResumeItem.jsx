import EditableTitle from "./EditableTitle";
import EditablePar from "./EditablePar";
import { useState } from "react";

let itemsExample = {
    0: {
        id: 0,
        title: "",
        time: "",
        place: "",
        info: [
            [
                "Portland par 127,Orlando, FL",
                "(123) 456-7891",
                "alice.barkley@example.com",
            ],
        ],
    },
};

export default function ResumeItem({ id, isEditing, initialParts }) {
    const [parts, setParts] = useState(initialParts);

    return (
        <div className="resume-item">
            <header>
                {parts.title && (
                    <h4>
                        {
                            <EditableTitle
                                isEditing={isEditing}
                                initialValue={parts.title}
                            />
                        }
                    </h4>
                )}

                {parts.time && (
                    <h5>
                        <EditableTitle
                            isEditing={isEditing}
                            initialValue={parts.time}
                            classes="px-4"
                        />
                    </h5>
                )}
                {parts.place && (
                    <p>
                        <em>
                            <EditableTitle
                                isEditing={isEditing}
                                initialValue={parts.place}
                            />
                        </em>
                    </p>
                )}
            </header>
            {parts.info.map((infoItem) => {
                if (Array.isArray(infoItem)) {
                    return (
                        <ul>
                            {infoItem.map((point) => (
                                <li key={point}>
                                    <EditablePar
                                        initialValue={point}
                                        isEditing={isEditing}
                                    />
                                </li>
                            ))}
                        </ul>
                    );
                } else {
                    return (
                        <EditablePar
                            isEditing={isEditing}
                            initialValue={infoItem}
                        />
                    );
                }
            })}
        </div>
    );
}
