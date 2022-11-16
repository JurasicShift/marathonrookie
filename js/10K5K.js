// ============================================
// TOGGLE 10 WEEK SCEDULE
// ============================================


const buttonTarget = document.getElementById('buttonTarget');
const numIncrement = document.getElementById('numIncrement');
const numToggles = document.querySelectorAll('.numToggles');
let numChange = false;

buttonTarget.addEventListener('click', () => {
    if (numChange) {
        numIncrement.textContent = "7";
        listDecrement();
        numChange = false;
        console.log(numChange);
    } else {
        numIncrement.textContent = "10";
        listIncrement();
        numChange = !numChange;
        console.log(numChange);
    }
});

function listIncrement() {
    for (let i = 0; i < numToggles.length; i++) {

        let numClean = parseInt(numToggles[i].textContent) + 3;
         numToggles[i].textContent = numClean.toString();
    }
}

function listDecrement() {
    for (let i = 0; i < numToggles.length; i++) {

        let numClean = parseInt(numToggles[i].textContent) - 3;
         numToggles[i].textContent = numClean.toString();
    }
}