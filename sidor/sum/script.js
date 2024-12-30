function handleBox(numBoxDOM) {
    numBoxDOM.addEventListener("click", () => {
        numBoxDOM.classList.add("marked")
        document.querySelector("#sum-of-marked .info-box").textContent = sumOfBoxes(document.querySelectorAll(".marked"))
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
    document.querySelector("#sum-of-all .info-box").textContent = sumOfBoxes(document.querySelectorAll(".box"))
}

const resetButtonDOM = document.querySelector("#sum-of-marked button")
resetButtonDOM.addEventListener("click", () => {
    removeClassFromAll();
    document.querySelector("#sum-of-marked .info-box").textContent = "-"
})