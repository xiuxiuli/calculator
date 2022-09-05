//get the screen html
var cur = document.getElementById("current");

function add(v){
    cur.value = cur.value + v;
}

function minus(v){
    cur.value = cur.value - v;
}

function minus(v){
    cur.value = cur.value * v;
}

function minus(v){
    cur.value = cur.value / v;
}

function calculate(){
    let result = eval(cur.value);
    cur.value = result;
}

function ac() {
    cur.value = "";
}

function bck() {
    var s = cur.value.substr(0, cur.value.length - 1);
    cur.value = s;
}