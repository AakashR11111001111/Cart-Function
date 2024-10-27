var products = document.querySelectorAll(".prod");
var qtyContainer = document.querySelector(".qty-container");
var totalAmt = document.querySelector("#totalamt");
var total = 0;

products.forEach((product) => {
    var qtyDis = product.querySelector("h4");
    var pPrice = parseInt(product.querySelector(".prodPrice").innerText);
    var pName = product.querySelector(".prodName").innerText;   
    var cartItem = null;
    
    product.addEventListener("click", (event) => {
        var oldQuantity = parseInt(qtyDis.innerText);
        
        if (event.target.innerText === "+") {
            qtyDis.innerText = oldQuantity + 1;
        } else if (event.target.innerText === "-" && oldQuantity > 0) {
            qtyDis.innerText = oldQuantity - 1;
        }
        
        var newQuantity = parseInt(qtyDis.innerText);
        var quantityChange = newQuantity - oldQuantity;
        
        total += quantityChange * pPrice;
        totalAmt.innerText = `Total Amount: $${total}`;

        if (newQuantity > 0) {
            if (!cartItem) {
                cartItem = document.createElement("div");
                cartItem.className = "qtydiv";
                cartItem.innerHTML = `<h4>${pName}</h4><span> x </span><h4>${pPrice}</h4> | <span> Quantity: </span><span class="cartQty">${newQuantity}</span>`;
                qtyContainer.appendChild(cartItem);
            } else {
                cartItem.querySelector(".cartQty").innerText = newQuantity;
            }
        } else if (cartItem) {
            qtyContainer.removeChild(cartItem);
            cartItem = null;
        }
    });
});
