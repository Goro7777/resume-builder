export const GET_DEFAULT_SECTION_IDS = () => {
    let sections = Object.values(DEFAULT_PERSON.sections);
    let halfIndex = Math.ceil(sections.length / 2);

    let lftIds = sections.slice(0, halfIndex).map((section) => section.id);
    let rgtIds = sections.slice(halfIndex).map((section) => section.id);

    return [lftIds, rgtIds];
};

export const GET_DEFAULT_ITEM_IDS = (sectionId) => {
    return DEFAULT_PERSON.sections[sectionId]?.itemIds;
};

export const GET_DEFAULT_ITEMS = () => {
    return DEFAULT_PERSON.items;
};

export const DEFAULT_PERSON = {
    fullName: "Alice Barkley",
    description:
        "Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.",
    items: {
        1: {
            id: 1,
            info: [
                {
                    id: 1,
                    data: [
                        "Portland par 127,Orlando, FL",
                        "(123) 456-7891",
                        "alice.barkley@example.com",
                    ],
                },
            ],
        },
        2: {
            id: 2,
            title: "Master of Fine Arts & Graphic Design",
            time: "2015 - 2016",
            place: "Rochester Institute of Technology, Rochester, NY",
            info: [
                {
                    id: 1,
                    data: "Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend",
                },
            ],
        },
        3: {
            id: 3,
            title: "Bachelor of Fine Arts & Graphic Design",
            time: "2010 - 2014",
            place: "Rochester Institute of Technology, Rochester, NY",
            info: [
                {
                    id: 1,
                    data: "Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila",
                },
            ],
        },
        4: {
            id: 4,
            title: "Senior graphic design specialist",
            time: "2019 - Present",
            place: "Experion, New York, NY",
            info: [
                {
                    id: 1,
                    data: [
                        "Lead in the design, development, and implementation of the graphic, layout, and production communication materials",
                        "Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project.",
                        "Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design",
                        "Oversee the efficient use of production project budgets ranging from $2,000 - $25,000",
                    ],
                },
            ],
        },
        5: {
            id: 5,
            title: "Graphic design specialist",
            time: "2017 - 2018",
            place: "Stepping Stone Advertising, New York, NY",
            info: [
                {
                    id: 1,
                    data: [
                        "Developed numerous marketing programs (logos, brochures,infographics, presentations, and advertisements).",
                        "Managed up to 5 projects or tasks at a given time while under pressure",
                        "Recommended and consulted with clients on the most appropriate graphic design",
                        "Created 4+ design presentations and proposals a month for clients and account managers",
                    ],
                },
            ],
        },
    },
    sections: {
        1: {
            id: 1,
            name: "Contacts",
            itemIds: [1],
        },
        2: {
            id: 2,
            name: "Education",
            itemIds: [2, 3],
        },
        3: {
            id: 3,
            name: "Professional Experience",
            itemIds: [4, 5],
        },
    },
};
