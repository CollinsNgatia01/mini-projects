const containerEl = document.querySelector(".container")

const careers = ["Yotuber", "Web developer", "Freelancer","Instructor"];

let careerIndex = 0

let characterIndex = 0;

updateText();

function updateText(){
    containerEl.innerHTML = `<h1>I am a ${careers[careerIndex]}</h1>`;
}

