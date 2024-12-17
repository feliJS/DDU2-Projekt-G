function handleBox(numBoxDOM) {

}

function mostRepNums() {
    const boxesDOM = document.querySelectorAll(".box")
    let counterArray = [];
    let counter = 0;
    for (let i = 0; i < boxesDOM.length; i++) {
        counter = 0;
        for (let x = 0; x < boxesDOM.length; x++) {
            if (boxesDOM[i].textContent == boxesDOM[x].textContent) {
                counter++
            }
        }
        counterArray.push(counter)
    }
    return counterArray;
}

function handleCreation() {
    return console.log(mostRepNums())
}

