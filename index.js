const clock = function() {
    let getDate = new Date();
    document.getElementById('clock').innerHTML = getDate.toLocaleTimeString();
}

/*function addBox() {
    localStorage.setItem()
}*/

setInterval(function() { clock();}, 250);

//document.getElementById("myButton").addEventListener("click", addBox);