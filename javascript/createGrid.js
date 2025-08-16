
const container = document.querySelector(".container");

let deafultGridSize = 16;



function createGrid(x){
  for (let i = 0; i < x; i++) {
    const collumn = document.createElement("div");
    collumn.classList.add("col");
    container.appendChild(collumn);
    console.log("rowItems" + i);
    // console.log("aa")
    if (i !== x) {
      for (let a = 0; a < x; a++){
        const item = document.createElement("div")
        item.classList.add(`item`);
        collumn.appendChild(item);
        // console.log("colItems" + a);

      }

    }

  }
}
createGrid(deafultGridSize);
// console.log(deafultGridSize);
