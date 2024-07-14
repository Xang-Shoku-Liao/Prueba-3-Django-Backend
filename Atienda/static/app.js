

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



function addToCart(button) {
    var imgSrc = button.getAttribute('data-img');
    var price = parseFloat(button.getAttribute('data-price'));

    var img = document.createElement('img');
    img.src = imgSrc;

    var li = document.createElement('li');
    li.appendChild(img);

    function addOneMorePlant(imgSrc, price) {
    var img = document.createElement('img');
    img.src = imgSrc;

    var li = document.createElement('li');
    li.appendChild(img);

    addToCart({getAttribute: function(attr) {
        if(attr === 'data-img') return imgSrc;
        if(attr === 'data-price') return price.toString();
    }});

    updateQuantity(1); 
}


    var removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.className = 'buttonmylist';
    removeBtn.onclick = function() {
        removePlant(li, price);
        updateQuantity(-1);
    };

    function updateQuantity(amount) {
    var quantitySpan = document.querySelector('.quantity');
    var currentQuantity = parseInt(quantitySpan.textContent, 10);
    var newQuantity = currentQuantity + amount;
    if (newQuantity >= 0) { 
        quantitySpan.textContent = newQuantity;
    }
}

    var addOneMoreBtn = document.createElement('button');
    addOneMoreBtn.textContent = 'Add One More';
    addOneMoreBtn.className = 'buttonmylist';
    addOneMoreBtn.onclick = function() {
        addOneMorePlant(imgSrc, price);
        
    };
 
    li.appendChild(removeBtn);
    li.appendChild(addOneMoreBtn);

    document.querySelector('.listCard').appendChild(li);

    updateTotal(price); 
}

function updateTotal(price) {
    var totalDiv = document.querySelector('.total');
    var currentTotal = parseFloat(totalDiv.textContent);
    var newTotal = currentTotal + price;
    totalDiv.textContent = newTotal.toFixed(2);
}

function removePlant(li, price) {
    li.remove(); 
    updateTotal(-price); 
}

function addOneMorePlant(imgSrc, price) {
    var img = document.createElement('img');
    img.src = imgSrc;

    var li = document.createElement('li');
    li.appendChild(img);

 
    addToCart({getAttribute: function(attr) {
        if(attr === 'data-img') return imgSrc;
        if(attr === 'data-price') return price.toString();
    }});
}
