import NoteBlock from "./NoteBlock"

function ChapterPage({ chapter }) {
    return (
        <div className="container">
            <div />
            <div className="chapterPage">
                <h1>{chapter.title}</h1>
                {
                    chapter.terms.map(term => (
                        <NoteBlock
                            key={Math.random()}
                            note={term}
                        />
                    ))
                }
            </div>
            <div />
        </div>
    )
}

export default ChapterPage