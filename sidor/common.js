function randomNum(min, max) { //min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function createBox() {
    const numBoxDOM = document.createElement("div")
    numBoxDOM.classList.add("box")
    numBoxDOM.style.display = "flex"
    numBoxDOM.style.justifyContent = "center"
    numBoxDOM.style.alignItems = "center"
    numBoxDOM.textContent = randomNum(0, 100)
    handleBox(numBoxDOM) //handles in each file
    numBoxesDOM.appendChild(numBoxDOM)
}

function autoFill(amount) {
    for (let i = 0; i < amount; i++) {
        createBox();
    }
    handleCreation();
}

function markNum(num) { //marks numbers with colors used in remove and findSame
    const boxes = document.querySelectorAll(".box")
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].classList.remove("marked")
        if (boxes[i].textContent == num) {
            boxes[i].classList.add("marked")
        }
    }
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
