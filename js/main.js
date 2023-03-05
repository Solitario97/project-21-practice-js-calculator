const squareInput = document.querySelector('#square-input');
const squareRange = document.querySelector('#square-range');
const totalPriceElement = document.querySelector('#total-price');
const inputs = document.querySelectorAll('input');

/* Радиокнопки */
const radioType = document.querySelectorAll('input[name="type"]');
const radioBuilding = document.querySelectorAll('input[name="building"]');
const radioRooms = document.querySelectorAll('input[name="rooms"]');

/* Чекбоксы */
const ceiling = document.querySelector('input[name="ceiling"]');
const walls = document.querySelector('input[name="walls"]');
const floor = document.querySelector('input[name="floor"]');


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
    
    for (const radio of radioBuilding) {
        if (radio.checked) {
            totalPrice *= parseFloat(radio.value);
        }
    }

    for (const radio of radioRooms) {
        if (radio.checked) {
            totalPrice *= parseFloat(radio.value);
        }
    }

    if (ceiling.checked) {
        totalPrice *= parseFloat(ceiling.value);
    }

    if (walls.checked) {
        totalPrice *= parseFloat(walls.value);
    }
    
    if (floor.checked) {
        totalPrice *= parseFloat(floor.value);
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


const btn1 = document.querySelector('#btn-1');
const theme = document.querySelector('#theme');
btn1.addEventListener('click', function () {

    if (theme.href == 'css/main.css') {
        theme.href = 'css/dark-theme.css';
    } else {
        theme.href = 'css/main.css';
    }    
});