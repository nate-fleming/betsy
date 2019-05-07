import callDB from "./dbCalls"
import reviews from "./reviews"

const productDiv = document.querySelector("#product-list")

const seeReviews = (id) => {
    callDB.getOneProduct(id).then(product => {
        const productReview = `
        <div class="product-review">
            <img class="product-image-review" src="${product.image}">
            <h2 class="product-name">${product.product}</h2>
            <h3 class="product-comapny">Brand: ${product.company}</h3>
            <h4 class="product-price">Price: $${product.price}</h4>
            <p class="product-quantity">Quantity Left: ${product.quanity}</p>
            <p class="product-desc">Description: ${product.description}</p>
            <div class="review-div">
                <h2 class="product-review-title">Reviews</h2>
                <h3 class="reviewer-name">${reviews[id].firstName} ${reviews[id].lastName}</h3>
                <p class="review">${reviews[id].review}</p>
            </div>
        </div>
    `
        productDiv.innerHTML = productReview
    })
}

export default seeReviews