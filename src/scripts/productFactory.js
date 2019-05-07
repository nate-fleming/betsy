const productDiv = document.querySelector("#product-list")

const makeProduct = (product) => {
    const newProduct = `
        <div class="product" id="product--${product.id}">
            <img class="product-image" src="${product.image}">
            <h2 class="product-name">${product.product}</h2>
            <h3 class="product-comapny">Brand: ${product.company}</h3>
            <h4 class="product-price">Price: $${product.price}</h4>
            <p class="product-quantity">Quantity Left: ${product.quanity}</p>
            <p class="product-desc">Description: ${product.description}</p>
            <button class="review-button" id="review--${product.id}">See Reviews</button>
        </div>
    `
    productDiv.innerHTML += newProduct
}

export default makeProduct