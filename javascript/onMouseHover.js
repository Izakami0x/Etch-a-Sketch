const items = document.querySelectorAll(".item")


function globalEventListener(event, element, callback) {
  document.addEventListener(event, e => {
    if (e.target.matches(element)) {
      callback(e);
    }
  });
}

function fadeAnimation(target) {
  target.style.backgroundColor = "rgba(255, 0, 0, 0.8)";
  setTimeout(() => {
        target.style.backgroundColor = "rgba(255, 0, 0, 0.6)";
    }, 1000);

  setTimeout(() => {
        target.style.backgroundColor = "rgba(255, 0, 0, 0.4)";
    }, 2000);

  setTimeout(() => {
     target.style.backgroundColor = "rgba(255, 0, 0, 0.2)";
  }, 3000);
    setTimeout(() => {
     target.style.backgroundColor = "";
  }, 4000);
}




globalEventListener('mouseover', ".item", e => {
// const test = document.querySelector(e.target);
if (e.returnValue === true) {
  // e.target.classList.add("colored");
  let target = e.target;

  fadeAnimation(target);
}

});

// console.table(items);
