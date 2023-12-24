function moveButton() {
    const button = document.getElementById('noButton');
    const maxX = window.innerWidth - button.clientWidth;
    const maxY = window.innerHeight - button.clientHeight;

    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;

    button.style.position = 'absolute';
    button.style.left = `${newX}px`;
    button.style.top = `${newY}px`;
}

function goToAnotherPage() {
    window.location.href = "success.html";
}

