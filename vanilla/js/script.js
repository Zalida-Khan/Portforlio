const hamburger = document.getElementById("hamburger");
const nav = document.querySelector("nav");

hamburger.addEventListener("click", () => {
    nav.classList.toggle("active");
});

const $spin = document.querySelector(".waapi-spinner__spinner.spin");
const $moreSpin = document.querySelector(".waapi-spinner__spinner.moreSpin");
const $mostSpin = document.querySelector(".waapi-spinner__spinner.mostSpin");


const keyframes = [
    { transform: "rotate(0deg)" },
    { transform: "rotate(360deg)" }
];

const options = {
    duration: 3000,
    iterations: Infinity,
};

$spin.animate(keyframes, options);
$moreSpin.animate(keyframes, options);
$mostSpin.animate(keyframes, options);

gsap.to(".gsap-spinner__spinner", {
    rotation: 360,
    repeat: -1,
    duration: 3,
    ease: "default",
});
