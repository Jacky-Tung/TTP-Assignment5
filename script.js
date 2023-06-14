// Get the grid element
const grid = document.getElementById("grid");
var globalColor = "";

function addRow() {
  getSelectedColor();
  // Create a new row element
  const newRow = document.createElement("div");
  newRow.classList.add("row");

  // Get the current number of columns in the grid
  const numColumns = grid.firstChild ? grid.firstChild.childElementCount : 0;

  // Create cells for the new row
  for (let i = 0; i < numColumns; i++) {
    const newCell = document.createElement("span");
    newCell.classList.add("cell");
    newCell.innerText = "Cell";
    newCell.style.background = globalColor;
    newCell.addEventListener('click', (event) => {
      const cells = event.target;
      getSelectedColor();
      cells.style.background = globalColor;
    });
    newRow.appendChild(newCell);
  }

  // Append the new row to the grid
  grid.appendChild(newRow);
}

function addColumn() {
  getSelectedColor();
  // Get all existing rows in the grid
  const rows = Array.from(grid.children);

  // Create a new cell for each row
  rows.forEach((row) => {
    const newCell = document.createElement("span");
    newCell.classList.add("cell");
    newCell.innerText = "Cell";
    newCell.style.background = globalColor;
    newCell.addEventListener("click", (event) => {
      const cells = event.target;
      getSelectedColor();
      cells.style.background = globalColor;
    });
    row.appendChild(newCell);
  });
}

function removeRow() {
  const row = document.getElementsByClassName("row")[0];
  row.remove();
}

function removeColumn() {
  //go through each row and
  const row = document.getElementsByClassName("row");
  for (let item of row) {
    let itemtoRemove = item.lastChild;
    itemtoRemove.remove();
  }
}

function getSelectedColor() {
  const colorDropdown = document.getElementById("colorDropdown");
  const selectedColor = colorDropdown.value;
  globalColor = selectedColor;
}

// fill all uncolored cells with the currently selected color
function fillUncolored(){
  getSelectedColor();
  const cells = document.getElementsByClassName("cell");
  for(let cell of cells){
    if(cell.style.background === "")
      cell.style.background = globalColor;
  }
}

// fill all cells with the currently selected color
function fillAll(){
  getSelectedColor();
  const cells = document.getElementsByClassName("cell");
  for (let cell of cells) {
    cell.style.background = globalColor;
  }
}

// clear all cells/restore all cells to their original/initial color

