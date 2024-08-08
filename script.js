document.addEventListener("DOMContentLoaded", function () {
  // Initialize Swiper
  const swiper = new Swiper(".swiper-container", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    autoplay: {
      delay: 3000, // 3 seconds
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});

// script.js

// Define an array of product objects
const products = [
  {
    id: 1,
    name: "Quantum Earbuds",
    description: "ANC Quad Mic with advanced noise cancellation.",
    price: "Rs.6,999",
    originalPrice: "Rs.9,999",
    discount: "65% off",
    image: "./assets/images/showcase/watch-1.avif",
    recommendation: "Fawad Khan recommendation",
    color: "AURORA GREEN",
    button: "Add to Cart",
  },
  {
    id: 1,
    name: "Quantum Earbuds",
    description: "ANC Quad Mic with advanced noise cancellation.",
    price: "Rs.6,999",
    originalPrice: "Rs.9,999",
    discount: "65% off",
    image: "./assets/images/showcase/watch-2.avif",
    recommendation: "Fawad Khan recommendation",
    color: "AURORA GREEN",
    button: "Add to Cart",
  },
  {
    id: 1,
    name: "Quantum Earbuds",
    description: "ANC Quad Mic with advanced noise cancellation.",
    price: "Rs.6,999",
    originalPrice: "Rs.9,999",
    discount: "65% off",
    image: "./assets/images/showcase/watch-3.avif",
    recommendation: "Fawad Khan recommendation",
    color: "AURORA GREEN",
    button: "Add to Cart",
  },
  {
    id: 1,
    name: "Quantum Earbuds",
    description: "ANC Quad Mic with advanced noise cancellation.",
    price: "Rs.6,999",
    originalPrice: "Rs.9,999",
    discount: "65% off",
    image: "./assets/images/showcase/watch-4.avif",
    recommendation: "Fawad Khan recommendation",
    color: "AURORA GREEN",
    button: "Add to Cart",
  },
  {
    id: 1,
    name: "Quantum Earbuds",
    description: "ANC Quad Mic with advanced noise cancellation.",
    price: "Rs.6,999",
    originalPrice: "Rs.9,999",
    discount: "65% off",
    image: "./assets/images/showcase/watch-5.avif",
    recommendation: "Fawad Khan recommendation",
    color: "AURORA GREEN",
    button: "Add to Cart",
  },
  {
    id: 1,
    name: "Quantum Earbuds",
    description: "ANC Quad Mic with advanced noise cancellation.",
    price: "Rs.6,999",
    originalPrice: "Rs.9,999",
    discount: "65% off",
    image: "./assets/images/showcase/watch-6.avif",
    recommendation: "Fawad Khan recommendation",
    color: "AURORA GREEN",
    button: "Add to Cart",
  },
  {
    id: 1,
    name: "Quantum Earbuds",
    description: "ANC Quad Mic with advanced noise cancellation.",
    price: "Rs.6,999",
    originalPrice: "Rs.9,999",
    discount: "65% off",
    image: "./assets/images/showcase/watch-7.avif",
    recommendation: "Fawad Khan recommendation",
    color: "AURORA GREEN",
    button: "Add to Cart",
  },
  {
    id: 1,
    name: "Quantum Earbuds",
    description: "ANC Quad Mic with advanced noise cancellation.",
    price: "Rs.6,999",
    originalPrice: "Rs.9,999",
    discount: "65% off",
    image: "./assets/images/showcase/watch-8.avif",
    recommendation: "Fawad Khan recommendation",
    color: "AURORA GREEN",
    button: "Add to Cart",
  },
  {
    id: 1,
    name: "Quantum Earbuds",
    description: "ANC Quad Mic with advanced noise cancellation.",
    price: "Rs.6,999",
    originalPrice: "Rs.9,999",
    discount: "65% off",
    image: "./assets/images/showcase/watch-9.avif",
    recommendation: "Fawad Khan recommendation",
    color: "AURORA GREEN",
    button: "Add to Cart",
  },
  {
    id: 1,
    name: "Quantum Earbuds",
    description: "ANC Quad Mic with advanced noise cancellation.",
    price: "Rs.6,999",
    originalPrice: "Rs.9,999",
    discount: "65% off",
    image: "./assets/images/showcase/watch-10.avif",
    recommendation: "Fawad Khan recommendation",
    color: "AURORA GREEN",
    button: "Add to Cart",
  },
  {
    id: 1,
    name: "Quantum Earbuds",
    description: "ANC Quad Mic with advanced noise cancellation.",
    price: "Rs.6,999",
    originalPrice: "Rs.9,999",
    discount: "65% off",
    image: "./assets/images/showcase/watch-4.avif",
    recommendation: "Fawad Khan recommendation",
    color: "AURORA GREEN",
    button: "Add to Cart",
  },
  {
    id: 1,
    name: "Quantum Earbuds",
    description: "ANC Quad Mic with advanced noise cancellation.",
    price: "Rs.6,999",
    originalPrice: "Rs.9,999",
    discount: "65% off",
    image: "./assets/images/showcase/watch-7.avif",
    recommendation: "Fawad Khan recommendation",
    color: "AURORA GREEN",
    button: "Add to Cart",
  },
  {
    id: 1,
    name: "Quantum Earbuds",
    description: "ANC Quad Mic with advanced noise cancellation.",
    price: "Rs.6,999",
    originalPrice: "Rs.9,999",
    discount: "65% off",
    image: "./assets/images/showcase/watch-1.avif",
    recommendation: "Fawad Khan recommendation",
    color: "AURORA GREEN",
    button: "Add to Cart",
  },
  {
    id: 1,
    name: "Quantum Earbuds",
    description: "ANC Quad Mic with advanced noise cancellation.",
    price: "Rs.6,999",
    originalPrice: "Rs.9,999",
    discount: "65% off",
    image: "./assets/images/showcase/watch-9.avif",
    recommendation: "Fawad Khan recommendation",
    color: "AURORA GREEN",
    button: "Add to Cart",
  },
  {
    id: 1,
    name: "Quantum Earbuds",
    description: "ANC Quad Mic with advanced noise cancellation.",
    price: "Rs.6,999",
    originalPrice: "Rs.9,999",
    discount: "65% off",
    image: "./assets/images/showcase/watch-2.avif",
    recommendation: "Fawad Khan recommendation",
    color: "AURORA GREEN",
    button: "Add to Cart",
  },
  // Add more products as needed
];

// script.js

// Function to render product cards
function renderProductCards() {
  const container = document.querySelector(".product-card-container"); // Select the container where products will be displayed

  products.forEach((product) => {
    // Create a product card element
    const productCard = document.createElement("div");
    productCard.classList.add("product-card-container");

    // Add HTML content to the product card
    productCard.innerHTML = `
            <div class="product-card rounded-5 border">
                <div class="product-img-box bg-body-secondary p-3">
                    <div class="recomendation-box d-flex justify-content-between">
                        <p>${product.recommendation}</p>
                        <div class="rating-box">
                            <i class="bi bi-star-fill"></i>
                            <span class="sub">5.00</span>
                        </div>
                    </div>
                    <img src="${product.image}" alt="${product.name}" />
                </div>
                <div class="deatails-box p-3">
                    <div class="title"><h3 class="fs-4">${product.name}</h3></div>
                    <div class="category-sub d-flex fs-6 fw-lighter border border-0 border-bottom pb-3">
                        <div class="category">
                            <p>ANC</p>
                        </div>
                        <div class="sub">ENC Quad Mic</div>
                    </div>
                    <div class="colors d-flex gap-2 py-2">
                        <div class="color-selector color-selector1"></div>
                        <div class="color-selector color-selector2"></div>
                        <div class="color-selector color-selector3"></div>
                        <div class="color-selector color-selector4">
                            <div class="line"></div>
                        </div>
                    </div>
                    <div class="color-name d-flex">
                        <div class="category">
                            <p>COLOR :</p>
                        </div>
                        <div class="sub">${product.color}</div>
                    </div>
                    
                    <div class="d-flex justify-content-between  align-items-center">
                    <div><div class="price">
                        <p class="fw-bold">${product.price}</p>
                    </div>
                    <div class="discount-price d-flex">
                        <div class="category">
                            <p class="pe-2 border-dark border-1 border-end border-0">${product.originalPrice}</p>
                        </div>
                        <div class="sub">
                            <span class="ps-2">${product.discount}</span>
                        </div>
                    </div></div>
                    
                    <button class="btn btn-success bg-black  rounded-5">${product.button}</button>
                    </div>
                </div>
            </div>
        `;

    // Append the product card to the container
    container.appendChild(productCard);
  });
}

// Call the function to render product cards when the page loads
document.addEventListener("DOMContentLoaded", renderProductCards);
// script.js

// Define an array of product objects
const products_2 = [
  {
    id: 1,
    name: "Quantum Earbuds",
    description: "ANC Quad Mic with advanced noise cancellation.",
    price: "Rs.6,999",
    originalPrice: "Rs.9,999",
    discount: "65% off",
    image: "./assets/images/showcase/watch-1.avif",
    recommendation: "Fawad Khan recommendation",
    color: "AURORA GREEN",
    button: "Add to Cart",
  },
  {
    id: 1,
    name: "Quantum Earbuds",
    description: "ANC Quad Mic with advanced noise cancellation.",
    price: "Rs.6,999",
    originalPrice: "Rs.9,999",
    discount: "65% off",
    image: "./assets/images/showcase/watch-7.avif",
    recommendation: "Fawad Khan recommendation",
    color: "AURORA GREEN",
    button: "Add to Cart",
  },
  {
    id: 1,
    name: "Quantum Earbuds",
    description: "ANC Quad Mic with advanced noise cancellation.",
    price: "Rs.6,999",
    originalPrice: "Rs.9,999",
    discount: "65% off",
    image: "./assets/images/showcase/watch-1.avif",
    recommendation: "Fawad Khan recommendation",
    color: "AURORA GREEN",
    button: "Add to Cart",
  },
  {
    id: 1,
    name: "Quantum Earbuds",
    description: "ANC Quad Mic with advanced noise cancellation.",
    price: "Rs.6,999",
    originalPrice: "Rs.9,999",
    discount: "65% off",
    image: "./assets/images/showcase/watch-9.avif",
    recommendation: "Fawad Khan recommendation",
    color: "AURORA GREEN",
    button: "Add to Cart",
  },
  {
    id: 1,
    name: "Quantum Earbuds",
    description: "ANC Quad Mic with advanced noise cancellation.",
    price: "Rs.6,999",
    originalPrice: "Rs.9,999",
    discount: "65% off",
    image: "./assets/images/showcase/watch-2.avif",
    recommendation: "Fawad Khan recommendation",
    color: "AURORA GREEN",
    button: "Add to Cart",
  },
  // Add more products as needed
];

// script.js

// Function to render product cards
function renderProductCards_2() {
  const container = document.querySelector(".product-card-container-2"); // Select the container where products will be displayed

  products_2.forEach((product_2) => {
    // Create a product card element
    const productCard = document.createElement("div");
    productCard.classList.add("product-card-container-2");

    // Add HTML content to the product card
    productCard.innerHTML = `
            <div class="product-card rounded-5 border">
                <div class="product-img-box bg-body-secondary p-3">
                    <div class="recomendation-box d-flex justify-content-between">
                        <p>${product_2.recommendation}</p>
                        <div class="rating-box">
                            <i class="bi bi-star-fill"></i>
                            <span class="sub">5.00</span>
                        </div>
                    </div>
                    <img src="${product_2.image}" alt="${product_2.name}" />
                </div>
                <div class="deatails-box p-3">
                    <div class="title"><h3 class="fs-4">${product_2.name}</h3></div>
                    <div class="category-sub d-flex fs-6 fw-lighter border border-0 border-bottom pb-3">
                        <div class="category">
                            <p>ANC</p>
                        </div>
                        <div class="sub">ENC Quad Mic</div>
                    </div>
                    <div class="colors d-flex gap-2 py-2">
                        <div class="color-selector color-selector1"></div>
                        <div class="color-selector color-selector2"></div>
                        <div class="color-selector color-selector3"></div>
                        <div class="color-selector color-selector4">
                            <div class="line"></div>
                        </div>
                    </div>
                    <div class="color-name d-flex">
                        <div class="category">
                            <p>COLOR :</p>
                        </div>
                        <div class="sub">${product_2.color}</div>
                    </div>
                    
                    <div class="d-flex justify-content-between  align-items-center">
                    <div><div class="price">
                        <p class="fw-bold">${product_2.price}</p>
                    </div>
                    <div class="discount-price d-flex">
                        <div class="category">
                            <p class="pe-2 border-dark border-1 border-end border-0">${product_2.originalPrice}</p>
                        </div>
                        <div class="sub">
                            <span class="ps-2">${product_2.discount}</span>
                        </div>
                    </div></div>
                    
                    <button class="btn btn-success bg-black rounded-5">${product_2.button}</button>
                    </div>
                </div>
            </div>
        `;

    // Append the product card to the container
    container.appendChild(productCard);
  });
}

// Call the function to render product cards when the page loads
document.addEventListener("DOMContentLoaded", renderProductCards_2);
