const container = document.querySelector(".container");
const generateButton = document.querySelector(".generate");
const resetButton = document.querySelector(".reset");

container.addEventListener("mouseover", (e) => {
    if(e.target.classList.contains("square")){
        e.target.classList.add("over");
    }
});

generateButton.addEventListener("click", (e) => {
    let size = prompt("Enter size");
    console.log(size);
    generateGrid(size, container);
});

resetButton.addEventListener("click", (e) => {
    const divs = document.querySelectorAll("div.square");
    divs.forEach((node) => node.classList.remove("over"));
});

function generateGrid(size, container){
    container.innerHTML = "";
    const squareSide = (960 - (size - 1)*4)/size;
    for(let i = 0; i < size**2; i++){
        const div = document.createElement("div");
        div.setAttribute("style", `width: ${squareSide}px; height: ${squareSide}px`);
        div.setAttribute("class", "square");
        container.appendChild(div);
    }   
}

generateGrid(16, container);

