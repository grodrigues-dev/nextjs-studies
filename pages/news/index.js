function NewsArticleList({ data }){
    return (
        <>
            <h1 className="content">{data}</h1>
            <p>{process.env.NEXT_PUBLIC_ID}</p>
        </>
    )
}

export async function getServerSideProps(context) {
    const user = process.env.DB_USER
    const password = process.env.DB_PASSWORD
    console.log(user, password)
    return {
        props: {
            data: context.preview ? 'List of draft Articles': 'List of published Articles'
        }
    }
}

export default NewsArticleList