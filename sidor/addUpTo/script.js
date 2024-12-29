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

