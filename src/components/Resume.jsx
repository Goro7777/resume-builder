import ResumeHeader from "./ResumeHeader";
import { getSectionIds } from "../constants";
import ResumeColumn from "./ResumeColumn";

// Column
//  Section - Contacts, Education, Prof Experience
//   Item   - Master..., Bachelor..., Senior..., Graphic...
//   Item
let [LFT_SECTION_IDS, RGT_SECTION_IDS] = getSectionIds();

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
                            {/* Left column */}
                            {/* <div className="col-lg-6">
                                {isEditable && (
                                    <button
                                        type="button"
                                        className="btn btn-sm btn-info w-100"
                                    >
                                        <i className="bi bi-plus"></i> Add
                                        Section Here
                                    </button>
                                )}
                                <section>
                                    <h3 className="resume-title">Contacts</h3>
                                    <div className="resume-item pb-0">
                                        <ul>
                                            <li>
                                                Portland par 127,Orlando, FL
                                            </li>
                                            <li>(123) 456-7891</li>
                                            <li>alice.barkley@example.com</li>
                                        </ul>
                                    </div>
                                </section>
                                {isEditable && (
                                    <button
                                        type="button"
                                        className="btn btn-sm btn-info w-100"
                                    >
                                        <i className="bi bi-plus"></i> Add
                                        Section Here
                                    </button>
                                )}

                                <section>
                                    <h3 className="resume-title">Education</h3>
                                    <div className="resume-item">
                                        <h4>
                                            Master of Fine Arts &amp; Graphic
                                            Design
                                        </h4>
                                        <h5>2015 - 2016</h5>
                                        <p>
                                            <em>
                                                Rochester Institute of
                                                Technology, Rochester, NY
                                            </em>
                                        </p>
                                        <p>
                                            Qui deserunt veniam. Et sed aliquam
                                            labore tempore sed quisquam iusto
                                            autem sit. Ea vero voluptatum qui ut
                                            dignissimos deleniti nerada porti
                                            sand markend
                                        </p>
                                    </div>
                                    <div className="resume-item">
                                        <h4>
                                            Bachelor of Fine Arts &amp; Graphic
                                            Design
                                        </h4>
                                        <h5>2010 - 2014</h5>
                                        <p>
                                            <em>
                                                Rochester Institute of
                                                Technology, Rochester, NY
                                            </em>
                                        </p>
                                        <p>
                                            Quia nobis sequi est occaecati aut.
                                            Repudiandae et iusto quae reiciendis
                                            et quis Eius vel ratione eius unde
                                            vitae rerum voluptates asperiores
                                            voluptatem Earum molestiae
                                            consequatur neque etlon sader mart
                                            dila
                                        </p>
                                    </div>
                                </section>
                                {isEditable && (
                                    <button
                                        type="button"
                                        className="btn btn-sm btn-info w-100"
                                    >
                                        <i className="bi bi-plus"></i> Add
                                        Section Here
                                    </button>
                                )}
                            </div> */}

                            {/* Right column */}
                            <div className="col-lg-6">
                                {isEditable && (
                                    <button
                                        type="button"
                                        className="btn btn-sm btn-info w-100"
                                    >
                                        <i className="bi bi-plus"></i> Add
                                        Section Here
                                    </button>
                                )}
                                <section>
                                    <h3 className="resume-title">
                                        Professional Experience
                                    </h3>
                                    <div className="resume-item">
                                        <h4>
                                            Senior graphic design specialist
                                        </h4>
                                        <h5>2019 - Present</h5>
                                        <p>
                                            <em>Experion, New York, NY </em>
                                        </p>
                                        <ul>
                                            <li>
                                                Lead in the design, development,
                                                and implementation of the
                                                graphic, layout, and production
                                                communication materials
                                            </li>
                                            <li>
                                                Delegate tasks to the 7 members
                                                of the design team and provide
                                                counsel on all aspects of the
                                                project.{" "}
                                            </li>
                                            <li>
                                                Supervise the assessment of all
                                                graphic materials in order to
                                                ensure quality and accuracy of
                                                the design
                                            </li>
                                            <li>
                                                Oversee the efficient use of
                                                production project budgets
                                                ranging from $2,000 - $25,000
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="resume-item">
                                        <h4>Graphic design specialist</h4>
                                        <h5>2017 - 2018</h5>
                                        <p>
                                            <em>
                                                Stepping Stone Advertising, New
                                                York, NY
                                            </em>
                                        </p>
                                        <ul>
                                            <li>
                                                Developed numerous marketing
                                                programs (logos,
                                                brochures,infographics,
                                                presentations, and
                                                advertisements).
                                            </li>
                                            <li>
                                                Managed up to 5 projects or
                                                tasks at a given time while
                                                under pressure
                                            </li>
                                            <li>
                                                Recommended and consulted with
                                                clients on the most appropriate
                                                graphic design
                                            </li>
                                            <li>
                                                Created 4+ design presentations
                                                and proposals a month for
                                                clients and account managers
                                            </li>
                                        </ul>
                                    </div>
                                </section>
                                {isEditable && (
                                    <button
                                        type="button"
                                        className="btn btn-sm btn-info w-100"
                                    >
                                        <i className="bi bi-plus"></i> Add
                                        Section Here
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
