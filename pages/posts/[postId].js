
function Post({ post }) {
    return (
        <>
            <h2>{post.id} {post.title}</h2>
            <p>{post.body}</p>
        </>
    )
}

export async function getStaticPaths() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    let data = await res.json();

    // data = data.map(post => {
    //     return ({
    //         params: { postId: `${post.id}`}
    //     })
    // })

    return {
        // paths: data,
        paths: [
            {
                params: { postId: '1'}
            },
            {
                params: { postId: '2'}
            },
            {
                params: { postId: '3'}
            },
        ],
        fallback: 'blocking',
    }
    
}

export async function getStaticProps(context){
    const { params } = context;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
    const data = await res.json();
    if(!data.id) {
        return {
            notFound: true,
        }
    }
    return {
        props: {
            post: data
        }
    }
}

export default Post;