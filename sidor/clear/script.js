function handleBox(numBoxDOM) { //also here, target class gets thrown around alot should i change it somehow not to be too repetitive??
    numBoxDOM.addEventListener("click", () => {
        if (numBoxDOM.classList.contains("marked")) {
            numBoxDOM.classList.remove("marked")
            numBoxDOM.textContent = randomNum(0, 100)
        }
        else {
            numBoxDOM.classList.add("marked")
            numBoxDOM.textContent = ""
        }
    })
}

function handleCreation() {/*nothing*/ }

//could argue that the function bellow is already used in findSame? anyway i could fix so that they are different?
const fillClearedBtn = document.querySelector("#fill-clear button")
fillClearedBtn.addEventListener("click", () => {
    removeClassFromAll((box) => { box.textContent = randomNum(0, 100) })
})