import EditableTitle from "./EditableTitle";
import EditablePar from "./EditablePar";
import { useState } from "react";
import { DEFAULT_PERSON } from "../constants";
import AddButton from "./AddButton";
import ItemHeader from "./ItemHeader";

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
            <ItemHeader
                isEditable={isEditable}
                isEditing={isEditing}
                itemId={id}
            />
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
