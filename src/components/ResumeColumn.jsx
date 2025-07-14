import { useState, Fragment } from "react";
import ResumeSection from "./ResumeSection";

export default function ResumeColumn({ initialSectionIds, isEditable }) {
    const [sectionIds, setSectionIds] = useState(initialSectionIds);

    return (
        <div className="col-lg-6">
            {sectionIds.map((sectionId) => {
                return (
                    <ResumeSection
                        key={sectionId}
                        id={sectionId}
                        isEditable={isEditable}
                    />
                );
            })}
            {isEditable && (
                <button type="button" className="btn btn-sm btn-info w-100">
                    <i className="bi bi-plus"></i> Add Section
                </button>
            )}
        </div>
    );
}
