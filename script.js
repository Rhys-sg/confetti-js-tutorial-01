const jsConfetti = new JSConfetti()

const button = document.querySelector(".btn");

button.addEventListener("click", () => {
    jsConfetti.addConfetti()
});