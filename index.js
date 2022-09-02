const gridContainer = document.querySelector(".grid-container")
const gridItem = document.querySelector(".grid-item")
const clear= document.querySelector("#clear")
const size = document.querySelector("#size")
const slider = document.querySelector("#range")
const sliderValue = document.querySelector("#slider-value")


// Create grid layout on load of size 16x16
window.addEventListener('load', () => gridLayout(256));

// Function to create grid layout
function gridLayout(n) {
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

function createGrid(value) {
    gridContainer.style.gridTemplateColumns = `repeat(${value}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${value}, 1fr)`;
    gridLayout(value * value)
}

clear.addEventListener("click", () => {
    clearGrid(gridContainer)
    createGrid(slider.value)
}
)

// Function to remove created divs from parent
function clearGrid(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

// Event listener to clear grid and change size of grid on slider change
slider.oninput = function() {
    console.log(slider);
    value = this.value
    sliderValue.textContent = `${this.value} x ${this.value}`;
    clearGrid(gridContainer)
    createGrid(value)
}


