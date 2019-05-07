import callDB from "./dbCalls"

const productDiv = document.querySelector("#product-list")
const reviewDiv = document.querySelector("#review-list")

const seeReviews2 = (id => {
    reviewDiv.classList.remove("hidden")
    callDB.getProductReviews(id).then(product => {
        const productReview = `
        <div class="product-review">
        <img class="product-image-review" src="${product.image}">
        <h2 class="product-name">${product.product}</h2>
        <h3 class="product-comapny">Brand: ${product.company}</h3>
        <h4 class="product-price">Price: $${product.price}</h4>
        <p class="product-quantity">Quantity Left: ${product.quanity}</p>
        <p class="product-desc">Description: ${product.description}</p>
        </div>
        `

        productDiv.innerHTML = productReview
        reviewDiv.innerHTML = "<h2 class='product-review-title'>Reviews</h2 > "


        product.reviews.forEach(review => {
            const reviewList = `
            <div>
                <h3 class="reviewer-name">${review.firstName} ${review.lastName}</h3>
                <p class="review">${review.review}</p>
            </div>
            `
            reviewDiv.innerHTML += reviewList
        })
    })
})

export default seeReviews2