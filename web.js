const poundInput = document.querySelector(".pounds > input");
const kiloInput = document.querySelector(".kilos > input");

function roundNum(num) {
    return Math.round(num*100)/100;
}

function poundstokilos () {
    const pounds = poundInput.value;
    const kilos = pounds/2.205;
    kiloInput.value = roundNum(kilos);
}

function kilostopounds () {
    const kilos = kiloInput.value;
    const pounds = kilos*2.205;
    poundInput.value = roundNum(pounds);
}

poundInput.addEventListener("input", poundstokilos);
kiloInput.addEventListener("input", kilostopounds);


