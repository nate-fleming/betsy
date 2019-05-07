import listProducts from "./listProducts"
import seeReviews2 from "./reviewProduct2"
import navBar from "./makeNavbar"

const productArea = document.querySelector("#product-list")

navBar()
listProducts()

productArea.addEventListener("click", (e) => {
    if (e.target.className === "review-button") {
        let productId = e.target.id.split("--")[1]
        seeReviews2(productId)
    }
})
