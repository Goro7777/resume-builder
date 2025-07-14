import ResumeHeader from "./ResumeHeader";
import { GET_DEFAULT_SECTION_IDS } from "../constants";
import ResumeColumn from "./ResumeColumn";

// https://www.bootdey.com/snippets/view/cv-resume

let [LFT_SECTION_IDS, RGT_SECTION_IDS] = GET_DEFAULT_SECTION_IDS();

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
                                initialSectionIds={LFT_SECTION_IDS}
                                isEditable={isEditable}
                            />
                            <ResumeColumn
                                initialSectionIds={RGT_SECTION_IDS}
                                isEditable={isEditable}
                            />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
