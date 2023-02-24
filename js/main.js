const squareInput = document.querySelector('#square-input');
const squareRange = document.querySelector('#square-range');
const totalPriceElement = document.querySelector('#total-price');

const radioType = document.querySelectorAll('input[name="type"]');
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

    for (const radio of radioType) {
        if (radio.checked) {
            totalPrice *= parseFloat(radio.value);
        }
    }

    /* приводит формат числа в более удобно-читаемый вид */
    const formatter = new Intl.NumberFormat('ru');
    totalPriceElement.textContent = formatter.format(totalPrice);
}

calculate();  

for (const input of inputs) {
    input.addEventListener('input', function (){
        calculate();    
    });
}
