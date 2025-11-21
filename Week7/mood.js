//*Alize Jackson 11/20/2025*//
//*Step One*//
const moodDisplay = document.getElementById('moodDisplay');

//*Step Two & Step Six*//
const moods = {
    happy: {bg: '#ff9800', text: '#3e2723', message: 'Pumpkin spice everything!'},
    calm: {bg: '#94c7c8', text: '#215051', message: 'Feeling centered and in peace like a quiet pond.'},
    excited: {bg: '#bf3535', text: '#000000', message: 'Energized and all over the place like a bouncy red ball.' },
    chill: {bg: '#605aa0', text: '#c6a9e1', message: 'Relaxed and comfortable like sitting in a field with a new book.' },
    mysterious: {bg: '#2a5b3e', text: '#a7c6b5', message: 'Secretive and alluring like the mysteries the forest holds.'},
    reset: {bg: '#ffffff', text: '#000000', message: 'Choose a mood.'},
};

//*Step Three & Four & Five*//
document.addEventListener('click', function (event) {
    if (event.target.classList.contains('mood-btn')) {
    const mood = event.target.getAttribute('data-mood');
    const config = moods[mood];
    console.log(mood);
    console.log(config);
    document.body.style.backgroundColor = config.bg;
    document.body.style.color = config.text;
    moodDisplay.textContent = config.message;
}
                         });
