
const container = document.querySelector(".container");

const row = 16;
const col = 16;


function createGrid(rowItems,colItems){
  for (let i = 0; i < rowItems; i++) {
    const collumn = document.createElement("div");
    collumn.classList.add("col");
    container.appendChild(collumn);
    console.log("aa")
    if (i !== rowItems);{
      for (let a = 0; a < colItems; a++){
        const item = document.createElement("div")
        item.classList.add("colItem");
        collumn.appendChild(item);
      }

    }

  }
}
createGrid(row,col);
