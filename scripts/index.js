// Home section

//Shop section

// const peaceIcon = document.getElementById("peace-solid-icon");

// peaceIcon.src = '../images/peace-solid.svg';



const productItemsImages = [
    {
        id: "health",
        img: "../images/hospital-regular.svg"
    },
    {
        id: "love",
        img: "../images/heart-regular.svg"
    },
    {
        id: "time",
        img: "../images/clock-regular.svg"
    },
    {
        id: "peace",
        img: "../images/peace-solid.svg"
    },
];



    const productItemsElems = productItemsImages.map(element => {
     /*   let elem = document.createElement("div");
        elem.setAttribute("class", "product");*/
        let productItem = `
            <img alt="product icon" id="${element.id}" class="image-item" src="${element.img}"> `;
        // elem.innerHTML = productItem;
        return productItem;
    });
console.log(productItemsElems);


const imgItemBoxes = document.querySelectorAll("div.imageItemBox");
console.log(imgItemBoxes);
[...imgItemBoxes].map(element => {
    element.innerHTML = productItemsElems.map(element => element);
} );

console.log(imgItemBoxes);
/*    let container = document.querySelector(".product-list");
    for (const product of productItems) {
        container.append(product);
    }*/



