function handleBox(numBoxDOM) {
    numBoxDOM.addEventListener("click", () => {
        numBoxDOM.classList.add("marked")
        sumOfMarkedInfoBox.textContent = sumOfBoxes(document.querySelectorAll(".marked"))
    })
}

function sumOfBoxes(boxList) {
    let nums = 0
    for (let i = 0; i < boxList.length; i++) {
        nums += parseInt(boxList[i].textContent)
    }
    return nums
}

function handleCreation() {
    sumOfAllInfoBox.textContent = sumOfBoxes(document.querySelectorAll(".box"))
}

const sumOfMarkedInfoBox = document.querySelector("#sum-of-marked .info-box")
const sumOfAllInfoBox = document.querySelector("#sum-of-all .info-box")
const resetButtonDOM = document.querySelector("#sum-of-marked button")
resetButtonDOM.addEventListener("click", () => {
    removeClassFromAll();
    sumOfMarkedInfoBox.textContent = "-"
})