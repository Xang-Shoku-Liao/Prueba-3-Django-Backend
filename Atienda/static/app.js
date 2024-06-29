

let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Calathea Orbifolia',
        image: '1.png',
        price: 28000
    },
    {
        id: 2,
        name: 'Sanseviera',
        image: '2.png',
        price: 15000
    },
    {
        id: 3,
        name: 'Monstera',
        image: '3.png',
        price: 25000
    },
    {
        id: 4,
        name: 'Calathea Medallion',
        image: '4.png',
        price: 12000
    },
    {
        id: 5,
        name: 'Pilea Peperomioides',
        image: '5.png',
        price: 10000
    },
    {
        id: 6,
        name: 'Areca',
        image: '6.png',
        price: 17000
    },
    {
        id: 7,
        name: 'Ficus Lyrata XL',
        image: '7.png',
        price: 70000
    },
    {
        id: 8,
        name: 'Limonero',
        image: '8.png',
        price: 20000
    },
    {
        id: 9,
        name: 'Alocasia California',
        image: '9.png',
        price: 60000
    }
   

];



let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
    <img src="/static/image/${value.image}"> 
    <div class="title">${value.name}</div>
    <div class="price">${value.price.toLocaleString()}</div>
    <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
    <div><img src="/static/image/${value.image}"/></div>
    <div>${value.name}</div>
    <div>${value.price.toLocaleString()}</div>
    <div>
        <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
        <div class="count">${value.quantity}</div>
        <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
    </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}