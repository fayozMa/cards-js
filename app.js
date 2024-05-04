import data from "./data.js" ;

const ol = document.querySelector("ol")

data.forEach((product) => {
    const {
        id,
        brand,
        category,
        description,
        discountPercentage,
        images,
        thumbnail,
        price,
        title,
        stock
    } = product

    const productBrand = document.createElement("h1")
    const productimg = document.createElement("img")
    const productPrice = document.createElement("p")
    const productTitle = document.createElement("h1")
    const productCategory = document.createElement("p")
    const productDescription = document.createElement("p")
    const productDiscount = document.createElement("span")
    const productStock = document.createElement("p")
    const li = document.createElement("li")

    productBrand.textContent = brand
    productimg.src = thumbnail
    productPrice.textContent = `${price} $`
    productTitle.textContent = title
    productCategory.textContent = category
    productDescription.textContent = description
    productStock.textContent = `Left : ${stock}`
    productDiscount.textContent = `${discountPercentage}% Discount`

    productBrand.setAttribute("class" , "productBrand")
    productimg.setAttribute("class" , "productImg")
    productPrice.setAttribute("class" , "productPrice")
    productTitle.setAttribute("class" , "productTitle")
    productCategory.setAttribute("class" , "productCategory")
    productDescription.setAttribute("class" , "productDescription")
    productStock.setAttribute("class" , "productStock")
    productDiscount.setAttribute("class" , "productDiscount")

    li.append(productimg , productBrand , productTitle , productCategory ,productPrice , productDiscount , productStock, productDescription)
    ol.appendChild(li)
});