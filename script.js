const products = [

{
category:"Biscuits",
name:"Good Day",
brand:"Britannia",
price:"₹10",
status:"Available",
image:"https://via.placeholder.com/250?text=Good+Day"
},

{
category:"Biscuits",
name:"Parle-G",
brand:"Parle",
price:"₹10",
status:"Available",
image:"https://via.placeholder.com/250?text=Parle-G"
},

{
category:"Stationery",
name:"Classmate Notebook",
brand:"Classmate",
price:"₹45",
status:"Available",
image:"https://via.placeholder.com/250?text=Notebook"
}

];

const container=document.getElementById("products");

function displayProducts(list){

container.innerHTML="";

list.forEach(product=>{

container.innerHTML+=`

<div class="product-card">

<img src="${product.image}" alt="${product.name}">

<div class="product-info">

<h3>${product.name}</h3>

<p>${product.brand}</p>

<p class="price">${product.price}</p>

<span class="${product.status==="Available"?"available":"out"}">

${product.status}

</span>

</div>

</div>

`;

});

}

displayProducts(products);

document.getElementById("search").addEventListener("keyup",function(){

let value=this.value.toLowerCase();

let filtered=products.filter(product=>

product.name.toLowerCase().includes(value) ||

product.brand.toLowerCase().includes(value) ||

product.category.toLowerCase().includes(value)

);

displayProducts(filtered);

});
