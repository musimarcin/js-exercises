function add7() {
    const number7 = parseInt(document.getElementById("input-add7").value);
    let result = number7 + 7;
    document.getElementById("output-add7").innerHTML = result;
}

function multiply() {
    const number_multiply1 = parseInt(document.getElementById("input-multiply1").value);
    const number_multiply2 = parseInt(document.getElementById("input-multiply2").value);

    let result = number_multiply1 * number_multiply2;

    document.getElementById("output-multiply").innerHTML = result;
}

function capitalize() {
    const word = document.getElementById("input-capitalize").value;
    let firstLetter = word.slice(0,1);
    let upperFirst = firstLetter.toUpperCase();
    let result = word.replace(word[0],upperFirst);
    document.getElementById("output-capitalize").innerHTML = result;
}

function lastLetter() {
    const string_lastLetter = document.getElementById("input-last-letter").value.toString();
    let string_length = string_lastLetter.length;
    let last_letter = string_lastLetter.slice(string_length-1);
    document.getElementById("output-last-letter").innerHTML = last_letter;
}