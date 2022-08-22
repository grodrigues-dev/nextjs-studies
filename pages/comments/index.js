import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link";

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
        loadComments()
    } 

    useEffect(()=> {
        loadComments()
    }, [])
    
    return (
        <div style={{padding: '10px'}}>
            <h2>List of Comments</h2>
            <div className="d-flex" style={{height: '35px', marginBottom: '25px'}}>
                <input type='text' value={comment} onChange={(e) => setComment(e.target.value)} style={{height: '100%', borderRadius: '5px'}}></input>
                <button onClick={submitComment} className='btn btn-primary' style={{ marginLeft: '10px'}}>Send Comment</button>
            </div>
            {
                comments.map(comment => {
                    return (
                        <div key={comment.id} className='d-flex align-items-center'>
                            <p style={{marginRight: '5px'}}>{comment.id} {comment.text}</p>
                            <div className="ms-2" style={{cursor: 'pointer', paddingTop: '5px'}}>
                                <Link href={`comments/${comment.id}`}>
                                    <Image src="/eye.svg" width="20" height="20"/>
                                </Link>
                            </div>
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

