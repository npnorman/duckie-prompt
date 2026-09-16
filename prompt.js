
var output = document.getElementById("output");
var input = document.getElementById("input");

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

global_lines = [
    "This is interesting... Have you thought about that before like this?",
    "What makes this problem so difficult?",
    "This seems simply difficult, maybe a whiteboard would help?",
    "*squeak* *squeak*",
    "AMAZING IDEA (or maybe not), but at least you have it formally written down now.",
    "How does this relate to the overall goal?",
    "Is this a requirment or a goal?",
    "You have either answered your own question or... LOOK AT THE DOCS!",
    "Research? Oh, I would just use google",
    "Project design, project design, give me your answer do ♫",
    "Get that on my desk by the end of the day! Just kidding :)",
    "I am a brick wall.",
    "I will break your project because I do not care if you have exception handlers or not.",
    "And thats when I said..., Oh sorry, didn't see yout there XD",
    "You should walk around outside for a min to process this information",
    "Do something else and the answer may come to you",
    "Sketch out the diagram, psuedocode, or plan (or think of the goals!)",
    "Outlook not so good",
    "Your horoscope says you need to spend more time defining what you want"
]

current_lines = [];

input.addEventListener('keydown', function(e) {

    if (current_lines.length <= 0) {
        for (let i=0; i < global_lines.length; i++) {
            current_lines.push(global_lines[i]);
        }
    }

    if (e.key === "Enter") {

        input.disabled = true;

        let new_text = input.value;

        if (new_text == "") {
            input.disabled = false;
            input.focus();
            return;
        }

        input.value = "";

        let randomIndex = Math.floor(Math.random() * current_lines.length);
        let randomElement = current_lines[randomIndex];
        output.innerHTML += "<p class='human-output'>" + new_text + "<p>";

        let currentChat = output.innerHTML;

        output.innerHTML += "<div class='loader'></div>";

        let delay = randomIntFromInterval(500,2000);
        setTimeout(function() {

            output.innerHTML = currentChat + "<p class='yellow'><b>(Duckie)</b><br>" + randomElement + "</p>"

            // delete element
            current_lines.splice(randomIndex, 1);

            // unlock chat
            input.disabled = false;
            input.focus();

        }, delay);
    }

    let outputWrapper = document.getElementById("output-box");
    outputWrapper.scrollTop = outputWrapper.scrollHeight;
});