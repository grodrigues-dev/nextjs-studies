import Link from "next/link";

function ProductList({ products }) {
    return (
        <>
            <h1>List of Products</h1>
            {
                products.map((product) => {
                    return (
                        <div key={product.id}>
                            <h2>{product.id} {product.title} {product.price}</h2>
                            <hr />
                        </div>
                    )
                })
            }
        </>
    )
}

export async function getStaticProps() {
    console.log('Generating / regenarating Product List')
    const res = await fetch('http://localhost:4000/products');
    const data = await res.json();

    return {
        props: {
            products: data
        },
        revalidate: 30,
    }
}

export default ProductList;