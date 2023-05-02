//arrays
const alear = [
    60, 35, 20, 45, 50, 40, 25, 25, 5
];
const divineChild = [
    10, 10, 0, 10, 15, 0, 10, 5, 5
];
const divineDragon = [
    10, 10, 0, 10, 15, 15, 15, 10, 5
];
const fellChild = [
    10, 10, 25, 10, 5, 10, 25, 0, 0
]

// suma de los arrays

var suma1 = alear.map( (stat, id) => stat + divineChild[id] );
var suma2 = alear.map( (stat, id) => stat + divineDragon[id] );
var suma3 = alear.map( (stat, id) => stat + fellChild[id] );



//DOM
//div padre
let container = document.getElementById("statsArray");
//iterar el array
for (const stat of alear){
    let li = document.createElement("li");
    li.innerHTML = stat
    container.appendChild(li)
}


//que se muestren al clickear los botones
document.getElementById("divDrag").onclick = function() {divDr()};
document.getElementById("divChld").onclick = function() {divChld()};
document.getElementById("fellChld").onclick = function() {fellChld()};


function divDr() {
  document.getElementById("contentShow").classList.toggle("show");
}
let respuesta1 = document.getElementById("contentShow");
    for (const stat of suma2){
        let li = document.createElement("li");
        li.innerHTML = stat
        respuesta1.appendChild(li)
}

function divChld() {
    document.getElementById("contentShow1").classList.toggle("show");
  }
  let respuesta2 = document.getElementById("contentShow1");
      for (const stat of suma1){
          let li = document.createElement("li");
          li.innerHTML = stat
          respuesta2.appendChild(li)
  }


  function fellChld() {
    document.getElementById("contentShow2").classList.toggle("show");
  }
  let respuesta3 = document.getElementById("contentShow2");
      for (const stat of suma3){
          let li = document.createElement("li");
          li.innerHTML = stat
          respuesta3.appendChild(li)
  }