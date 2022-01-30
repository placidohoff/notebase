import { useState } from 'react'
import { Lightbox } from 'react-modal-image'
import ImgLink from '../ImgLink'
import './NoteBlock.css'

function NoteBlock({ note }) {
    const [showMore, setShowMore] = useState(false)

    const SubNote = ({ subnote }) => {
        return (
            <div style={{ marginLeft: '20px', marginTop: '15px' }}>
                {
                    subnote.meta === 'note' &&
                    <p>{subnote.note}</p>
                }
                {
                    subnote.meta === 'vocab' &&
                    <div>
                        <span>{subnote.term}: </span><span>{subnote.definition}</span>
                    </div>
                }
                {
                    subnote.meta === 'list' &&
                    <div>
                        {subnote.note}
                        <p>
                            {
                                subnote.list.map(listItem => (
                                    <SubNoteList
                                        key={Math.random()}
                                        listItem={listItem}
                                    />
                                ))
                            }
                        </p>
                    </div>

                }
                {
                    subnote.meta === 'img' &&
                    <div>
                        {/* <img className='img-fluid' src={subnote.src} /> */}
                        <ImgLink
                            img={subnote}
                        />
                    </div>
                }
                {
                    subnote.examples &&
                    subnote.examples.map(example => (
                        <ShowExample
                            key={Math.random()}
                            example={example}
                        />
                    ))
                }
                {
                    subnote.notes &&
                    subnote.notes.map(sub => (
                        <ListItem
                            key={Math.random()}
                            item={sub}
                        />
                    ))
                }

            </div>
        )
    }

    const SubNoteList = ({ listItem }) => {
        return (
            <div style={{ marginLeft: '30px', marginTop: '15px' }}>
                {
                    listItem.meta === 'note' &&
                    <p>{listItem.note}</p>
                }
                {
                    listItem.meta === 'vocab' &&
                    <div>
                        <p>{listItem.term}: {listItem.definition}</p>
                        {
                            listItem.notes &&
                            listItem.notes.map(item => (

                                <SubNote
                                    key={Math.random()}
                                    subnote={item}
                                />

                            ))
                        }
                    </div>
                }
                {
                    listItem.meta === 'list' &&
                    <div>
                        <p>{listItem.note}</p>
                        {
                            listItem.list.map(item => (
                                <p>{item.term}</p>
                            ))
                        }
                    </div>

                }
                {
                    listItem.examples &&
                    listItem.examples.map(example => (
                        <ShowExample
                            key={Math.random()}
                            example={example}
                        />
                    ))
                }

            </div>
        )
    }

    const ShowExample = ({ example }) => {
        return (
            <div>
                {
                    example.meta === 'note' &&
                    <div style={{ marginLeft: '30px' }}>
                        <span>{`ie: `}</span><span>{example.note}</span>
                    </div>
                }

            </div>
        )
    }

    const ListItem = ({ item }) => {
        return (
            <div style={{ marginBottom: '10px', marginLeft: '30px' }}>
                {
                    item.meta === 'note' &&
                    <p>{item.note}</p>
                }
                {
                    item.meta === 'vocab' &&
                    <div>
                        <span>{item.term}: </span>
                        <span>{item.definition}</span>
                    </div>
                }
                {
                    item.examples &&
                    item.examples.map(example => (
                        <div style={{ marginLeft: '15px' }}>
                            <ShowExample
                                key={Math.random()}
                                example={example}
                            />
                        </div>
                    ))
                }
                {
                    item.notes &&
                    item.notes.map(note => (
                        <div style={{ marginLeft: '15px' }}>
                            <SubNoteList
                                key={Math.random()}
                                listItem={note}
                            />
                        </div>
                    ))
                }
            </div>
        )
    }


    return (
        <div className="noteBlock"
            style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}
        >
            <div className='noteBlock__container'>
                <div className="noteBlock__main">
                    {
                        note.meta === 'vocab' &&
                        <p>{note.term}</p>
                    }
                    {
                        note.meta === 'list' &&
                        <div>
                            <p>{note.note}</p>

                        </div>
                    }
                    {
                        note.meta === 'note' &&
                        <p>{note.note}</p>
                    }
                </div>

                {
                    showMore &&
                    <div className="noteBlock__more">
                        <p>{note.definition}</p>
                    </div>
                }

                {
                    note.notes && showMore &&
                    note.notes.map(subnote => (
                        <SubNote
                            key={Math.random()}
                            subnote={subnote}
                        />
                    ))
                }
                <div>
                    {note.list && showMore &&
                        note.list.map(item => (
                            <ListItem
                                key={Math.random()}
                                item={item}
                            />
                        ))
                    }
                </div>
                {
                    note.examples && showMore &&
                    note.examples.map(example => (
                        <ShowExample
                            key={Math.random()}
                            example={example}
                        />
                    ))
                }
            </div>
            <div className='noteBlock__buttons'>
                <div onClick={() => setShowMore(!showMore)}>
                    {
                        showMore
                            ? <p>-</p>
                            : <p>+</p>
                    }
                </div>
            </div>
        </div>
    )
}


export default NoteBlock