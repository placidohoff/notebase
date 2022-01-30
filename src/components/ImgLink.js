import { useState } from 'react'

export default function ({ img }) {
    const [isOpen, setIsOpen] = useState(false)
    const [isBigOpen, setIsBigOpen] = useState(false)

    const handleShowDialog = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div>
            <p
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    textDecoration: 'underline',
                    color: 'blue'
                }}
            >
                {img.note}
            </p>
            {
                isOpen && !isBigOpen &&
                <div onClick={() => setIsBigOpen(true)}>
                    <img
                        className='image'
                        src={img.src}
                        onClick={() => handleShowDialog()}
                        alt="none"
                    />
                </div>
            }
            {
                isBigOpen && !isOpen &&
                <div onClick={() => {setIsBigOpen(false); setIsOpen(false)}}>
                    <img
                        style={{ width: '700px' }}
                        src={img.src}
                        onClick={() => handleShowDialog()}
                        alt="none"
                    />
                </div>
            }
        </div>
    )
}