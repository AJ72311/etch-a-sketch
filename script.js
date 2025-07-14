const GRID_WIDTH = 650;
const GRID_HEIGHT = 650;

const containerDiv = document.querySelector("#grid-container");
let gridSize = 16;

// creates an etch-a-sketch grid of size gridSize-X-gridSize
function createGridDivs(gridSize) {
    for (let i = 0; i < gridSize ** 2; i++) {
        const newDiv = document.createElement('div');

        newDiv.style.width = `${GRID_WIDTH / gridSize}px`;  
        newDiv.style.height = `${GRID_HEIGHT / gridSize}px`;
        newDiv.classList.add('grid-div'); // for styling and flexbox layout

        // change div's bg color to a random color on hover
        newDiv.addEventListener('mouseover', () => {
            const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);

            newDiv.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        });

        containerDiv.appendChild(newDiv);
    }
}

createGridDivs(gridSize);