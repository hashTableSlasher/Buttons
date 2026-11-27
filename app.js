let buttons = document.querySelectorAll('.butt');
let buttPara = document.querySelectorAll('.butt > p');
console.log(buttons.length);
buttons.addEventListener('mouseenter',()=>{
    buttPara.classList.toggle('hidden');
});
buttons.addEventListener('mouseleave',()=>{
    buttPara.classList.toggle('hidden');
});