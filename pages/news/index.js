function NewsArticleList({ data }){
    return (
        <>
            <h1 className="content">{data}</h1>
        </>
    )
}

export async function getServerSideProps(context) {
    return {
        props: {
            data: context.preview ? 'List of draft Articles': 'List of published Articles'
        }
    }
}

export default NewsArticleList