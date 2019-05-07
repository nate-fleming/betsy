const navbarArea = document.querySelector("#navbar")

const makeNavbar = () => {
    navbarArea.innerHTML = `
        <nav class="navbar">
            <a href="index.html" class="nav-home">Betsy</a>
            <a href="" class="nav-categories">Categories</a>
            <a href="" class="nav-orders">Orders</a>
            <a href="" class="nav-logout">Log Out</a>
        </nav>
    `
}

export default makeNavbar