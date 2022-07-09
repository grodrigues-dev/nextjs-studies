function NewsArticleList({ articles }){
    return (
        <>
            <h1>List of News Articles</h1>
            {
                articles.map(article => {
                    return (
                        <div key={article.id}>
                            <h2>{article.title}</h2>
                            <p>{article.description} | {article.category}</p>
                            <hr/>
                        </div>
                    )
                })
            }
        </>
    )
}

export async function getServerSideProps() {
    const response = await fetch('http://localhost:4000/news')
    const data = await response.json()

    return {
        props: {
            articles: data
        }
    }
}

export default NewsArticleList