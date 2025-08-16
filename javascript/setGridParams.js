const btn = document.querySelector("button");

function res() {
  const cols = document.querySelectorAll(".col"); // Select all columns
  cols.forEach(col => col.remove()); // Remove each column
}


function ask() {
  let params = prompt("Set number of squares per side for the new grid.", deafultGridSize);
  let param = parseInt(params);

  if (param < 100) {
  createGrid(param);
  }
  else{
    alert("Number of squares per side must not exceed 100")
    ask();
  }
}

// function isGridValid(number) {

// }

btn.addEventListener('click', e => {
  res();
  ask();
  // isGridValid(value);
})
