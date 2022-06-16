// Background animation
let curve = document.querySelector(".curve");
window.addEventListener('mousemove', e => {
    let x = -(e.x - window.innerWidth / 2) / window.innerWidth * 2;
    let y = -(e.y - window.innerHeight / 2) / window.innerHeight * 10;
    curve.style.transform = "translate(" + x + "%, " + y + "%)";
})