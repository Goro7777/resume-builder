import ResumeHeader from "./ResumeHeader";
import ResumeColumn from "./ResumeColumn";
import { DEFAULT_PERSON } from "../defaults";

const [INITIAL_LFT_SECTION_IDS, INITIAL_RGT_SECTION_IDS] =
    splitSectionIds(DEFAULT_PERSON);

export default function Resume({ contentRef, isEditable }) {
    return (
        <div className="mt-5">
            <section ref={contentRef} id="resume" className="resume p-4">
                <div
                    className="container aos-init aos-animate"
                    data-aos="fade-up"
                >
                    <ResumeHeader isEditable={isEditable} />

                    <div className="row">
                        <ResumeColumn
                            initialSectionIds={INITIAL_LFT_SECTION_IDS}
                            isEditable={isEditable}
                        />
                        <ResumeColumn
                            initialSectionIds={INITIAL_RGT_SECTION_IDS}
                            isEditable={isEditable}
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}

function splitSectionIds(person) {
    let sections = Object.values(person.sections);
    let halfIndex = Math.ceil(sections.length / 2);

    let lftIds = sections.slice(0, halfIndex).map((section) => section.id);
    let rgtIds = sections.slice(halfIndex).map((section) => section.id);

    return [lftIds, rgtIds];
}
