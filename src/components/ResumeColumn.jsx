import { useState, Fragment } from "react";
import ResumeSection from "./ResumeSection";
import { GET_DEFAULT_ITEM_IDS } from "../constants";

export default function ResumeColumn({ initialSectionIds, isEditable }) {
    const [sectionIds, setSectionIds] = useState(initialSectionIds);

    return (
        <div className="col-lg-6">
            {sectionIds.map((sectionId) => {
                console.log("sectionId: " + sectionId);
                let initialItemIds = GET_DEFAULT_ITEM_IDS(sectionId);
                return (
                    <ResumeSection
                        key={sectionId}
                        id={sectionId}
                        initialItemIds={initialItemIds}
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

    return (
        <div className="col-lg-6">
            {isEditable && (
                <button type="button" className="btn btn-sm btn-info w-100">
                    <i className="bi bi-plus"></i> Add Section Here
                </button>
            )}
            <section>
                <h3 className="resume-title">Contacts</h3>
                <div className="resume-item pb-0">
                    <ul>
                        <li>Portland par 127,Orlando, FL</li>
                        <li>(123) 456-7891</li>
                        <li>alice.barkley@example.com</li>
                    </ul>
                </div>
            </section>
            {isEditable && (
                <button type="button" className="btn btn-sm btn-info w-100">
                    <i className="bi bi-plus"></i> Add Section Here
                </button>
            )}

            <section>
                <h3 className="resume-title">Education</h3>
                <div className="resume-item">
                    <h4>Master of Fine Arts &amp; Graphic Design</h4>
                    <h5>2015 - 2016</h5>
                    <p>
                        <em>
                            Rochester Institute of Technology, Rochester, NY
                        </em>
                    </p>
                    <p>
                        Qui deserunt veniam. Et sed aliquam labore tempore sed
                        quisquam iusto autem sit. Ea vero voluptatum qui ut
                        dignissimos deleniti nerada porti sand markend
                    </p>
                </div>
                <div className="resume-item">
                    <h4>Bachelor of Fine Arts &amp; Graphic Design</h4>
                    <h5>2010 - 2014</h5>
                    <p>
                        <em>
                            Rochester Institute of Technology, Rochester, NY
                        </em>
                    </p>
                    <p>
                        Quia nobis sequi est occaecati aut. Repudiandae et iusto
                        quae reiciendis et quis Eius vel ratione eius unde vitae
                        rerum voluptates asperiores voluptatem Earum molestiae
                        consequatur neque etlon sader mart dila
                    </p>
                </div>
            </section>
            {isEditable && (
                <button type="button" className="btn btn-sm btn-info w-100">
                    <i className="bi bi-plus"></i> Add Section Here
                </button>
            )}
        </div>
    );
}
