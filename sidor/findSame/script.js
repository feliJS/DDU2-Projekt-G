function handleBox(numBoxDOM) {
    numBoxDOM.addEventListener("click", () => {
        numBoxDOM.classList.add("found")
        markNum(numBoxDOM.textContent) //from common.js
    })
}

function handleCreation() {

}

