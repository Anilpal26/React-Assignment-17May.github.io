console.log('Filter Data');

const products = [ 
    { product: 'banana', price: 3 }, 
    { product: 'mango', price: 6 }, 
    { product: 'avocado', price: 8 }, 
    { product: 'coffee', price: 10 }, 
    { product: 'potato', price: '' }, 
    { product: 'tea', price: '' }
]

let sum = 0;
let prodName = [];
const AddPrice = document.getElementById('AddedPrice');
const ProductPriceless = document.getElementById('PriceLessProcuct');

function showPrice(){
    products.forEach(P => {
       sum = sum + P.price
       console.log(sum)
       AddedPrice.innerHTML = sum;
    });
}
function showPricelessProduct(){
    products.filter(P => {
       if(P.price == ''){
        prodName.push(P.product + "<br>");
        console.log(prodName)
        ProductPriceless.innerHTML = prodName;
       }
    });
}





