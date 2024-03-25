let cards = document.querySelector('.cards');
let filteredCards = document.querySelector('.filtered-cards');
let resetBtn = document.querySelector('#resetBtn')
let searchBtn = document.querySelector('#searchBtn')
let searchInpt = document.querySelector('#searchInpt')
let count = document.querySelector('.count')




fetch('https://dummyjson.com/products').then(response => response.json()).then(data => showproducts(data.products));


function showproducts(arr){
    displayItems(arr)
    search(arr)
    reset()
}
    

function displayItems(arr) {
    arr.forEach(item => {
        let card =  `<div class="card" style="width: 18rem;">
        <img src="${item.images[0]}" class="card-img-top imgg" alt="...">
            <div class="card-body">
            <h5 class="card-title">${item.brand}</h5>
            <p class="card-text txt">${item.description}</p>
            <p>Price : ${item.price}$</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>`
         cards.innerHTML += card;
    })
    count.innerText = `Result : ${arr.length}`

}

function search(newarr){
    searchBtn.addEventListener('click', function(){
        filteredCards.innerHTML = ''
        let cnr = 0 

            newarr.forEach(item => {
                if(searchInpt.value.toLowerCase() == item.brand.toLowerCase()){
                    
                    cards.style.display = 'none'
                    let card =  `<div class="card" style="width: 18rem;">
                            <img src="${item.images[0]}" class="card-img-top imgg" alt="...">
                                <div class="card-body">
                                <h5 class="card-title">${item.brand}</h5>
                                <p class="card-text txt">${item.description}</p>
                                <p>Price : ${item.price}$</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>`
                    filteredCards.innerHTML += card
                    cnr++
                    count.innerText = `Result : ${cnr}`
                }
        
            })
            searchInpt.value = ''

    }    
)}

function reset(){
    resetBtn.addEventListener('click', function(){location.reload()})
}