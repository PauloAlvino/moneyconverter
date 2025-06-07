import fetchConvert  from './fetch.js';
const form = document.querySelector('.form');
const result = document.querySelector('.result');
const conversion = document.querySelector('.conversion')
const converted = document.getElementById('converted')
const convert = async (e) => {
    e.preventDefault();
    const inputValue = document.getElementById('real').value.replace(',', '.');
    const selectedValue = document.getElementById('coin').value;
    const { total, currentValue } = await fetchConvert(inputValue, selectedValue);
    if (total) {
        result.style.display = 'block';
        conversion.innerText = `1 ${selectedValue.toUpperCase()} = R$ ${currentValue.toFixed(2)}`
        converted.innerText = `R$ ${total}`
    }
}

form.addEventListener('submit', convert)