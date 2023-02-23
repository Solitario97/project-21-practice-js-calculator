const squareInput = document.querySelector('#square-input');
const squareRange = document.querySelector('#square-range');

const inputs = document.querySelectorAll('input');

const basePrice = 50000;

squareRange.addEventListener('input', function () {
    squareInput.value = squareRange.value;
});

squareInput.addEventListener('input', function () {
    squareRange.value = squareInput.value;
});

function calculate () {
    totalPrice = basePrice * parseInt(squareInput);
    console.log (totalPrice);
}

for (const input of inputs) {
    input.addEventListener('input', function () {
        calculate ();
    });


}