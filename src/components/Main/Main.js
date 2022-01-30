import { useState, useEffect } from 'react'
import chapter1 from '../../data/chapter1'
import chapter2 from '../../data/chapter2'
import ChapterButton from './ChapterButton'
import ChapterPage from '../ChapterPage/ChapterPage'
import { Link, Route, Routes, useNavigate, useParams, Outlet, Navigate } from 'react-router-dom'
import chapter3 from '../../data/chapter3'
import chapter4 from '../../data/chapter4'


function Main() {
    const navigate = useNavigate()
    const [loadedChapter, setLoadedChapter] = useState(null)
    const chapters = [chapter1, chapter2,chapter3, chapter4]

    const selectChapter = (chapter) => {
        setLoadedChapter(chapter)
    }

    const ShowChapterButtons = () => {
        return (
            <div>
                {
                    chapters.map((chapter, index) => (
                        <ChapterButton
                            key={Math.random()}
                            chapter={chapter}
                            chapNum={index + 1}
                            selectChapter={selectChapter}

                        />
                    ))
                }
                <Link to="/test">Test </Link>
            </div>
        )
    }

    const ShowMain = () => {
        return (
            <div className="container">
                <div />
                <div className="main">
                    <ShowChapterButtons />

                </div>
                <div />
            </div>
        )
    }

    const ShowChapter = () => {
        return (
            <div>
                <Outlet />
            </div>
        )
    }

    const ShowChapterPage = () => {
        const { id } = useParams()
              
        return (
            <div>
                {
                    Number(id) - 1 < chapters.length ?
                    <ChapterPage
                        chapter={chapters[id - 1]}
                    />
                    :
                    <Navigate to='/' />
                }
            </div>

        )
    }

    return (
        <Routes>
            <Route path="/" element={<ShowMain />} />
            <Route path="/chap" element={<ShowChapter />}>
                <Route path=":id" element={<ShowChapterPage />} />
            </Route>
            <Route path="" element={<ShowMain />} />
        </Routes>
    )
}

export default Main