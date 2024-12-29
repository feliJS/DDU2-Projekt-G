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
            if(parseInt(boxes[i].textContent) + parseInt(boxes[x].textContent) == sumNum){
                boxes[i].classList.add("addUpCell")
                boxes[x].classList.add("addUpCell")
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

findCellsBtn.addEventListener("click", ()=>{
    const boxes = document.querySelectorAll(".box")
    for (let i = 0; i < boxes.length; i++) { //make this into function in common.js this gets used in clear as well the same way
        if (boxes[i].classList.contains("addUpCell")) {
            boxes[i].classList.remove("addUpCell")
        }
    }
    addsUp(document.querySelector("#add-up-section input").value)
})