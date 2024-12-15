function handleBox(numBoxDOM) {
    numBoxDOM.addEventListener("click", () => {
        numBoxDOM.classList.add("target")
        document.querySelector("#sum-of-marked .border-text-box").textContent = sumOfBoxes(document.querySelectorAll(".target"))
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
    document.querySelector("#sum-of-all .border-text-box").textContent = sumOfBoxes(document.querySelectorAll(".box"))
}

const resetButtonDOM = document.querySelector("#sum-of-marked button")
resetButtonDOM.addEventListener("click", () => {
    const targetClassList = document.querySelectorAll(".target")
    for (let i = 0; i < targetClassList.length; i++) {
        targetClassList[i].classList.remove("target")
    }
    document.querySelector("#sum-of-marked .border-text-box").textContent = "-"
})