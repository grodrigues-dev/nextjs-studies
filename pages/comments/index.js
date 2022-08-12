import { useState } from "react"

function CommentsPage() {
    
    const [comments, setComments] = useState([])
    const [comment, setComment] = useState('')

    const loadComments = async () => {
        const res = await fetch('/api/comments')
        const data = await res.json()
        setComments(data)
    }

    const submitComment = async () => {
        const res = await fetch('api/comments', {
            method: 'POST',
            body: JSON.stringify({ comment }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await res.json()
        setComments([
            ...comments,
            data
        ])
        
    }
    
    return (
        <>
            <input type='text' value={comment} onChange={(e) => setComment(e.target.value)}></input>
            <button onClick={submitComment}>Send Comment</button>
            <button onClick={loadComments}>Load Comments</button>
            {
                comments.map(comment => {
                    return (
                        <div key={comment.id}>
                            <p>{comment.id} {comment.text}</p>
                        </div>
                    )
                })
            }
        </>
    )
}

export default CommentsPage

