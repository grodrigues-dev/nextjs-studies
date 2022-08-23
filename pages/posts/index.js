import Link from "next/link";

import styles from '../../styles/Posts.module.scss'

function PostList({ posts }) {
    return (
        <>
            <h1 className={styles.highlight}>List of Posts</h1>
            {
                posts.map((post) => {
                    return (
                        <div key={post.id}>
                            <Link href={`posts/${post.id}`} passHref>
                                <h2>{post.id} {post.title}</h2>
                            </Link>
                            <hr />
                        </div>
                    )
                })
            }
        </>
    )
}

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();

    return {
        props: {
            posts: data
        }
    }
}

export default PostList;