// Home section
let cartButton = document.getElementById('cart-button');
cartButton.disabled = true;


const authorizationButton = document.getElementById('authorization-button');

const loginWindow = document.getElementById('modal-login-window');

function openLoginWindow() {
    loginWindow.style.display = 'block';
}

authorizationButton.addEventListener('click', openLoginWindow);


const closeButton = document.getElementById('close-button');
closeButton.addEventListener('click', (event) => {
    loginWindow.style.display = 'none';
})

// Login
function storeLoginData() {
    localStorage.setItem('name', 'Hanna');
    localStorage.setItem('pw', '123456');
}

storeLoginData();

function checkLoginData() {
    // stored data from the register-form
    let storedName = localStorage.getItem('name');
    let storedPw = localStorage.getItem('pw');

    // entered data from the login-form
    let userName = document.getElementById('userName');
    let userPw = document.getElementById('userPw');

    // check if stored data from register-form is equal to data from login form
    if (userName.value == storedName && userPw.value == storedPw) {
        localStorage.setItem('login', 'true');
        alert('You are loged in.');
        cartButton.disabled = false;

    } else {
        alert('Data is not correct. Please, try again.');
    }
}

let loginButton = document.getElementById('login_btn');
loginButton.addEventListener('click', checkLoginData);

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
                    <button class="button buy-button" id="buy-button">Buy</button>
                </div>
            </div>`
).join('');

const buyButton = document.getElementById('buy-button');


function enableBuyButton() {

    let checkActiveLogin = localStorage.getItem('login');

    if (checkActiveLogin === 'true') {
        console.log('User is logged in.');
    } else {
        openLoginWindow();
    }
}

buyButton.addEventListener('click', enableBuyButton)

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
