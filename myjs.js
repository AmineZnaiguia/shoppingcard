function remove(block){
let myblock = document.querySelector('#'+block);
myblock.parentNode.removeChild(myblock);
}
let plus = Array.from(document.querySelectorAll('.fa-plus-circle'))
let moin = Array.from(document.querySelectorAll('.fa-minus-circle'))
let price = document.querySelectorAll('.myprice')
let qutt = document.querySelectorAll('.qtt')
let totale = document.getElementById('total')

for(let a of plus){
    a.addEventListener('click', function(event){
     a.nextElementSibling.innerHTML= Number(a.nextElementSibling.innerHTML) + 1;
     totale.innerHTML = total()
 })
}

for(let a of moin){
    a.addEventListener('click', function(event){
    if(Number( a.previousElementSibling.innerHTML) > 0){
      a.previousElementSibling.innerHTML = Number( a.previousElementSibling.innerHTML) - 1;
      totale.innerHTML = total()
    }
    })
}

function total(){
    let qutt = document.querySelectorAll('.qtt')
    let totale = document.getElementById('total')
    let sum = 0;
    for(let i=0; i < price.length; i++){
        
        
        sum = sum +  (parseInt(qutt[i].innerHTML) * parseInt(price[i].innerHTML))
    }
    return parseInt(sum)

}

