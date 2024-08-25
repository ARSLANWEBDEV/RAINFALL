const toggleButton = document.getElementById('toggleButton');
const rainElement = document.querySelector('.rain');
let isRaining = true;

toggleButton.addEventListener('click', () => {
    if (isRaining) {
        rainElement.style.animationPlayState = 'paused';
        toggleButton.textContent = 'Start Rain';
    } else {
        rainElement.style.animationPlayState = 'running';
        toggleButton.textContent = 'Stop Rain';
    }
    isRaining = !isRaining;
});
