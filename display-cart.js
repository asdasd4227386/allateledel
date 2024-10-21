$(document).ready(function() {
    displayProducts();
   
});

function displayProducts() {
    const recordsDiv = $('#cart-products');
    recordsDiv.empty(); 

    for (let i = 0; i < sessionStorage.length; i++) {
        const key = sessionStorage.key(i);
        if (key.split('-')[0] === "product") {
            
            const product = JSON.parse(sessionStorage.getItem(key));
            console.log(product);

            recordsDiv.append(`<p>${product.name} ${product.price} <button class="delete-item" id="${key}">X</button></p>`);
        }
    }
}

$(".wipe-cart").click(function() {
    sessionStorage.clear();
    displayProducts();
});

$(document).on('click', '.delete-item', function() {
    sessionStorage.removeItem($(this).attr('id'));
    displayProducts();
});