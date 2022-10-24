//<-------------Ex 01------------->//
const btnEx01     = document.querySelector('.btn-ex01');
btnEx01.addEventListener('click', () => {
    const inpEx01 = document.querySelector('.inp-ex01').value;
    let pEx01     = document.querySelector('.p-ex01');
    if (inpEx01.length > 1) {
        pEx01.innerHTML = `Essa palavra tem ${inpEx01.length} letras`;
    }
    else {
        pEx01.innerHTML = `Essa palavra tem ${inpEx01.length} letra`;
    }
})
//<-------------Ex 01------------->//



//<-------------Ex 02------------->//
let imgEx02 = document.querySelector('.img-ex02');
let onOffEx02 = 0
imgEx02.addEventListener('click', () => {
    if (onOffEx02 == 0) {
        imgEx02.src = 'https://github.com/gabrieldarezzo/helpjs-ravi/blob/master/images/lampada-on.jpg?raw=true';
        onOffEx02 = 1;
    }
    else if (onOffEx02 == 1) {
        imgEx02.src = 'https://github.com/gabrieldarezzo/helpjs-ravi/blob/master/images/lampada.jpg?raw=true';
        onOffEx02 = 0;
    }
})
/*
imgEx02.addEventListener('mouseover', () => {
    if (onOffEx02 == 0) {
        imgEx02.src = 'https://github.com/gabrieldarezzo/helpjs-ravi/blob/master/images/lampada-on.jpg?raw=true';
        onOffEx02 = 1;
    }
    else if (onOffEx02 == 1) {
        imgEx02.src = 'https://github.com/gabrieldarezzo/helpjs-ravi/blob/master/images/lampada.jpg?raw=true';
        onOffEx02 = 0;
    }
})
*/
//<-------------Ex 02------------->//



//<-------------Ex 03------------->//
const inpEx03 = document.querySelector('.inp-ex03');
inpEx03.addEventListener('blur', () => {
    let value = inpEx03.value.replace(/^([\d]{3})([\d]{3})([\d]{3})([\d]{2})$/, "$1.$2.$3-$4");
    inpEx03.value = value;
})
//<-------------Ex 03------------->//




