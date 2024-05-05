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
    const like_btn = document.createElement("button")
    const buy_btn = document.createElement("button")
    const btns = document.createElement("div")

    productBrand.textContent = brand
    productimg.src = thumbnail
    productPrice.textContent = `${price} $`
    productTitle.textContent = title
    productCategory.textContent = category
    productDescription.textContent = description
    productStock.textContent = `Left : ${stock}`
    productDiscount.textContent = `${discountPercentage}% Discount`
    like_btn.textContent = "ADD TO LIKEDS ❤️"
    buy_btn.textContent = "BUY RIGHT NOW 🛒"

    productBrand.setAttribute("class" , "productBrand")
    productimg.setAttribute("class" , "productImg")
    productPrice.setAttribute("class" , "productPrice")
    productTitle.setAttribute("class" , "productTitle")
    productCategory.setAttribute("class" , "productCategory")
    productDescription.setAttribute("class" , "productDescription")
    productStock.setAttribute("class" , "productStock")
    productDiscount.setAttribute("class" , "productDiscount")
    like_btn.setAttribute("class" , "like_btn")
    buy_btn.setAttribute("class" , "buy_btn")
    btns.setAttribute("class", "btns")

    btns.append(like_btn , buy_btn)
    li.append(productimg , productBrand , productTitle , productCategory ,productPrice , productDiscount , productStock, productDescription , btns)
    ol.appendChild(li)
});