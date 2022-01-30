export default {
    title: 'Chapter 4, Entity Relationship Modeling',
    notes: [],
    terms: [
        {
            meta: 'note',
            note: `The ERD represents the conceptual database as viewed by the end user. Depicts the main components: entities, attributes, and relationships`
        },
        {
            meta: 'list',
            note: `Because of emphasis on design and implementation, the Crow's Foot and UML class diagram notations are used primarily.`,
            list: [
                {
                    meta: 'note', note: 'Chen Notation: favors conceptual modeling'
                },
                {
                    meta: 'note', note: `Crow's Foot Notation favors a more implementation-oriented approach`
                },
                {
                    meta: 'note', note: `UML notation can be used for both conceptual and implementation modeling`
                },
            ]
        },
        {
            meta: 'vocab',
            term: 'Entities',
            definition: `In ERM, this refers to the "entity set", or the entire table, not a row.`,
            notes: [
                {meta: 'note', note: `ERM refers to a table row as an "entity instance"`},
                {meta: 'note', note: `Represented as a Square`},
            ]
        },
        {
            meta: 'vocab',
            term: 'Attributes',
            definition: `Characteristics of entities.`,
            notes: [
                {meta: 'note', note: `Represented as a circle in the Chen Notation.`},
                {meta: 'note', note: `In Crow's Foot Notation, attributes are are writtin within the Square/Entity`, notes:[{meta:'note', note:'A "required attribute" is represented by bold text'}]},
            ]
        },
        {
            meta: 'vocab',
            term: 'Domain',
            definition: `A possible set of values for a gien attribute`
        },
        {
            meta: 'vocab',
            term: 'Identifiers (Primary Keys)',
            definition: `Primary key. In relational models these are mapped to a table. In ERM it is underlined.`,
            notes: [
                {
                    meta: 'img',
                    src: `https://www.linkpicture.com/q/2022-01-08.png`
                }
            ]
        },
    ]
}