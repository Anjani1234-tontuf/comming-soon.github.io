const box = document.getElementById("box");
//control sources
const sliders = document.getElementsByClassName("slider");
const xTLSlider = document.getElementById("top-left");
const xTRSlider  = document.getElementById("top-right");
const xBRSlider = document.getElementById("bottom-right");
const xBLSlider = document.getElementById("bottom-left");
const yTLSlider = document.getElementById("top-left2");
const yTRSlider  = document.getElementById("top-right2");
const yBRSlider = document.getElementById("bottom-right2");
const yBLSlider = document.getElementById("bottom-left2");

const radiusValue = document.getElementById("border-value");
const copyBtn = document.getElementById("copy-btn");

//generate border radius values
function generateRadiusValues(){
    borderRadius = `${xTLSlider.value}% ${xTRSlider.value}% ${xBRSlider.value}% ${xBLSlider.value}% / ${yTLSlider.value}% ${yTRSlider.value}% ${yBRSlider.value}% ${yBLSlider.value}%`;
    console.log(borderRadius);
    box.style.borderRadius = borderRadius;
    radiusValue.innerText = `border-radius: ${borderRadius};`;
}

for(let i = 0; i < sliders.length; i++){
    sliders[i].addEventListener('input', () => {
        generateRadiusValues();
    })
};

//copy button is clicked
copyBtn.addEventListener('click', () => {
    copyBtn.innerText = 'Copied';
    //copy border-radius values
    navigator.clipboard.writeText(radiusValue.innerText);
    setTimeout(() => {
        copyBtn.innerText = 'Copy';
    }, 4000);
});