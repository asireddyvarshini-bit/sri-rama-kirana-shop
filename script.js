const sheetURL =
"https://docs.google.com/spreadsheets/d/e/2PACX-1vRl6xJVHnP5aKnQj1QhWDYM5rkmiI0GDaye8Gqu8ROWlSn_EhPLI0UL9-y42aMdoTLKTjZSS5rxbX-j/pub?gid=0&single=true&output=csv";

fetch(sheetURL)
.then(response => response.text())
.then(csv => {

    const rows = csv.trim().split("\n").slice(1);

    let products = [];

    rows.forEach(row => {

        let cols = row.split(",");

        products.push({
            category: cols[0] || "",
            name: cols[1] || "",
            brand: cols[2] || "",
            price: cols[3] || "",
            status: cols[4] || "",
            image: cols[5] || "https://via.placeholder.com/200?text=No+Image"
        });

    });

    displayProducts(products);

    document.getElementById("search").addEventListener("keyup", function () {

        let value = this.value.toLowerCase();

        let filtered = products.filter(product =>
            product.name.toLowerCase().includes(value) ||
            product.brand.toLowerCase().includes(value) ||
            product.category.toLowerCase().includes(value)
        );

        displayProducts(filtered);

    });

});

function displayProducts(products){

    const container = document.getElementById("products");

    container.innerHTML="";

    products.forEach(product=>{

        container.innerHTML += `

        <div class="product-card">

            <img src="${product.image}" alt="${product.name}">

            <div class="product-info">

                <h3>${product.name}</h3>

                <p>${product.brand}</p>

                <p class="price">₹${product.price}</p>

                <span class="${product.status.toLowerCase()=="available" ? "available":"out"}">

                    ${product.status}

                </span>

            </div>

        </div>

        `;

    });

}
