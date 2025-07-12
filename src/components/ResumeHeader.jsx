import { useState } from "react";
import { DEFAULT_NAME, DEFAULT_DESCRIPTION } from "../constants";

export default function ResumeHeader({ isEditable }) {
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState(DEFAULT_NAME);
    const [description, setDescription] = useState(DEFAULT_DESCRIPTION);

    if (!isEditable && isEditing) {
        setIsEditing(false);
        return null;
    }

    let contents = (
        <>
            <h2 className="text-center">{name}</h2>
            <p>{description}</p>
        </>
    );
    if (isEditing)
        contents = (
            <>
                <h2 className="text-center">
                    <input
                        className="w-80 p-0 border-0 text-center"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />{" "}
                </h2>
                <p>
                    <textarea
                        className="w-100 border-0 p-0 m-0"
                        value={description}
                        rows={3}
                        onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                </p>
            </>
        );

    return (
        <div
            className={
                "resume-section section-title p-2 w-50 mx-auto position-relative" +
                (isEditing ? " highlighted" : "")
            }
        >
            {isEditable && (
                <a
                    href="#"
                    onClick={() => setIsEditing(!isEditing)}
                    className={
                        "position-absolute end-0 bi bi-" +
                        (isEditing ? "save" : "pen")
                    }
                ></a>
            )}
            {contents}
        </div>
    );
}
