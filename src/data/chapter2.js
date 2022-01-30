export default {
    title: 'Chapter 2: Data Models',
    notes: [
        `A major problem in database design is that designers, programmers, and end users may see/utilize the data in different ways. Communication between all parties using the data must be clear.`,
        `Data modeling clarifies communication needed to design a database by reducing complexities of database design to more easily understood abstractions that define entities, relations, and data transformations.`,
        `Data modeling is an iterative, progressive process. We start with a simple understanding of the problem domain and as the understanding increases, so does the level of detail of the data model`,
        {
            meta: 'listNote',
            note: `An implementation-ready data model should contain at least the following components:`,
            list: [
                `A description of the data structure that will store the end-user data`,
                `A set of enforceable rules to guarantee the integrity of the data`,
                `data manipulation methodology to support the real-world data transformations`
            ]
        },
        `When a good database blueprint is available, it does not matter that, for instance, an applications programmer's view of the company's data is different from that of the manager or the end user.`,
        {
            meta: 'listNote',
            note: `The building blocks of all data models are: entities, attributes, relationships, and constraints`,
            list: [
                {
                    term: 'Entity',
                    definition: 'A person, place, thing, or event about which data will be collected or stored.',
                    examples: []
                },
                {
                    term: 'Attribute',
                    definition: `A characteristic of an entity.`,
                    examples: []
                },
                {
                    term: 'Relationship',
                    definition: 'Describes an association amongst entities',
                    examples: [
                        `The relationship that exist between customers and agents is that an agent can serve many customers, and each customer may be served by only one agent`,
                        {
                            term: 'One-to-many (1:M or 1..*) relationship',
                            definition: ``,
                            examples: [
                                `A painter creates many paintings`,
                                `"CUSTOMER generates INVOICE" labelled as 1:M`
                            ]
                        },
                        {
                            term: 'Many-to-many (M:N or *..*) relationship',
                            definition: ``,
                            examples: [
                                `An employee may learn many job skills, and each job skill may be learned by many employees.`,
                                `"STUDENT takes CLASS" is labelled M:N`
                            ]
                        },
                        {
                            term: 'One-to-one (1:1 or 1..1) relationship',
                            definition: ``,
                            examples: [
                                `Management may require each of its stores to be managed by a single employee. In turn, each store manager, who is an employee, manages only a single store.`,
                                `"EMPLOYEE manages STORE" is labelled 1:1`
                            ]
                        },
                    ]
                },
                {
                    term: 'Constraint',
                    definition: `A restriction placed on the data. This helps to ensure data integrity. Normally expressed in a form of rules`,
                    examples: [
                        `An employee's salary must have values between 6,000 and 350,000`,
                        `Each class must have one and only one teacher`
                    ]
                },

            ]
        },
        `Business Rules are needed to define proper entities, attributes, relionships, and constraints of data. Obtain business rules from company managers, policy makers, operation manuals, etc `,
        {
            meta: 'list',
            note: `There have been several models that attempt to resolve the previous model's critical shortcomings and provide solutions to the ever-evloving data management needs.`,
            list: [
                {
                    term: 'Hierarchical Model',
                    definition: `Model developed in 1960s, for complex manufacturing projects. Composed of "segnments" which are the equivalent of a file system's record entry. In this model, a higher layer is considered the 'parent' of the segment directly beneath it which is called the 'child'. The relationship of Parent to Child is 1:M. `,
                    examples: [

                    ]
                },
                {
                    term: 'Network Model',
                    definition: `Model developed to represent complex data relationships better than the Heirarchical Model did. This database is a collection of records but unlike the Heirarchical Model, a record in this model can have more than one parent. Although this is not in use today, many terms we still use today came from this model.`,
                    notes: [
                        ` `
                    ],
                    examples: [
                        `Terms from this model that are still used today include: Schema, Subschema, `
                    ]
                },
                {
                    term: 'Relational Model',
                    definition: `A revolutionary model of data presented to the user as tables which are related to one another through the sharing of a common attribute `,
                    notes: [
                        `The relational model's sharing of a common attribute provides a minimum level of controlled redundancy to eliminate most of the redundancies commonly found in file systems`,
                        `Relational database tables resembles file system tables but the major difference is that a relational table has complete data and data structural independence. How the data is physically stored is of no concern to the user. All that matters is the presentation and ability to query`
                    ],
                    examples: [

                    ]
                },
                {
                    term: 'Entity Relationship Model',
                    definition: `A graphical model in which entities and their relationships are pictured. Compliments the Relational Database Well. `,
                    notes: [
                        `ER Models are respresented with "entity relationship diagrams"(ERD) which are graphical representations of database components and entities`,
                        {
                            meta: 'list',
                            note: `An ER model is based on the following components:`,
                            list: [
                                `Entity: Is represented in ERD as a rectangle, or "entity box".`,
                                `Entity Instance/Enitity Occurence: A row in a relational table.`,
                                `Entity Set: A collection of like entities`
                            ]
                        }

                    ],
                    examples: [

                    ]
                },
                {
                    term: 'The Object Oriented Model',
                    definition: `A data model where data and it's relationships are stored within an "object" `,
                    notes: [
                        `An OODM is said to be a semantic data model; semantic indicates meaning. This is because the information in the object is very descriptive and meaningful.`,
                        `Some have self contained operations/functions that can be perfomed on it`,
                        ``


                    ],
                    examples: [

                    ]
                },
                {
                    term: 'The Object/Relational Model',
                    definition: `Similar to relational database but object oriented`,
                    notes: [
                        `Demand to support more complex data representations led to the creation of the "extended Relational Data Model (ERDM).`,
                        `ERDM gave birth to a new generation of relational databases supporting OO features such as objects, extensible data types, classes, and inheritance`,
                        ``


                    ],
                    examples: [

                    ]
                },
            ]
        },
        `With web and sensor technologies advancing, the amounts of data collected comes in rapid and in so many different formats. Companies must manage this data on a budget. Thus, the emergence of "Big Data", which refers to the movement to manage vasts amounts of data and gain business insifht from it as well as high-performance scalablity at a reasonable cost.`,
        {
            meta: 'list',
            note: `The basic characteristics of Big Data are: "Volume", "Velocity", and "Variety"`,
            list: [

            ]
        }


    ],
    terms: [
        {
            meta: 'vocab',
            term: 'Data Modeling',
            definition: 'The process of creating a specific data model for a determined problem domain'
        },
        {
            meta: 'vocab',
            term: 'Problem Domain',
            definition: 'A clearly defined area within the real world environment, with well-defined scope and boundries that will be systematically addressed.',
            examples: []
        },
        {
            meta: 'vocab',
            term: 'Data Model',
            definition: 'A relatively simple representation of a more complex real-world data structure; an abstraction of a more complex real-world object or event',
            examples: []
        },
        {
            meta: 'vocab',
            term: 'Entity',
            definition: 'A person, place, thing, or event about which data will be collected or stored.',
            examples: []
        },
        {
            meta: 'vocab',
            term: 'Attribute',
            definition: `A characteristic of an entity.`,
            examples: []
        },
        {
            term: 'Relationship',
            definition: 'Describes an association amongst entities',
            examples: [
                `The relationship that exist between customers and agents is that an agent can serve many customers, and each customer may be served by only one agent`,
                {
                    meta: 'vocab',
                    term: 'One-to-many (1:M or 1..*) relationship',
                    definition: ``,
                    examples: [
                        { meta: 'note', note: `A painter creates many paintings` },
                        { meta: 'note', note: `"CUSTOMER generates INVOICE" labelled as 1:M` }
                    ]
                },
                {
                    meta: 'vocab',
                    term: 'Many-to-many (M:N or *..*) relationship',
                    definition: ``,
                    examples: [
                        { meta: 'note', note: `An employee may learn many job skills, and each job skill may be learned by many employees.` },
                        { meta: 'note', note: `"STUDENT takes CLASS" is labelled M:N` }
                    ]
                },
                {
                    meta: 'vocab',
                    term: 'One-to-one (1:1 or 1..1) relationship',
                    definition: ``,
                    examples: [
                        { meta: 'note', note: `Management may require each of its stores to be managed by a single employee. In turn, each store manager, who is an employee, manages only a single store.` },
                        { meta: 'note', note: `"EMPLOYEE manages STORE" is labelled 1:1` }
                    ]
                },
            ]
        },
        {
            meta: 'vocab',
            term: 'Constraint',
            definition: `A restriction placed on the data. This helps to ensure data integrity. Normally expressed in a form of rules`,
            examples: [
                { meta: 'note', note: `An employee's salary must have values between 6,000 and 350,000` },
                { meta: 'note', note: `Each class must have one and only one teacher` }
            ]
        },
        {
            meta: 'vocab',
            term: 'Business Rule',
            definition: `A brief, precise description of a policy, precedure, or principle within a specific organization, not neccessarily a business. Used so that a database can define relationships, entities, attributes, and constraints`,
            examples: [
                { meta: 'note', note: `A training session cannot be scheduled for fewer than 10 employees or for more than 30 employees` },
            ]
        },
        {
            meta: 'vocab',
            term: 'Hierarchical Model',
            definition: `Model developed in 1960s, for complex manufacturing projects. Composed of "segnments" which are the equivalent of a file system's record entry. In this model, a higher layer is considered the 'parent' of the segment directly beneath it which is called the 'child'. The relationship of Parent to Child is 1:M. `,
            examples: []
        },
        {
            meta: 'vocab',
            term: 'Network Model',
            definition: `Model developed to represent complex data relationships better than the Heirarchical Model did. This database is a collection of records but unlike the Heirarchical Model, a record in this model can have more than one parent. Although this is not in use today, many terms we still use today came from this model.`,
            notes: [],
            examples: [
                { meta: 'note', note: `Terms from this model that are still used today include: Schema, Subschema, ` }
            ]
        },
        {
            meta: 'vocab',
            term: 'Relational Model',
            definition: `A revolutionary model of data presented to the user as tables which are related to one another through the sharing of a common attribute `,
            notes: [
                { meta: 'note', note: `The relational model's sharing of a common attribute provides a minimum level of controlled redundancy to eliminate most of the redundancies commonly found in file systems` },
                { meta: 'note', note: `Relational database tables resembles file system tables but the major difference is that a relational table has complete data and data structural independence. How the data is physically stored is of no concern to the user. All that matters is the presentation and ability to query` }
            ],
            examples: [

            ]
        },
        {
            meta: 'vocab',
            term: 'Entity Relationship Model',
            definition: `A graphical model in which entities and their relationships are pictured. Compliments the Relational Database Well. `,
            notes: [
                `ER Models are respresented with "entity relationship diagrams"(ERD) which are graphical representations of database components and entities`,
                {
                    meta: 'list',
                    note: `An ER model is based on the following components:`,
                    list: [
                        { meta: 'note', note: `Entity: Is represented in ERD as a rectangle, or "entity box".` },
                        { meta: 'note', note: `Entity Instance/Enitity Occurence: A row in a relational table.` },
                        { meta: 'note', note: `Entity Set: A collection of like entities` }
                    ]
                }

            ],
            examples: [

            ]
        },
        {
            meta: 'vocab',
            term: 'The Object Oriented Model',
            definition: `A data model where data and it's relationships are stored within an "object" `,
            notes: [
                { meta: 'note', note: `An OODM is said to be a semantic data model; semantic indicates meaning. This is because the information in the object is very descriptive and meaningful.` },
                { meta: 'note', note: `Some have self contained operations/functions that can be perfomed on it` },



            ],
            examples: [

            ]
        },
        {
            meta: 'vocab',
            term: 'The Object/Relational Model',
            definition: `Similar to relational database but object oriented`,
            notes: [
                { meta: 'note', note: `Demand to support more complex data representations led to the creation of the "extended Relational Data Model (ERDM).` },
                { meta: 'note', note: `ERDM gave birth to a new generation of relational databases supporting OO features such as objects, extensible data types, classes, and inheritance` },



            ],
            examples: [

            ]
        },
        {
            meta: 'vocab',
            term: 'Big Data',
            definition: `Refers to the movement of finding new and better ways to manage large amounts of web and sensor generated data and deriving business insight from it while providing high performance, scalability, and reasonable cost`,
            notes: [
                {
                    meta: 'list',
                    note: `The characteristics of Big Data are known as the "3 Vs": volume, velocity, and variety.`,
                    list: [
                        {
                            meta: 'vocab',
                            term: 'Volume',
                            definition: `Refers to the amounts of data being stored`,
                            notes: [
                                {
                                    meta: 'note', note: `With so many ways business' can interact with customers, mountains of data are generated`
                                }
                            ],
                            examples: []

                        },
                        {
                            meta: 'vocab',
                            term: 'Velocity',
                            definition: `Refers to the speed at which data accumulates and also the need to process this data quickly to gain information or insight`,
                            notes: [
                                { meta: 'note', note: `With so many ways business' can interact with customers, mountains of data are generated` }
                            ],
                            examples: []

                        },
                        {
                            meta: 'vocab',
                            term: 'Variety',
                            definition: `Refers to the fact that data being collected comes in various data formats`,
                            notes: [
                                { meta: 'note', note: `Some data is in a format that is not suitable to be handled by the typical relational model operational databases` }
                            ],
                            examples: []

                        },
                    ]
                },
                { meta: 'note', note: `It is not always possible to fit unstructured social media and/or sensor generated data into conventional relational structure of rows and columns.` },
                { meta: 'note', note: `Big data problems come with a hefty price tag and there is no "one-size-fits-all" cure.Most problems are unique to the company` },
                {
                    meta: 'list',
                    note: `Amazon is a leader in making use of Big Data Stores`,
                    list: [
                        { meta: 'note', note: `Predictive Shipping: With data collected on purchase patterns, Amazon can ship products to customers before they even realize its needed?!` },
                        { meta: 'note', note: `Alexa is constantly listening, gathering peta bytes of data` }
                    ]
                },
                {
                    meta: 'list',
                    note: `To create value from their previously unused Big Data stores, companies are making use of new Big Data technologies such as "Hadoop", "Hadoop Distributed File System (HDFS), "Map Reduce", and "NoSQL".`,
                    list: [
                        {
                            meta: 'vocab',
                            term: 'Hadoop',
                            definition: `a Java-based open-source highspeed, fault-tolerant distributed storage and computational framework. Creates clusters of thousands of computer nodes to store and process data`,
                            notes: [
                                {
                                    meta: 'list',
                                    note: 'Hadoop has many modules but the two main components are "Hadoop Distributed File System" (HDFS) and "MapReduce"',
                                    list: [
                                        {
                                            meta: 'vocab',
                                            term: 'Hadoop Distributed File System',
                                            definition: `Highly distributed, fault-tolerant file storage system designed to manage large amounts of data at high speeds`,
                                            notes: [
                                                {meta:'note', note:`Uses "Write Once, Read Many Model", meaning once data is written it cannot be modified.`},
                                                {
                                                    meta: 'list',
                                                    note: `HDFS uses three types of nodes: "name node", "data node", and "client node"`,
                                                    list: [
                                                        {
                                                            meta: 'vocab',
                                                            term: 'Name Node',
                                                            definition: `Stores all the metadata in a HDFS`,
                                                            notes: [],
                                                            examples: []
                                                        },
                                                        {
                                                            meta: 'vocab',
                                                            term: 'Data Node',
                                                            definition: `Stores fixed-size data blocks (that can be replicated to other data nodes) in a HDFS`,
                                                            notes: [],
                                                            examples: []
                                                        },
                                                        {
                                                            meta: 'vocab',
                                                            term: 'Client Node',
                                                            definition: `The interface between the user and the HDFS`,
                                                            notes: [],
                                                            examples: []
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            meta: 'vocab',
                                            term: 'MapReduce',
                                            definition: `Open source API of HDFS that provides fast data analytics services. Works with structured and unstructured data`,
                                            notes: [
                                                { meta: 'note', note: `Distributes the processing of data among thousands of nodes in parallel.` },
                                                {
                                                    meta: 'list',
                                                    note: `Provides two main functions: "Map" and "Reduce`,
                                                    list: [
                                                        {
                                                            meta: 'vocab',
                                                            term: 'Map',
                                                            definition: `Takes a job and divides it into smaller units of work`

                                                        },
                                                        {
                                                            meta: 'vocab',
                                                            term: 'Reduce',
                                                            definition: `Collects all the output results generated from the multiple nodes and integrates them into a single result set.`

                                                        },
                                                    ]
                                                },
                                                {
                                                    meta: 'note',
                                                    note: `Although is viewed as limited today, it defined the paradigm for how Big Data is processed.`
                                                }
                                            ],
                                            examples: []
                                        }
                                    ]
                                }
                            ],
                            examples: []
                        },
                        {
                            meta: 'vocab',
                            term: 'NoSQL',
                            definition: `Large scale distributed database system that stores structured and unstructured data in efficient ways`,
                            notes: [
                                `Unlike the relational model, the NoSQL model is a broad umbrella for a variety of approaches to data storage and manipulation including: "key-value stores", "document databases", "columnar databases", and "graph databases"`
                            ],
                            examples: []
                        },
                    ]

                }


            ],
            examples: [

            ]
        },


    ]

}