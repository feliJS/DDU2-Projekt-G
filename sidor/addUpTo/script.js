function handleBox(numBoxDOM) {

}

function handleCreation() {

}

function addsUp(sumNum) {
    let foundCell = false;
    const boxes = document.querySelectorAll(".box")
    for (let i = 0; i < boxes.length; i++) {
        for (let x = 0; x < boxes.length; x++) {
            if (boxes[i] == boxes[x]) {
                continue;
            }
            if (parseInt(boxes[i].textContent) + parseInt(boxes[x].textContent) == sumNum) {
                boxes[i].classList.add("marked")
                boxes[x].classList.add("marked")
                foundCell = true;
                break;
            }

        }
        if (foundCell == true) {
            break;
        }
    }
}


const findCellsBtn = document.querySelector("#add-up-section button")
const addUpInput = document.querySelector("#add-up-section input")

findCellsBtn.addEventListener("click", () => {
    removeClassFromAll();
    addsUp(addUpInput.value)
})

addUpInput.value = 179