let cellNo = 4;//max value = 34 min value = 1


const gridPanel = document.querySelector("#grid-panel");

function makeGrid(){
  let cell = "";
  let cellSize = gridPanel.offsetWidth/cellNo;
console.log(cellSize)
  for(let row = 1; row <= cellNo; row++){
    for(let col = 1; col <= cellNo; col++){
      cell += `<div class="grid">${col}</div>`; 
    }
  }

  gridPanel.innerHTML = cell;
    gridPanel.style.gridTemplateColumns = `repeat(${cellNo}, 1fr)`;
    gridPanel.style.gridTemplateRows = `repeat(${cellNo}, 1fr)`;
}


document.querySelector("#grid-panel").addEventListener('click', function(dets){
  let clicked = dets.target;
  if (clicked.classList.contains('grid')) {
    console.log(clicked.classList);
    clicked.style.backgroundColor = "black";
  }
})


makeGrid();