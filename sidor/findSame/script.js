function handleBox(numBoxDOM) {
    numBoxDOM.addEventListener("click", () => {
        numBoxDOM.classList.add("marked")
        markNum(numBoxDOM.textContent) //from common.js
        updateText()
    })
}

function handleCreation() {

}

function updateText() {
    const foundBoxes = document.querySelectorAll(".marked")
    foundText.textContent = `${foundBoxes.length} copies of the number ${foundBoxes[0].textContent}`
}
const foundText = document.querySelector("#most-repeated p")
const resetBtn = document.querySelector("#most-repeated button")
resetBtn.addEventListener("click", () => {
    foundText.textContent = "Click on a number to find copies"
    const boxes = document.querySelectorAll(".box")
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].classList.remove("marked")
    }
})