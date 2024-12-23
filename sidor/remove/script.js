function handleBox(numBoxDOM) {/*nothng*/ }

function randomNumBox(){
    const boxes = document.querySelectorAll(".box")
    let randomIndex = Math.floor(Math.random() * boxes.length); 
    return boxes[randomIndex];
    //querySelectorAll - math.random a index from the dom elements
    //return the specific DOM element
}
function markNum(randomBox){
    //take in the random box, mark all the boxes it matches wit
    //return array
}
function removeNum(){
    array = markNum(randomNumBox())
    //use array, loop thru it and on each element put color red and change textContent
}

function handleCreation() {
    console.log(randomNumBox());
    
   //use the randomNumBox to check textcontent of the random and put that in as text
   //use removeNum to display which ones got removed
}

let randomBoxes = [];