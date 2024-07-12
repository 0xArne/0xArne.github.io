const button = document.querySelector('.token-address');
button.addEventListener('click', () => {
    const text = button.innerText.trim();
    navigator.clipboard.writeText(text);
});
