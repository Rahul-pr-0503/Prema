document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("search");
    const searchButton = document.getElementById("mySubmit");
    const productItems = document.querySelectorAll("li");
    const cart = [];
    
    // Search Functionality
    searchButton.addEventListener("click", function () {
        const searchText = searchInput.value.toLowerCase();
        productItems.forEach(item => {
            const productName = item.querySelector("p").textContent.toLowerCase();
            if (productName.includes(searchText)) {
                item.style.display = "inline-block";
            } else {
                item.style.display = "none";
            }
        });
    });

    // Add to Cart Functionality
    document.querySelectorAll("button[type='submit']").forEach((button, index) => {
        button.addEventListener("click", function () {
            const product = productItems[index];
            const productName = product.querySelector("p").textContent;
            const productPrice = product.querySelectorAll("p")[1].textContent.split("₹")[1];
            cart.push({ name: productName, price: parseInt(productPrice) });

            updateCart();
        });
    });

    function updateCart() {
        const cartContainer = document.getElementById("cart-container");
        cartContainer.innerHTML = "<h2>Shopping Cart</h2>";
        
        let total = 0;
        cart.forEach(item => {
            const cartItem = document.createElement("p");
            cartItem.textContent = `${item.name} - ₹${item.price}`;
            cartContainer.appendChild(cartItem);
            total += item.price;
        });

        const totalPrice = document.createElement("h3");
        totalPrice.textContent = `Total: ₹${total}`;
        cartContainer.appendChild(totalPrice);

        cartContainer.style.display = "block";
    }
});
  