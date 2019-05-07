const callDB = {
    getProducts() {
        return fetch(" http://localhost:8088/products")
            .then(entries => entries.json())
    },
    getOneProduct(id) {
        return fetch(`http://localhost:8088/products/${id}`)
            .then(entries => entries.json())
    },
    getProductReviews(id) {
        return fetch(`http://localhost:8088/products/${id}?_embed=reviews`)
            .then(entries => entries.json())
    }
}

export default callDB