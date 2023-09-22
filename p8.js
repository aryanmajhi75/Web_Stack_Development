const productList = document.getElementById("productList");

async function fetchProducts() {
    try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();

        if (data && data.products) {
            data.products.forEach((product, index) => {
                const productDiv = document.createElement("div");
                productDiv.classList.add("product");

                const title = document.createElement("h2");
                title.textContent = product.title;

                const description = document.createElement("p");
                description.classList.add("description");
                description.textContent = product.description;

                const price = document.createElement("p");
                price.textContent = `Price: $${product.price.toFixed(2)}`;

                const carousel = document.createElement("div");
                carousel.classList.add("carousel");

                product.images.forEach((image, imgIndex) => {
                    const img = document.createElement("img");
                    img.src = image;
                    img.alt = `Image ${imgIndex}`;
                    carousel.appendChild(img);
                });

                productDiv.appendChild(title);
                productDiv.appendChild(description);
                productDiv.appendChild(price);
                productDiv.appendChild(carousel);

                productList.appendChild(productDiv);

                startSlideshow(carousel);
            });
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

function startSlideshow(carousel) {
    let currentIndex = 0;
    const images = carousel.querySelectorAll("img");
    const interval = 2000;

    function showNextSlide() {
        images[currentIndex].style.opacity = 0;
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].style.opacity = 1;
    }

    images[currentIndex].style.opacity = 1;

    setInterval(showNextSlide, interval);
}

fetchProducts();