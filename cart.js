$(".purchase").click(function() {
    const productDiv = $(this).closest('.product');
  
    // Get product name and price
    const productName = productDiv.find('.product-name').text();
    const productPrice = productDiv.find('.price').text();


    const product = {
        name: productName,
        price: productPrice
    };
    sessionStorage.setItem("product-"+sessionStorage.length, JSON.stringify(product));

  
   
});




