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
