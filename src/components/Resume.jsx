import ResumeHeader from "./ResumeHeader";
import { DEFAULT_PERSON } from "../defaults";
import ResumeColumn from "./ResumeColumn";

const [INITIAL_LFT_SECTION_IDS, INITIAL_RGT_SECTION_IDS] =
    splitSectionIds(DEFAULT_PERSON);

export default function Resume({ targetRef, isEditable }) {
    return (
        <div className="p-5 mt-5">
            <div className="border border-2">
                <section ref={targetRef} id="resume" className="resume p-4">
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
