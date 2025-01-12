function handleBox(numBoxDOM) {
    numBoxDOM.addEventListener("click", () => {
        if (numBoxDOM.classList.contains("marked")) {
            numBoxDOM.classList.remove("marked")
            numBoxDOM.textContent = randomNum(0, 99)
        }
        else {
            numBoxDOM.classList.add("marked")
            numBoxDOM.textContent = ""
        }
    })
}

function handleCreation() {}
const fillClearedBtn = document.querySelector("#fill-clear button")
fillClearedBtn.addEventListener("click", () => {
    removeClassFromAll((box) => { box.textContent = randomNum(0, 99) })
})