const squareInput = document.querySelector('#square-input');
const squareRange = document.querySelector('#square-range');
const totalPrice1 = document.querySelector('#total-price');


const inputs = document.querySelectorAll('input');
const basePrice = 50000;

squareRange.addEventListener('input', function () {
    squareInput.value = squareRange.value;
});

squareInput.addEventListener('input', function () {
    squareRange.value = squareInput.value;
});

function calculate() {
    let totalPrice = basePrice * parseInt(squareInput.value);
    console.log(totalPrice);
    totalPrice1.textContent = totalPrice;
}

calculate();  

for (const input of inputs) {
    input.addEventListener('input', function (){
        calculate();    
    });
}