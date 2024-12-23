function handleBox(numBoxDOM) {/*nothing*/}
function handleCreation() {/*nothing*/}

function randomNum() {
    let randomNum = Math.floor(Math.random() * 100);
    return randomNum

}
function markNum(randomNum) {
    const boxes = document.querySelectorAll(".box")
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].classList.remove("marked")
        if (boxes[i].textContent == randomNum) {
            boxes[i].classList.add("marked")
        }
    }
}

let randomNumber; 

const randomNumberBtn = document.getElementById("generate-number-btn"); 

randomNumberBtn.addEventListener("click", () => {
    randomNumber = randomNum();
    document.getElementById("current-number").textContent = randomNumber;
    markNum(randomNumber)
    document.getElementById("removal-count").textContent = "-";
});

