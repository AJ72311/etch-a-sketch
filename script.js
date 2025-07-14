const GRID_WIDTH = 650;
const GRID_HEIGHT = 650;
let initialGridSize = 16;

const containerDiv = document.querySelector("#grid-container");
const changeDimensionsButton = document.querySelector("#dimensions-btn");

createGridDivs(initialGridSize); // create the initial grid with size 16x16 upon page load

changeDimensionsButton.addEventListener("click", () => {
    const newGridSize = parseInt(prompt(
        "Please enter a number N, your new grid will be of size NxN pixels!"
    ));

    // validate user entry was a number
    if (Number.isNaN(newGridSize)) {
        alert("Please input a number!");
    } else if (newGridSize > 100 || newGridSize < 1 ) {
        alert("Please enter a number less than 100 and greater than 0!");
    } else {
        createGridDivs(newGridSize); // create new grid
    }
});

// creates an etch-a-sketch grid of size gridSize-X-gridSize
function createGridDivs(gridSize) {
    containerDiv.innerHTML = ""; // clear container 

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