import { useNavigate } from 'react-router-dom'

function ChapterButton({ chapter, selectChapter, chapNum }) {
    const navigate = useNavigate()

    return (
        <div className="chapterButton">
            <h1
                onClick={() => navigate(`chap/${chapNum}`)}
            >
                {chapter.title}
            </h1>
        </div>
    )
}

export default ChapterButton