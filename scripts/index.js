// SELECT ELEMENTS
const authorizationButton = document.getElementById('authorization-button');
const loginSuccessfulMessage = document.getElementById('login-successful');
const loginWindow = document.getElementById('modal-login-window');
const closeLoginWindowButton = document.getElementById('close-login-window-button');
let cartButton = document.getElementById('cart-button');
let shopCard = document.getElementById('cardContainer');
const cartWindow = document.getElementById('modal-cart-window');
const closeCartWindowButton = document.getElementById('close-cart-window-button');
let loginForm = document.getElementById('login-form');
let subtotalHeader = document.getElementById('subtotal');
let numberOfItemsOnButton = document.getElementById('number-of-items-on-button');
let checkOutButton = document.getElementById('checkout-button');

// HOME SECTION
// Creating verification info for Login
localStorage.setItem('name', 'Hanna');
localStorage.setItem('pw', '123456');

// Authorization button
authorizationButton.innerHTML = 'Log in';
loginSuccessfulMessage.style.display = 'none';


function openLoginWindow() {
    loginWindow.style.display = 'block';
}

authorizationButton.addEventListener('click', openLoginWindow);
closeLoginWindowButton.addEventListener('click', (event) => {
    loginWindow.style.display = 'none';
})


// Process of logging in
function checkLoginData(event) {
    // stored data from the register-form
    let storedName = localStorage.getItem('name');
    let storedPw = localStorage.getItem('pw');

    // entered data from the login-form
    let userName = document.getElementById('userName');
    let userPw = document.getElementById('userPw');

    // check if stored data from register-form is equal to data from login form
    if (userName.value === storedName && userPw.value === storedPw) {
         JSON.stringify(localStorage.setItem('login', 'true'));
        let loginStatus = JSON.parse(localStorage.getItem('login'));
console.log(loginStatus);
        authorizationButton.innerHTML = 'Log out';

        if (authorizationButton.innerHTML = 'Log out') {
            cartButton.disabled = false;
            const buyButtons = document.querySelectorAll('.buy-button');
            let buyButtonsArr = [...buyButtons];
            for (let buyButton of buyButtonsArr) {
                buyButton.disabled = false;
            }
        }
        loginSuccessfulMessage.style.display = 'block';
        document.getElementById('need-to-login').style.display = 'none';
        event.preventDefault();

    } else {
        alert('Data is not correct. Please, try again.');
    }
}

loginForm.addEventListener('submit', checkLoginData);



//SHOP SECTION

const productItems = [
    {
        id: 0,
        img: "../images/hospital-regular.svg",
        price: 5,
        productCode: 'h',
        name: "Health",
    },
    {
        id: 1,
        img: "../images/heart-regular.svg",
        price: 10,
        productCode: 'l',
        name: "Love",
    },
    {
        id: 2,
        img: "../images/clock-regular.svg",
        price: 8,
        productCode: 't',
        name: "Time",
    },
    {
        id: 3,
        img: "../images/peace-solid.svg",
        price: 4,
        productCode: 'p',
        name: "Peace",
    },
];

shopCard.innerHTML = productItems.map(shopCard =>
    `<div class="skills-card flex-column">
                <div class="imageItemBox">
                    <img alt="product icon"  class="image-item" src="${shopCard.img}">
                </div>
                <h3>${shopCard.name}</h3>
                <div class="price-box">
                    <span>${shopCard.price}</span>
                    <div><img class="star-icon" alt="Star icon" src="images/star-solid.svg"></div>
                    <button class="button buy-button" id="${shopCard.productCode}" 
                    title=" Please, log in, if you want buy something." onclick="addToCart(${shopCard.id})" disabled>Buy</button>
                </div>
            </div>`
).join('');


function openShoppingCartWindow() {
    cartWindow.style.display = 'block';
}

cartButton.addEventListener('click', openShoppingCartWindow);

function closeShoppingCartWindow() {
    cartWindow.style.display = 'none';
}


closeCartWindowButton.addEventListener('click', closeShoppingCartWindow);


// ADD TO CART
let cart = JSON.parse(localStorage.getItem('Cart')) || [];
updateCart();

function addToCart(id) {
    // check if productItem already exist in cart
    if (cart.some((item) => item.id === id)) {
        changeNumberOfUnits('plus', id);
    } else {
        const item = productItems.find((product) => product.id === id);

        cart.push({
            ...item,
            numberOfUnits: 1
        });
    }

    updateCart();
}

// Change items after adding in cart new one
function updateCart() {
    renderCartItems();
    renderSubtotal();

//     save cart to local storage
    localStorage.setItem('Cart', JSON.stringify(cart));
}

