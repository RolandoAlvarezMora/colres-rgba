
const redSlider = document.getElementById('red');
const greenSlider = document.getElementById('green');
const blueSlider = document.getElementById('blue');

const redValue = document.getElementById('redValue');
const greenValue = document.getElementById('greenValue');
const blueValue = document.getElementById('blueValue');


function updateBackgroundColor() {
    const r = redSlider.value;
    const g = greenSlider.value;
    const b = blueSlider.value;

    
    redValue.textContent = r;
    greenValue.textContent = g;
    blueValue.textContent = b;

    
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}


redSlider.addEventListener('input', updateBackgroundColor);
greenSlider.addEventListener('input', updateBackgroundColor);
blueSlider.addEventListener('input', updateBackgroundColor);


updateBackgroundColor();
