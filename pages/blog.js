import { getSession, useSession } from 'next-auth/react';
import { redirect } from 'next/dist/server/api-utils';

function Blog( { data}) {
    return (
        <>
            <h1>Blog Page - {data}</h1>
        </>
    ) 
}

export async function getServerSideProps(context) {

    const session = await getSession(context);

    if(!session) {
        return {
            redirect: {
                destination : `/api/auth/signin?callbackUrl=http://localhost:3000/blog`,
                permanent: false
            }
        }
    }

    return  {
        props: {
            session,
            data: session ? 'List of personalized blogs' : 'List of free blogs'
        }
    }
}

export default Blog;