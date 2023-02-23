const squareInput = document.querySelector('#square-input');
const squareRange = document.querySelector('#square-range');

squareRange.addEventListener('input', function () {
    squareInput.value = squareRange.value;
});

squareInput.addEventListener('input', function () {
    squareRange.value = squareInput.value;
});