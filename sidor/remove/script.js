function handleBox(numBoxDOM) {/*nothing*/ }
function handleCreation() {/*nothing*/ }

function removeNum() {
    let allMarkedDOMS = document.querySelectorAll(".marked")
    if (allMarkedDOMS.length == 0) { removalCountDOM.textContent = "Nothing to remove" }
    else {
        for (let i = 0; i < allMarkedDOMS.length; i++) {
            allMarkedDOMS[i].style.backgroundColor = "tomato";
            allMarkedDOMS[i].textContent = "X";
        }
        removalCountDOM.textContent = `${randomNumber} removed ${allMarkedDOMS.length} times`;
    }
}

let randomNumber;
const removalCountDOM = document.getElementById("removal-count")
const randomNumberBtn = document.getElementById("generate-number-btn");

randomNumberBtn.addEventListener("click", () => {
    randomNumber = randomNum(0, 100);
    document.getElementById("current-number").textContent = randomNumber;
    markNum(randomNumber)
    document.getElementById("removal-count").textContent = "-";
});

const removeNumbersBtn = document.getElementById("remove-number-btn");
removeNumbersBtn.addEventListener("click", () => {
    removeNum()
});