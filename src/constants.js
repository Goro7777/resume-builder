export const DEFAULT_NAME = "Alice Barkley";
export const DEFAULT_DESCRIPTION =
    "Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.";

export const getSectionIds = () => {
    let halfIndex = Math.ceil(DEFAULT_PERSON.sections.length / 2);

    let lftIds = DEFAULT_PERSON.sections
        .slice(0, halfIndex)
        .map((section) => section.id);
    let rgtIds = DEFAULT_PERSON.sections
        .slice(halfIndex)
        .map((section) => section.id);

    return [lftIds, rgtIds];
};

export const DEFAULT_PERSON = {
    fullName: "Alice Barkley",
    info: [
        "Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.",
    ],
    items: {
        0: {
            title: "",
            time: "",
            place: "",
            info: [
                [
                    "Portland par 127,Orlando, FL",
                    "(123) 456-7891",
                    "alice.barkley@example.com",
                ],
            ],
        },
        1: {
            title: "Master of Fine Arts & Graphic Design",
            time: "2015 - 2016",
            place: "Rochester Institute of Technology, Rochester, NY",
            info: [
                "Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend",
            ],
        },
        2: {
            id: 2,
            title: "Bachelor of Fine Arts & Graphic Design",
            time: "2010 - 2014",
            place: "Rochester Institute of Technology, Rochester, NY",
            info: [
                "Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila",
            ],
        },
        3: {
            title: "Senior graphic design specialist",
            time: "2019 - Present",
            place: "Experion, New York, NY",
            info: [
                [
                    "Lead in the design, development, and implementation of the graphic, layout, and production communication materials",
                    "Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project.",
                    "Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design",
                    "Oversee the efficient use of production project budgets ranging from $2,000 - $25,000",
                ],
            ],
        },
        4: {
            title: "Graphic design specialist",
            time: "2017 - 2018",
            place: "Stepping Stone Advertising, New York, NY",
            info: [
                "Developed numerous marketing programs (logos, brochures,infographics, presentations, and advertisements).",
                "Managed up to 5 projects or tasks at a given time while under pressure",
                "Recommended and consulted with clients on the most appropriate graphic design",
                "Created 4+ design presentations and proposals a month for clients and account managers",
            ],
        },
    },
    sections: [
        {
            id: 0,
            name: "Contacts",
            itemIds: [0],
        },
        {
            id: 1,
            name: "Education",
            itemIds: [1, 2],
        },
        {
            id: 2,
            name: "Professional Experience",
            itemIds: [3, 4],
        },
    ],
};
