

function createBox(){
    const numBoxDOM = document.createElement("div")
    numBoxDOM.classList.add("box")
    numBoxDOM.style.display = "flex"
    numBoxDOM.style.justifyContent = "center"
    numBoxDOM.style.alignItems = "center"
    numBoxDOM.textContent = Math.floor(100 * Math.random())
    handleBox(numBoxDOM) //handles in each file
    numBoxesDOM.appendChild(numBoxDOM)
}


const inputDOM = document.querySelector("input")
const numBoxesDOM = document.querySelector("#num-boxes")



document.querySelector("#create-nums button").addEventListener("click", () =>{
    numBoxesDOM.innerHTML = "";
    for (let i = 1; i <= parseInt(inputDOM.value); i++) {
        createBox();
        handleCreation();
    }
})