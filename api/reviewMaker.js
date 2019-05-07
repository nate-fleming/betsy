let faker = require('faker')

function generateReviews() {
    var reviews = []
    for (var id = 0; id < 50; id++) {
        let firstName = faker.name.firstName()
        let lastName = faker.name.lastName()
        let review = faker.lorem.paragraph()

        reviews.push({
            "id": id,
            "firstName": firstName,
            "lastName": lastName,
            "review": review,
        })
    }
    return { "reviews": reviews }
}

module.exports = generateReviews
