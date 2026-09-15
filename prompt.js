
var output = document.getElementById("output");
var input = document.getElementById("input");

var lines = [];

input.addEventListener('keydown', function(e) {
    
    if (e.key === "Enter") {
        console.log("hi");

        let new_text = input.value;

        input.textContent = "";

        lines.push(new_text);

        output.innerHTML = "Think about this as a phrasing for your questions...<br>";
        for (let i = 0; i < lines.length; i++) {
            output.innerHTML += lines[i];
            output.innerHTML += "<br>";
        }
    }

});