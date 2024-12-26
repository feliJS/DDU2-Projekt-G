

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

function autoFill(amount) {
    for (let i = 0; i < amount; i++) {
        createBox();
    }
    handleCreation();
}

const homeLinkDOM = document.createElement("a")
homeLinkDOM.setAttribute("href", "../index.html")
homeLinkDOM.textContent = "Home"
document.getElementsByClassName("center")[0].appendChild(homeLinkDOM)

const createTextInfoDOM = document.createElement("p")
createTextInfoDOM.textContent = "How many numbers in the grid?"
document.getElementById("create-nums").appendChild(createTextInfoDOM)


const inputDOM = document.createElement("input")
inputDOM.setAttribute("type", "text")
document.getElementById("create-nums").appendChild(inputDOM)
inputDOM.value = "95"

const createButtonDOM = document.createElement("button")
createButtonDOM.textContent = "Create"
document.getElementById("create-nums").appendChild(createButtonDOM)

const numBoxesDOM = document.querySelector("#num-boxes")

autoFill(95);

document.querySelector("#create-nums button").addEventListener("click", () => {
    numBoxesDOM.innerHTML = "";
    autoFill(parseInt(inputDOM.value))

})
