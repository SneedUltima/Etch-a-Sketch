const gridContainer = document.querySelector(".grid-container")
const gridItem = document.querySelector(".grid-item")
const clear= document.querySelector("#clear")
const size = document.querySelector("#size")
const slider = document.querySelector("#range")
const sliderValue = document.querySelector("#slider-value")

// Create grid layout on load of size 16x16
window.addEventListener('load', () => createGrid(256));

// Function to create grid layout
function createGrid(n) {
    for(i = 0; i < n; i++) {
        const divGrid = document.createElement("div");
        divGrid.classList.add('grid-item'); 
        divGrid.textContent = "";
        divGrid.style.border = "1px solid black"
        gridContainer.appendChild(divGrid);
        divGrid.addEventListener("mouseover", () => {
            divGrid.style.backgroundColor = "black";
        })
    }
}

// Function to remove created divs from parent
function clearGrid(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

// Event listener to clear grid and change size of grid on slider change
slider.oninput = function() {
    sliderValue.textContent = `${this.value} x ${this.value}`;
    clearGrid(gridContainer)
    gridContainer.style.gridTemplateColumns = `repeat(${this.value}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${this.value}, 1fr)`;
    createGrid(this.value * this.value)
}