let x = 0;
let array = Array();

function add() {
    x = Number(document.getElementById('number').value);
    array.push(x);
}

function display() {
    lengthArray = array.length;
    let text = "<ul>";
    for (let i = 0; i < lengthArray; i++) {
        text += "<li>" + 'Element' + i + "=" + array[i] + "<li>";
    }
     text+="</ul>";
    document.getElementById('element').innerHTML = text;

}