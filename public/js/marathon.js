// ============================================
// TOGGLE 26 WEEK SCEDULE
// ============================================


const buttonTarget = document.getElementById("buttonTarget");
const numIncrement = document.getElementById("numIncrement");
const numToggles = document.querySelectorAll(".numToggles");
let numChange = false;

buttonTarget.addEventListener("click", () => {
    if (numChange) {
        numIncrement.textContent = "1";
        listDecrement();
        numChange = false;
    } else {
        numIncrement.textContent = "2";
        listIncrement();
        numChange = !numChange;
    }
});


function listIncrement() {
    for (let i = 0; i < numToggles.length; i++) {

        let numClean = parseInt(numToggles[i].textContent) + 10;
         numToggles[i].textContent = numClean.toString();
    }
}

function listDecrement() {
    for (let i = 0; i < numToggles.length; i++) {

        let numClean = parseInt(numToggles[i].textContent) - 10;
         numToggles[i].textContent = numClean.toString();
    }
}
