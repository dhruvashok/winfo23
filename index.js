function showOpportunity() {
    // var status = document.getElementById("hideTheImage").style.display;
    document.getElementById("hideTheImage").style.display = 'block';
}

function changeColor(elem) {
    elem.style.backgroundColor = "#CDB3D0";
    showOpportunity();
}

function resetColor(elem) {
    elem.style.backgroundColor = "white";
}