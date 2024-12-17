function handleBox(numBoxDOM) {/* nothing */ }

function mostRepNums() {
    const boxesDOM = document.querySelectorAll(".box")
    let counterArray = []; //TODO: change variable name (and dont forget to remove 0 from possible boxes)
    let counterArrayDOMS = [];// here too
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
            counterArrayDOMS = [boxesDOM[i]];
        }

        else if (counter == mostRepeatedTimes) {
            if (!counterArray.includes(boxesDOM[i].textContent)) {
                counterArray.push(boxesDOM[i].textContent);
            }
            counterArrayDOMS.push(boxesDOM[i]);
        }
    }
    return { Count: mostRepeatedTimes, RepeatedNums: counterArray, RepeatedNumsDOMS: counterArrayDOMS };
}



function handleCreation() {
    const mostRepDOM = document.querySelector("#most-repeated .border-text-box")
    const mostRepeatedNumbersObj = mostRepNums();
    if (mostRepeatedNumbersObj.Count <= 1) {
        mostRepDOM.textContent = "Nothing repeats"
    }
    else {
        mostRepDOM.textContent = `${mostRepeatedNumbersObj.RepeatedNums} (Repeated ${mostRepeatedNumbersObj.Count} times)`
        for (let i = 0; i < mostRepeatedNumbersObj.RepeatedNumsDOMS.length; i++) {
            mostRepeatedNumbersObj.RepeatedNumsDOMS[i].classList.add("repeated")
        }
    }
}

