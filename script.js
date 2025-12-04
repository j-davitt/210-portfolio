
// Change background color on click
document.body.addEventListener('click', () => {
    document.body.style.backgroundColor = getRandomColor();
    document.getElementById('project-container').style.backgroundColor = getRandomColor();
});

document.body.style.transition = 'background-color 0.5s ease';


// generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// clear the page content
function clearPage() {
    document.body.innerHTML = '';
}


// grab random element on page and remove after timeout
function clearPageRandomly() {
    alert("You were warned!");
    const elements = Array.from(document.body.children);
    let delay = 2000;
    while (elements.length > 0) {
        const randomIndex = Math.floor(Math.random() * elements.length);
        const element = elements.splice(randomIndex, 1)[0];
        setTimeout(() => {
            element.remove();
        }, delay);
        delay /= 2;
    }
}