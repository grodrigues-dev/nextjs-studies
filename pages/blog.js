import { getSession, useSession } from 'next-auth/react';

function Blog( { data}) {
    return (
        <>
            <h1>Blog Page - {data}</h1>
        </>
    ) 
}

export async function getServerSideProps(context) {
    const session = await getSession(context);
    return  {
        props: {
            session,
            data: session ? 'List of personalized blogs' : 'List of free blogs'
        }
    }
}

export default Blog;