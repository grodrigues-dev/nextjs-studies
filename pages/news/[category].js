function ArticleListByCategory({ articles, category}) {
    return (
        <>
            <h1>List of { category } articles</h1>
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

export default ArticleListByCategory;

export async function getServerSideProps(context) {
    const { params } = context
    const { category } = params
    const response = await fetch(`http://localhost:4000/news?category=${category}`)
    const data = await response.json()

    return {
        props: {
            articles: data,
            category
        }
    }
}

