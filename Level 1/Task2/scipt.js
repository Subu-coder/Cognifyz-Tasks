let change = document.getElementById("change");
let count = 0;

change.onclick = function () {
    coloring();
}

let coloring = () => {
    let val1 = Math.floor(Math.random() * 256);
    let val2 = Math.floor(Math.random() * 256);
    let val3 = Math.floor(Math.random() * 256);
    document.getElementById("body").style = "background-color:rgb(" + val1 + "," + val2 + "," + val3 + ")";
}