

function createBox() {
    const numBoxDOM = document.createElement("div")
    numBoxDOM.classList.add("box")
    numBoxDOM.style.display = "flex"
    numBoxDOM.style.justifyContent = "center"
    numBoxDOM.style.alignItems = "center"
    numBoxDOM.textContent = Math.floor(100 * Math.random())
    handleBox(numBoxDOM) //handles in each file
    numBoxesDOM.appendChild(numBoxDOM)
}


const inputDOM = document.querySelector("input")
inputDOM.value = "95"
const numBoxesDOM = document.querySelector("#num-boxes")

function autoFill(amount) {
    for (let i = 0; i < amount; i++) {
        createBox();
        handleCreation();

    }
}
autoFill(95);

document.querySelector("#create-nums button").addEventListener("click", () => {
    numBoxesDOM.innerHTML = "";
    autoFill(parseInt(inputDOM.value))
})