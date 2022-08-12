import { useEffect, useState } from "react"

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

    const deleteComent = async (id) => {
        const response = await fetch(`api/comments/${id}`, {
            method: 'DELETE'
        })
        const data = response.json()
        console.log(data);
        loadComments()
    } 

    useEffect(()=> {
        loadComments()
    }, [])
    
    return (
        <>
            <input type='text' value={comment} onChange={(e) => setComment(e.target.value)}></input>
            <button onClick={submitComment}>Send Comment</button>
            {
                comments.map(comment => {
                    return (
                        <div key={comment.id} style={{display: "flex"}}>
                            <p>{comment.id} {comment.text}</p>
                            <button onClick={()=> deleteComent(comment.id)}>delete</button>
                        </div>
                    )
                })
            }
        </>
    )
}

export default CommentsPage

