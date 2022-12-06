// Home section
const authorizationButton = document.getElementById('authorization-button');
const modalWindow = document.getElementById('modal-window');

authorizationButton.addEventListener('click', (event) => {
    const modalWindow = document.getElementById('modal-window')
    modalWindow.style.display = 'block';
const body = document.body;
})

const closeButton = document.getElementById('close-button')
closeButton.addEventListener('click', (event) => {
    modalWindow.style.display = 'none';
})


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
                    <button class="button buy-button">Buy</button>
                </div>
            </div>`
).join('');


/*

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

*/



