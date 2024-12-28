function handleBox(numBoxDOM) { //also here, target class gets thrown around alot should i change it somehow not to be too repetitive??
    numBoxDOM.addEventListener("click", () => {
        if (numBoxDOM.classList.contains("target")) {
            numBoxDOM.classList.remove("target")
            numBoxDOM.textContent = randomNum(0, 100)
        }
        else {
            numBoxDOM.classList.add("target")
            numBoxDOM.textContent = ""
        }
    })
}

function handleCreation() {/*nothing*/ }

//could argue that the function bellow is already used in findSame? anyway i could fix so that they are different?
const fillClearedBtn = document.querySelector("#fill-clear button")
fillClearedBtn.addEventListener("click", () => {
    const boxes = document.querySelectorAll(".box")
    for (let i = 0; i < boxes.length; i++) {
        if (boxes[i].classList.contains("target")) {
            boxes[i].classList.remove("target")
            boxes[i].textContent = randomNum(0, 100)
        }
    }
})