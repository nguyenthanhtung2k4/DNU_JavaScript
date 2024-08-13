    // get data product
    fetch('products.json')
    .then(response => response.json())
    .then(data => {
        products = data;
    })