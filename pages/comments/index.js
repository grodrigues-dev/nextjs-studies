import { useEffect, useState } from "react"
import Image from "next/image"

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
        <div style={{padding: '10px'}}>
            <div style={{height: '30px'}}>
                <input type='text' value={comment} onChange={(e) => setComment(e.target.value)} style={{height: '100%', borderRadius: '5px'}}></input>
                <button onClick={submitComment} style={{height: '100%', marginLeft: '10px', border: 'none', background: '#292529', borderRadius: '5px', color: '#FFF'}}>Send Comment</button>
            </div>
            {
                comments.map(comment => {
                    return (
                        <div key={comment.id} style={{display: "flex"}}>
                            <p>{comment.id} {comment.text}</p>
                            <div onClick={()=> deleteComent(comment.id)} style={{display: 'flex', alignItems: 'center', marginLeft: '5px',cursor: 'pointer'}}>
                                <Image src="/trash.svg" width="20" height="20" />
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CommentsPage

