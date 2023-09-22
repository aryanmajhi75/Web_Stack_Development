function fetchProducts() {
    const productList = document.getElementById('productList');
    const searchInput = document.getElementById('searchInput');
    const sortSelect = document.getElementById('sortSelect');
    
    fetch('https://dummyjson.com/products')
        .then(response => response.json())
        .then(products => {

            const keyword = searchInput.value.toLowerCase();
            const filteredProducts = products.filter(product => {
                return product.name.toLowerCase().includes(keyword) ||
                    product.description.toLowerCase().includes(keyword);
            });
            
            const sortingOption = sortSelect.value;
            filteredProducts.sort((a, b) => {
                if (sortingOption === 'name') {
                    return a.name.localeCompare(b.name);
                } else if (sortingOption === 'price') {
                    return a.price - b.price;
                }
            });
            
            productList.innerHTML = '';
            
            filteredProducts.forEach(product => {
                const productDiv = document.createElement('div');
                productDiv.classList.add('product');
                
                const productName = document.createElement('h2');
                productName.textContent = product.name;
                
                const productDescription = document.createElement('p');
                productDescription.textContent = product.description;
                
                const productPrice = document.createElement('p');
                productPrice.textContent = `Price: $${product.price}`;
                
                const productImage = document.createElement('img');
                productImage.src = product.image;
                productImage.alt = product.name;
                
                productDiv.appendChild(productName);
                productDiv.appendChild(productDescription);
                productDiv.appendChild(productPrice);
                productDiv.appendChild(productImage);
                
                productList.appendChild(productDiv);
            });
        })
        .catch(error => {
            console.error('Error fetching product data:', error);
        });
}

document.getElementById('searchInput').addEventListener('input', fetchProducts);
document.getElementById('sortSelect').addEventListener('change', fetchProducts);

fetchProducts();