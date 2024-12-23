function handleBox(numBoxDOM) {/*nothing*/ }

function mostRepNums() {
    const boxesDOM = document.querySelectorAll(".box")
    let mostFrequentNumbers = []; 
    let mostFrequentElements = [];
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
            mostFrequentNumbers = [boxesDOM[i].textContent];
            mostFrequentElements = [boxesDOM[i]];
        }

        else if (counter == mostRepeatedTimes) {
            if (!mostFrequentNumbers.includes(boxesDOM[i].textContent)) {
                mostFrequentNumbers.push(boxesDOM[i].textContent);
            }
            mostFrequentElements.push(boxesDOM[i]);
        }
    }
    return { Count: mostRepeatedTimes, RepeatedNums: mostFrequentNumbers, RepeatedNumsDOMS: mostFrequentElements };
}

function getMissingNums() {
    let missingNums = []
    const boxesDOM = document.querySelectorAll(".box")
    for (let i = 0; i < 100; i++) {
        let found = false;
        for (let x = 0; x < boxesDOM.length; x++) {
            if (boxesDOM[x].textContent == i) {
                found = true;
                break;
            }
        }
        if (!found) {
            missingNums.push(i)
        }
    }
    return missingNums

}


function handleCreation() {
    const mostRepDOM = document.querySelector("#most-repeated .info-box")
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

    const missingNumsDOM = document.querySelector("#nums-not-there .info-box")
    const missingNumsArray = getMissingNums();
    missingNumsDOM.textContent = `${missingNumsArray}`
}


