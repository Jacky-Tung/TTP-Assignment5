// Get the grid element
const grid = document.getElementById("grid");
var globalColor = "";
var isMouseDown = false;

document.addEventListener("mousedown", function () {
  isMouseDown = true;
});

document.addEventListener("mouseup", function () {
  isMouseDown = false;
});

// add rows to the grid
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
    newCell.value = globalColor;
    newCell.innerText = "Cell";
    newCell.style.background = globalColor;

    // click on a single cell, changing its color to the currently selected color
    newCell.addEventListener("click", (event) => {
      const cells = event.target;
      getSelectedColor();
      cells.style.background = globalColor;
    });
    // click and hold (mouseover) from a single cell (start) to a different cell (end) such that all affected/hovered-over cells from start to end change to the currently selected color
    newCell.addEventListener("mouseover", (event) => {
      if (isMouseDown) {
        const cells = event.target;
        getSelectedColor();
        cells.style.background = globalColor;
      }
    });

    newRow.appendChild(newCell);
  }

  // Append the new row to the grid
  grid.appendChild(newRow);
}

//  add columns to the grid
function addColumn() {
  getSelectedColor();
  // Get all existing rows in the grid
  const rows = Array.from(grid.children);

  // Create a new cell for each row
  rows.forEach((row) => {
    const newCell = document.createElement("span");
    newCell.value = globalColor;
    newCell.classList.add("cell");
    newCell.innerText = "Cell";
    newCell.style.background = globalColor;

    // click on a single cell, changing its color to the currently selected color
    newCell.addEventListener("click", (event) => {
      const cells = event.target;
      getSelectedColor();
      cells.style.background = globalColor;
    });

    // click and hold (mouseover) from a single cell (start) to a different cell (end) such that all affected/hovered-over cells from start to end change to the currently selected color
    newCell.addEventListener("mouseover", (event) => {
      if (isMouseDown) {
        const cells = event.target;
        getSelectedColor();
        cells.style.background = globalColor;
      }
    });

    row.appendChild(newCell);
  });
}

// remove rows from the grid
function removeRow() {
  const row = document.getElementsByClassName("row")[0];
  row.remove();
}

// remove columns from the grid
function removeColumn() {
  //go through each row and
  const row = document.getElementsByClassName("row");
  for (let item of row) {
    let itemtoRemove = item.lastChild;
    itemtoRemove.remove();
  }
}

// select a color from a dropdown menu of colors
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
function restore(){
  getSelectedColor();
  const cells = document.getElementsByClassName("cell");
  for (let cell of cells) {
    cell.style.background = cell.value;
  }
}

