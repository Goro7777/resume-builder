import { useState, Fragment } from "react";
import ResumeSection from "./ResumeSection";

export default function ResumeColumn({ initialSectionIds, isEditable }) {
    const [sectionIds, setSectionIds] = useState(initialSectionIds);

    const handleAddSection = () =>
        setSectionIds((ids) => [...ids, crypto.randomUUID()]);

    const handleDeleteSection = (delId) =>
        setSectionIds((ids) => ids.filter((id) => id !== delId));

    return (
        <div className="col-lg-6">
            {sectionIds.map((sectionId) => {
                return (
                    <ResumeSection
                        key={sectionId}
                        id={sectionId}
                        isEditable={isEditable}
                        onDelete={() => handleDeleteSection(sectionId)}
                    />
                );
            })}
            {isEditable && (
                <button
                    type="button"
                    className="btn btn-sm btn-outline-success w-100"
                    onClick={handleAddSection}
                >
                    <i className="bi bi-plus"></i> Add Section
                </button>
            )}
        </div>
    );
}
