function handleBox(numBoxDOM) {

}

function mostRepNums() {
    const boxesDOM = document.querySelectorAll(".box")
    let counterArray = [];
    let counter = 0;
    let mostRepeatedTimes = 0;

    for (let i = 0; i < boxesDOM.length; i++) {
        counter = 0;
        for (let x = 0; x < boxesDOM.length; x++) {
            if (boxesDOM[i].textContent == boxesDOM[x].textContent) {
                counter++
            }
        }
        if (counter > mostRepeatedTimes) {
            mostRepeatedTimes = counter;
            counterArray = [boxesDOM[i].textContent];
        }

        else if (counter == mostRepeatedTimes && !counterArray.includes(boxesDOM[i].textContent)) {
            counterArray.push(boxesDOM[i].textContent);
        }

    }
    return { Count: mostRepeatedTimes, RepeatedNums: counterArray };
}

function handleCreation() {
    return console.log(mostRepNums())
}

