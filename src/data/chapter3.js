export default {
    title: 'Chapter 3, Relational Databases',
    notes: [],
    terms: [
        {
            meta: 'vocab',
            term: 'Logical View of Data',
            definition: 'Allows designer to focus on the represention of the data and its relationships rather than the physical storage details',
            examples: []
        },
        {
            meta: 'vocab',
            term: 'Table/Relation/Entity Set',
            definition: 'Percieved as a two dimensional structure of rows + columns of related entities',
            examples: []
        },
        {
            meta: 'list',
            note: 'Characteristics of a Relational Table include',
            notes: [
                {
                    meta: 'note',
                    note: 'A table is percieved as a two-dimensional structure composed of rows and columns'
                },
                {
                    meta: 'note',
                    note: 'Each table row ("tuple") represents a single entity occurance within an entity set'
                },
                {
                    meta: 'note',
                    note: 'Each table column represents an attribute and each column has a distinct name'
                },
                {
                    meta: 'note',
                    note: 'Each intersection of a row and column represents a single data value'
                },
                {
                    meta: 'note',
                    note: 'All values in a column must conform to the same data format'
                },
                {
                    meta: 'note',
                    note: 'Each column has a specific range of values known as the "Attribute Domain"'
                },
                {
                    meta: 'note',
                    note: 'Each table must have an attribute or combination of attributes that uniquely identifies each row'
                },

            ]
        },
        {
            meta: 'vocab',
            term: 'Keys',
            definition: 'These ensure that each row in a table is uniquely identifiable. Also used to establish relationships among tables and ensure the integrity of the data'
        },
        {
            meta: 'vocab',
            term: 'Determination',
            definition: 'When knowing a value of one attribute makes it possible to determine the value of another'
        },
        {
            meta: 'vocab',
            term: 'Functional Dependence',
            definition: 'A relationship where the value of one or more attributes determines the value of one or more other attributes.',
            examples: [
                {
                    meta: 'note',
                    note: 'The standard notation is as follows: STU_NUM -> STU_LNAME'
                },
                {
                    meta: 'note',
                    note: 'In the above example, the attribute whose value determines another is called the "determinant", (STU_NUM). The attribute whose value is determined is called the "dependent"(STU_LNAME)'
                },
                {
                    meta: 'vocab',
                    term: 'Full Functional Dependence',
                    definition: 'Used to refer to functional dependencies where the entire collection of attributes in the determinant is necessary to describe the relationship'
                },

            ]
        },
        {
            meta: 'list',
            note: 'Types of Keys: keys are determinants in functional dependencies. There are several different types of keys used in the relational model.',
            list: [
                {
                    meta: 'vocab',
                    term: 'Composite Key',
                    definition: 'Key that is composed of more tjan one attribute',
                    examples: [
                        { meta: 'note', note: `(STU_LNAME, STU_FNAME, STU_INIT, STU_PHONE) -> STU_HRS` }
                    ]
                },
                {
                    meta: 'vocab',
                    term: 'Super Key',
                    definition: 'A key that can uniquely identify any row in the table. (Functionally determines every attribute in the row"',
                    examples: [
                        { meta: 'note', note: `In the STUDENT table, STU_NUM is a superkey, as are the composite keys (STU_NUM, STU_LNAME)` }
                    ]
                },
                {
                    meta: 'vocab',
                    term: 'Candidate Key',
                    definition: 'A minimal superkey; a superkey without any unnecessary attributes.',
                    examples: [

                    ]
                },
                {
                    meta: 'vocab',
                    term: 'Foreign Key',
                    definition: 'A primary key of one table that has been placed into another table to create a common attribute',
                    note: 'Foreign keys are used to ensure "Referential Integrity", that is the condition in which every reference to an entity instance by another entity instance is valid.',
                    examples: [

                    ]
                },
                {
                    meta: 'vocab',
                    term: 'Secondary Key',
                    definition: 'A key that is used strictly for data retrieval puroses',
                    note: 'A poor secondar key combination may not necessarily yield a unique result. Could possibly result in many records.',
                    examples: [
                        { meta: 'note', note: 'Customers most likely will not remember their primary key numbers. One way our system can allow them to access their information is through a secondaty key which can be a composite key of (LNAME + PHONENUM) for example.' }
                    ]
                },
            ]
        },
        {
            meta: 'vocab',
            term: 'Entity Integrity',
            definition: 'When each row/instance in a table has a unique identity',
            note: 'To ensure integrity: All values in the primary key must be unique, and no primary key can contain null'
        },
        {
            meta: 'vocab',
            term: 'Null',
            definition: 'The absence of any data value',
            notes: [
                {
                    meta: 'note',
                    note: 'Nulls should be avoided as much as possible. Abundance of nulls can indicate poor design. Can possibly cause errors with processing values, and is not always clear what a null can mean: can mean not applicable, unknown, or missing...etc'
                },
                {
                    meta: 'vocab',
                    term: 'Flag',
                    definition: 'A flag value is used by designers to indicate an empty value for an attribute instead of leaving it as NULL',
                    examples: [
                        {
                            meta: 'note',
                            note: 'A dummy variable/instance in our AGENTS table with a code of "-99" that when used indicate that a CUSTOMER does not have an agent. Flags like these are used to indicate a non-value rather than null'
                        }
                    ]
                }
            ]
        },
        {
            meta: 'list',
            note: 'Integrity rules are very important to good database design. (RDBMS)s enforce integrity rules automatically but it is safe to make sure applications conform to the entity and referential integrity rules',
            list: [
                {
                    meta: 'vocab',
                    term: 'Entity Integrity',
                    definition: 'Each row has a unique identity'
                },
                {
                    meta: 'vocab',
                    term: 'Referential Integrity',
                    definition: 'All references/foreign keys must be unique and existing,'
                },
            ]
        },
        {
            meta: 'vocab',
            term: 'Relational Algebra',
            definition: 'The theoretical way of manipulating table contents using relational operators',
            examples: [
                { meta: 'note', note: 'SQL is used to accomplish relational algebra operations' }
            ]
        },
        {
            meta: 'list',
            note: 'Relational Set Operators: It is important to remeber that a Relational Database is held in a computer Mathematically. Although we use abstraction to interact with the data, all we do can be translated back into mathematical operators',
            list: [
                {
                    meta: 'vocab',
                    term: 'SELECT/RESTRICT',
                    definition: 'Yields values for all rows found in a single table that satisfies a given condition. Referred to as a "unary operator" since it only uses one table as input.',
                    examples: [
                        {
                            meta: 'note', note: 'SELECT only PRICE less than $2.00 will return all records that match as a viewable table'
                        }
                    ]
                },
                {
                    meta: 'vocab',
                    term: 'PROJECT',
                    definition: 'Yelds all values for selected attributes. Will return only the attributes requested in the order in which they are requested',
                    examples: [
                        {
                            meta: 'note', note: 'PROJECT PRICE will return the entire PRICE column of target table'
                        },
                        {
                            meta: 'note', note: 'PROJECT PRICE and P_DESCRIPT will return the entire the two specified columns together as a viewable table'
                        }
                    ]
                },
                {
                    meta: 'vocab',
                    term: 'UNION',
                    definition: 'Combines all rows from two tables, excluding duplicate rows.',
                    notes: [{ meta: 'note', note: 'Both tables must be "Union Compatible", meaning same Column Headers' }],
                    examples: []
                },
                {
                    meta: 'vocab',
                    term: 'INTERSECT',
                    definition: 'Yields only the rows that appear in both tables.',
                    notes: [{ meta: 'note', note: 'Both tables must be "Union Compatible", meaning same Column Headers' }],
                    examples: []
                },
                {
                    meta: 'vocab',
                    term: 'DIFFERENCE',
                    definition: 'Yields all rows in one table that are not found in the other table. (Subtracts one table from another)',
                    notes: [
                        {
                            meta: 'note',
                            note: 'Both tables must be "Union Compatible", meaning same Column Headers'
                        },
                        {
                            meta: 'note',
                            note: 'Note that subtracting the first table from the second yields different results as the second from the first'
                        },
                    ],
                    examples: []
                },
                {
                    meta: 'vocab',
                    term: 'PRODUCT',
                    definition: 'Yields all possible oaurs if rows from two tables..aka the "Cartesian Product"',
                    note: [{ meta: 'note', note: 'Tables are not Union Compatible' }],
                    examples: [{ meta: 'note', note: 'If one table has 6 rows, and the other has 3 rows, PRODUCT yields a table with 18 rows.' }]
                },
                {
                    meta: 'vocab',
                    term: 'JOIN',
                    definition: 'Allows independent tables linked by common/shared attributes (foreign keys) to be combined into one table for us to view.',
                    notes: [
                        {
                            meta: 'list',
                            note: 'Natural Join links tables by selecting only the rows with common values in their common attributes. Natural Join is the result of a three-stage process',
                            list: [
                                {
                                    meta: 'note',
                                    note: '1.) A PRODUCT of the tables is created'
                                },
                                {
                                    meta: 'note',
                                    note: '2.) A SELECT is performed on the output of step 1. We SELECT to yield only the rows for which the foreign keys in one equals the primary key in another. The common columns are referred ti as the "Join Columns"'
                                },
                                {
                                    meta: 'note',
                                    note: '3.) A PROJECT is performed on the output of step 2, yielding a single copy of each attribute eliminating the duplicate columns.'
                                },
                                {
                                    meta: 'list',
                                    note: 'A few cucial features of the natural join operation:',
                                    list: [
                                        {

                                        }
                                    ]
                                },
                            ]
                        },
                        {
                            meta: 'vocab',
                            term: 'Equijoin',
                            definition: 'Another form of join, links tables ib the basis of an equality condition that compares specified columns of each table'
                        },
                        {
                            meta: 'vocab',
                            term: 'Inner Join',
                            definition: 'Only returns matched records from the tables that are joined',
                            notes: [{ meta: 'note', note: 'Each of the preceding joins is classified as an inner join' }]
                        },
                        {
                            meta: 'vocab',
                            term: 'Outer Join',
                            definition: 'Returns matched pairs, and also any unmatched values are given null. Returns same matched records as inner join plus unmatched records as null',
                            notes: [
                                {
                                    meta: 'vocab',
                                    term: 'Left Outer Join',
                                    definition: 'Yields all the values Table-A including those that do not have a matching value in Table-B'
                                },
                                {
                                    meta: 'vocab',
                                    term: 'Right Outer Join',
                                    definition: 'Yields all the values Table-B including those that do not have a matching value in Table-A',
                                    notes: [{ meta: 'note', note: 'Outer joins are especially useful when we are trying to determine what values in related tables cause referential integrity problems' }]
                                },
                            ]
                        },

                    ],
                    examples: []
                },
                {
                    meta: 'vocab',
                    term: 'DIVIDE',
                    definition: 'NEEDS CLARITY'
                }
            ]
        },
        {
            meta: 'vocab',
            term: 'Data Dictionary',
            definition: 'Provides a detailed description of all tables in the database either by users or designers.Contains metadata about the data.',
            notes:[
                {
                    meta: 'note',
                    note: 'Used to ensure all members of database design use the correct data types etc.'
                },
                {
                    meta: 'note',
                    note: `Sometimes called the "Database Designer's Database`
                },
            ]
        },
        {
            meta: 'vocab',
            term: 'System Catalog',
            definition: `Detailed system data dictionary that describes all objects within the database including data about table names, table's creator and creation date, number of columns in each table, data types, index filenames, index creators, authorized users, and access priveledges.`
        },
        {
            meta: 'list',
            note: 'Relationships within the Relational Databases are: 1:M, 1:1, and M:N'
            
        },
        {
            meta: 'vocab',
            term: 'Indexes',
            definition: 'An orderly arrangement used to logically access rows in a table. Used to locate needed items quickly. Composed of an index key and a set of pointers',
            notes:[
                {
                    meta: 'vocab',
                    term: 'Index Key',
                    definition: 'Points to the location of the data in memory',
                    examples: [
                        {
                            meta: 'note',
                            note: 'We want to look up all paintings created by given painter. Without an index, we must read each row in PAINTING  and see if the PAINTER_NUM matches the request. But if we index the PAINTER Table an use the index key PAINTER_NUM, we will be told which rows are the data we are looking for,'
                        }
                    ]
                }
            ]
        }

    ]

}