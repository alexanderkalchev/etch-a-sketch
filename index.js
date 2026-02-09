const container = document.querySelector(".container");
for(let i = 0; i < 256; i++){
    const div = document.createElement("div");
    div.setAttribute("class", "square");
    container.appendChild(div);
}

container.addEventListener("mouseover", (e) => {
    if(e.target.getAttribute("class") === "square"){
        e.target.classList.add("over");
    }
})

container.addEventListener("mouseout", (e) => {
    if(e.target.getAttribute("class") === "square"){
        e.target.classList.remove("over");
    }
})