
// Change background color on click
document.body.addEventListener('click', () => {
    document.body.style.backgroundColor = getRandomColor();
    document.getElementById('project-container').style.backgroundColor = getRandomColor();
    document.getElementsByClassName('btn btn-primary').forEach(btn => {
        btn.style.backgroundColor = getRandomColor();
    });
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