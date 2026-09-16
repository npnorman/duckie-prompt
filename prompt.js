
var output = document.getElementById("output");
var input = document.getElementById("input");

input.addEventListener('keydown', function(e) {
    
    lines = [
        "This is interesting... Have you thought about that before like this?",
        "What makes this problem so difficult?",
        "This seems simply difficult, maybe a whiteboard would help?",
        "*squeak* *squeak*",
        "AMAZING IDEA (or maybe not), but at least you have it formally written down now."
    ]

    if (e.key === "Enter") {

        let new_text = input.value;

        if (new_text == "") {
            return;
        }

        input.value = "";

        let randomElement = lines[Math.floor(Math.random() * lines.length)];
        output.innerHTML += "<p class='human-output'>" + new_text + "<p>";
        output.innerHTML += "<p class='yellow'><b>(Duckie)<br>" + randomElement + "</b></p>";
    }

    let outputWrapper = document.getElementById("output-box");
    outputWrapper.scrollTop = outputWrapper.scrollHeight;
});