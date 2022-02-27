const CELL_COLOR_WHITE = "#fff";
const CELL_COLOR_BLACK = "#000000";

export function board(SIZE) {
  let padding = 7;
  let fontSize = 18;

  document.getElementById("Board").innerHTML = "";
  document.getElementById("Iterations").innerHTML = "";

  const container = document.getElementById("Board");

  container.style.setProperty("--Qgrid-rows", SIZE);
  container.style.setProperty("--Qgrid-cols", SIZE);

  for (let j = 0; j < SIZE * SIZE; j++) {
    let cell = document.createElement("div");
    let item = document.createElement("i");

    cell.appendChild(item).className = "fas fa-crown";
    container.appendChild(cell).className = "Qgrid-item q-array-tile";
  }

  const arrayTiles = document.getElementsByClassName("q-array-tile");
  const crownsI = document.getElementsByClassName("fa-crown");
  for (let l = 0; l < arrayTiles.length; l++) {
    arrayTiles[l].style.padding = `${padding}px`;

    crownsI[l].style.fontSize = `${fontSize}px`;
  }
  var c = 0;
  for (var a = 0; a < 8; a++) {
    for (var b = 0; b < 8; b++) {
      if ((a + b) % 2 == 0) {
        arrayTiles[c].style.backgroundColor = CELL_COLOR_BLACK;
        crownsI[c].style.color = CELL_COLOR_BLACK;
        c++;
      } else {
        arrayTiles[c].style.backgroundColor = CELL_COLOR_WHITE;
        crownsI[c].style.color = CELL_COLOR_WHITE;
        c++;
      }
    }
  }
}
