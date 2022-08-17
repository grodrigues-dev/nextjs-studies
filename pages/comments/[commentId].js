function Comment({comment }) {
    return (
        <div style={{display: "flex"}}>
            <p>{comment.id} {comment.text}</p>
        </div>
    )
}

export async function getStaticPaths() {
    const res = await fetch('http://localhost:3000/api/comments')
    let data = await res.json()
    data = data.map(post => {
            return ({
                params: { commentId: `${post.id}`}
            })
        })
    return {
        paths: data,
        fallback: 'blocking'
    }
}

export async function getStaticProps(context) {
    const { params } = context
    console.log(params)
    const res = await fetch(`http://localhost:3000/api/comments/${params.commentId}`)
    const data = await res.json();
    if(!data.id) {
        return {
            notFound: true,
        }
    }
    return {
        props: {
            comment: data
        }
    }
}

export default Comment