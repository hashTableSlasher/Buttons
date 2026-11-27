// const buttons = document.querySelectorAll('.butt');
// toggles hidden class on associated paragraphs for buttons
// console.log(buttons.length);
// console.log(buttPara.length);


// let containsButtons = document.querySelector("#shirtCenter");
// containsButtons.addEventListener("click", () => {
//     let buttons = document.querySelectorAll(".butt");
//     buttons.forEach((butt) => {
//         butt.classList.toggle("pos");
//     });

// });




let themesButton = document.querySelector("#themesButton");
console.log(themesButton);
let buttonOptions = document.getElementById("#collapsed");
// let buttonOptions = document.querySelectorAll("#collapsed > div");
themesButton.addEventListener("click", function() {
    
    buttonOptions.style.opacity ="1";
    // buttonOptions.style.opacity ="1";
});

