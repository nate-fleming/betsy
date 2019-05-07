const callDB = {
    getProducts() {
        return fetch(" http://localhost:3000/products")
            .then(entries => entries.json())
    },
    getOneProduct(id) {
        return fetch(`http://localhost:3000/products/${id}`)
            .then(entries => entries.json())
    },
    getProductReviews(id) {
        return fetch(`http://localhost:3000/products/${id}?_embed=reviews`)
            .then(entries => entries.json())
    }
}

export default callDB