// Calculate and render Subtotal
function renderSubtotal() {
    let totalPrice = 0, totalItems = 0;

    cart.forEach((item) => {
        totalPrice += item.price * item.numberOfUnits;
        totalItems += item.numberOfUnits;
    });

    subtotalHeader.innerHTML = `
    Subtotal (${totalItems} items): ${totalPrice}
                        <div class="coin-subtotal-box">
                            <img class="star-icon" alt="Star icon" src="images/star-solid.svg">
                        </div>`;
    numberOfItemsOnButton.innerHTML = `(${totalItems})`
}

// Render items in cart, if user buy something
function renderCartItems() {
    // Звяжись з localStorage!!!!!!!!
    const shoppingBox = document.getElementById('shopping-box');
// if else поміняй місцями
    if (cart.length !== 0) {
        shoppingBox.innerHTML =
            ` <div class="items-box" id="item-box">
<!-- cart items will be here-->
</div>`;

        let cartElement = document.getElementById('item-box');
        cartElement.innerHTML = ''; // clear cart element
        cart.forEach((item) => {
            cartElement.innerHTML +=
                ` <div class="skills-card flex-column cart-product-card">
<div class="imageItemCartBox">
                    <img alt="product icon" class="image-item" src="${item.img}" alt="${item.name}">
                </div>
                <h3>${item.name}</h3>
                <div class="price-box">
                <div class="price-container">
                    <span>${item.price}</span>
                    <div><img class="star-icon" alt="Star icon" src="images/star-solid.svg"></div>
                    </div>
                    <div class="counter-box">
                    <button class="button minus-button counter-button" onclick="changeNumberOfUnits('minus', ${item.id})">-</button>
                    <div class="counter">${item.numberOfUnits}</div>
                      <button class="button plus-button counter-button" onclick="changeNumberOfUnits('plus', ${item.id})">+</button>
                      </div>
        </div>
             <button class="button" onclick="removeItemFromCart(${item.id})">Delete</button>
    </div>
        `;
        })
        checkOutButton.disabled = false;
    } else {
        // if there are some products, so render them
        shoppingBox.innerHTML =
            `<div class="no-items-header"><h4>No items yet</h4></div>`;
        // console.log('cart is empty');
        checkOutButton.disabled = true;
    }
}

// Remove item from cart
function removeItemFromCart(id) {
    cart = cart.filter((item) => item.id !== id);
    updateCart();
}

// Change number of units in cart for each item
function changeNumberOfUnits(action, id) {
    cart = cart.map((item) => {
        let numberOfUnits = item.numberOfUnits;

        if (item.id === id) {
            if (action === 'minus' && numberOfUnits > 0) {
                numberOfUnits--;
            } else if (action === 'plus') {
                numberOfUnits++;
            }
        }

        return {
            ...item,
            numberOfUnits,
        };
    })

    updateCart();
}


/*
function enableBuyButton() {

    let checkActiveLogin = localStorage.getItem('login');
    const buyButtons = document.querySelectorAll('.buy-button');
    let buyButtonsArr = [...buyButtons];
    for (let buyButton of buyButtonsArr) {
        if (checkActiveLogin === 'true') {
            console.log('Here will be a function to open cart');
        } else {
            openLoginWindow();
        }
    }

}

*/


/*function enableShoppingCartButton() {

    const authorizationButton = document.getElementById('authorization-button');

    if (authorizationButton.innerHt === true) {
        cartButton.disabled = false;
    } else {
        openLoginWindow();
    }
}

authorizationButton.addEventListener('click', enableShoppingCartButton);*/


//навсяк скопіювала вміст рендерингу карток мокапом з  function closeShoppingCartWindow()  , поки пишу справжню функцію. Потім цей код можна буде стерти

/*
const productsInCart = localStorage.getItem('products');
const shoppingBox = document.getElementById('shopping-box');
// if else поміняй місцями
if (productsInCart) {
    // if there are some products, so render them
    shoppingBox.innerHTML =
        `<div class="no-items-header"><h4>No items yet</h4></div>`;
} else {

    shoppingBox.innerHTML =
        ` <div class="items-box" id="item-box"></div>
<div class="checkout-button-block">
<h4>Subtotal (0 items): 0 <div class="coin-subtotal-box"><img class="star-icon" alt="Star icon" src="images/star-solid.svg"></div></h4>
            <button class="button" id="checkout-button">Checkout</button>
        </div>`;

    document.getElementById('item-box').innerHTML = productItems.map(shopCard =>
        ` <div class="skills-card flex-column cart-product-card">
<div class="imageItemCartBox">
                    <img alt="product icon" id="${shopCard.id}" class="image-item" src="${shopCard.img}">
                </div>
                <h3>Health</h3>
                <div class="price-box">
                <div class="price-container">
                    <span>${shopCard.price}</span>
                    <div><img class="star-icon" alt="Star icon" src="images/star-solid.svg"></div>
                    </div>
                    <div class="counter-box">
                    <button class="button minus-button counter-button" id="${shopCard.productCode}">-</button>
                    <div class="counter">10</div>
                      <button class="button plus-button counter-button">+</button>
                      </div>
        </div>
    </div>
        `
    ).join('');


}*/
