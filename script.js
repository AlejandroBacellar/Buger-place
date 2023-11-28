const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-all')
const buttonMapAll = document.querySelector('.map-all')
const buttonReduceAll = document.querySelector('.reduce-all')
const filter = document.querySelector('.filter-all')

function formatCurrency(value){
const newValue = value.toLocaleString('pt-br',{
style:'currency',
currency:'BRL',

})
return newValue
}

let myLi = ''

function showAll(productsArray) {
    let myLi = ''
    productsArray.forEach((product) =>  {
        myLi = myLi + `
            <li>
                <img src="${product.src}">
                <p>${product.name}</p>
                <p class="itens-price">${formatCurrency(product.price)}</p>
            </li>
        `
    })

    list.innerHTML = myLi
}
    function mapAllItems(){
    const  newPrices = menuOptions.map((product) => ({
      ...product,
      price:product.price * 0.9//10% de desconto!
      
    }))

 showAll(newPrices)
}

function reduceAllItems (){
const totalValue = menuOptions.reduce(( acc, curr )=> acc + curr.price,0)

list.innerHTML = `

            <li>
        
                <p> O valor total dos items é R$ ${formatCurrency(totalValue)}</p>

            </li>
        `
}

function filterJustVegan(){
    const justVegan = menuOptions.filter ((item) => item.vegan)

    showAll(justVegan)
}

buttonShowAll.addEventListener('click',() => showAll(menuOptions))
buttonMapAll.addEventListener('click', mapAllItems)
buttonReduceAll.addEventListener('click', reduceAllItems)
filter.addEventListener('click', filterJustVegan)





