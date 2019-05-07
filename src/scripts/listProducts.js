import makeProduct from "./productFactory"
import callDB from "./dbCalls"


const listProducts = () => {
    callDB.getProducts().then(products => {
        products.forEach(product => {
            makeProduct(product)
        })
    })
}

export default listProducts