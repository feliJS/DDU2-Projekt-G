function handleBox(numBoxDOM){
    numBoxDOM.addEventListener("click", () =>{
        numBoxDOM.classList.add("target")
        numBoxDOM.style.backgroundColor = "green"
        document.querySelector("#sum-of-marked .border-text-box").textContent = sumOfBoxes(document.querySelectorAll(".target"))
    })
}

function sumOfBoxes(boxList){
    let nums = 0
    for (let i = 0; i < boxList.length; i++) {
        nums += parseInt(boxList[i].textContent)
    }
    return nums
}

function handleCreation() {
    document.querySelector("#sum-of-all .border-text-box").textContent = sumOfBoxes(document.querySelectorAll(".box"))
}