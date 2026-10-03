function ProductCard({name,price,category,inStock}){
    return(
        <article>
        <h2>Name: {name}</h2>
        <h3>Category: {category}</h3>
        <p>Price: ${price}</p>
        <p>{inStock ? "In Stock" :"Out of Stock"}</p>
        </article>
    )
}
export default ProductCard;