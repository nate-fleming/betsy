let faker = require('faker')

function generateProducts() {
    var products = []
    for (var id = 0; id < 50; id++) {
        let companyName = faker.company.companyName()
        let productName = faker.commerce.productName()
        let productInfo = faker.company.bs()
        let price = faker.commerce.price()
        let quanity = faker.random.number()
        let image = faker.image.cats()


        products.push({
            "id": id,
            "company": companyName,
            "product": productName,
            "description": productInfo,
            "price": price,
            "quanity": quanity,
            "image": image,
        })
    }
    return { "products": products }
}

module.exports = generateProducts

