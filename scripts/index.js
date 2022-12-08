// Home section


// Authorization Button
const authorizationButton = document.getElementById('authorization-button');
authorizationButton.innerHTML = 'Log in';
const loginSuccessfulMessage = document.getElementById('login-successful');
loginSuccessfulMessage.style.display = 'none';

const loginWindow = document.getElementById('modal-login-window');

function openLoginWindow() {
    loginWindow.style.display = 'block';
}

authorizationButton.addEventListener('click', openLoginWindow);
const closeLoginWindowButton = document.getElementById('close-login-window-button');
closeLoginWindowButton.addEventListener('click', (event) => {
    loginWindow.style.display = 'none';
})


// Shopping Cart Button
let cartButton = document.getElementById('cart-button');
cartButton.disabled = true;

const cartWindow = document.getElementById('modal-cart-window');

function openShoppingCartWindow() {
    cartWindow.style.display = 'block';
}

cartButton.addEventListener('click', openShoppingCartWindow);

function closeShoppingCartWindow() {
    cartWindow.style.display = 'none';
}

const closeCartWindowButton = document.getElementById('close-cart-window-button');
closeCartWindowButton.addEventListener('click', closeShoppingCartWindow);
//Shop section

const productItems = [
    {
        id: "health",
        img: "../images/hospital-regular.svg",
        price: 5,
    },
    {
        id: "love",
        img: "../images/heart-regular.svg",
        price: 10,
    },
    {
        id: "time",
        img: "../images/clock-regular.svg",
        price: 8,
    },
    {
        id: "peace",
        img: "../images/peace-solid.svg",
        price: 4,
    },
];

document.getElementById('cardContainer').innerHTML = productItems.map(shopCard =>
    `<div class="skills-card flex-column">
                <div class="imageItemBox">
                    <img alt="product icon" id="${shopCard.id}" class="image-item" src="${shopCard.img}">
                </div>
                <h3>Health</h3>
                <div class="price-box">
                    <span>${shopCard.price}</span>
                    <div><img class="star-icon" alt="Star icon" src="images/star-solid.svg"></div>
                    <button class="button buy-button" disabled id="buy-button" 
                    title=" Please, log in, if you want buy something.">Buy</button>
                </div>
            </div>`
).join('');


// Login
function storeLoginData() {
    localStorage.setItem('name', 'Hanna');
    localStorage.setItem('pw', '123456');
}

storeLoginData();

function checkLoginData(event) {
    // stored data from the register-form
    let storedName = localStorage.getItem('name');
    let storedPw = localStorage.getItem('pw');

    // entered data from the login-form
    let userName = document.getElementById('userName');
    let userPw = document.getElementById('userPw');

    // check if stored data from register-form is equal to data from login form
    if (userName.value == storedName && userPw.value == storedPw) {
        localStorage.setItem('login', 'true');
        cartButton.disabled = false;
        authorizationButton.innerHTML = 'Log out';

        const buyButtons = document.querySelectorAll('.buy-button');
        let buyButtonsArr = [...buyButtons];
        for (let buyButton of buyButtonsArr) {
            buyButton.disabled = false;
        }

        loginSuccessfulMessage.style.display = 'block';
        document.getElementById('need-to-login').style.display = 'none';
        event.preventDefault();

    } else {
        alert('Data is not correct. Please, try again.');
    }
}


let loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', checkLoginData);


/*function enableBuyButton() {

    let checkActiveLogin = localStorage.getItem('login');

    if (checkActiveLogin === 'true') {
        console.log('Here will be a function to open cart');
    } else {
        openLoginWindow();
    }
}

buyButton.addEventListener('click', enableBuyButton)*/

/*function enableShoppingCartButton() {

    const authorizationButton = document.getElementById('authorization-button');

    if (authorizationButton.clicked === true) {
        cartButton.disabled = false;
    } else {
        openLoginWindow();
    }
}

authorizationButton.addEventListener('click', enableShoppingCartButton);

*/
/*let cartItems = [];
const addToCartHandler = (id) => {
    productItems.map((item) => {
        if(item.id === id) {
let savedItems = [...cartItems, item];
localStorage.setItem('cartItems', JSON.stringify(savedItems));
        }
        return item;
    });
};

buyButton.addEventListener('click', addToCartHandler);*/
