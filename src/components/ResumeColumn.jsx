import { useState } from "react";
import ResumeSection from "./ResumeSection";
import AddButton from "./AddButton";

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
                <AddButton text="Add Section" onAdd={handleAddSection} />
            )}
        </div>
    );
}
