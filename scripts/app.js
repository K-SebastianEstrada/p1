const pianokeys = document.querySelectorAll('.key');

function playSound(newUrl) {
    console.log(newUrl);
    new Audio(newUrl).play();
}


pianokeys.forEach((pianokeys, i) => {
    const number = i < 9 ? '0' + (i + 1) : (i + 1);
    const newUrl = 'src/piano-keys/key' + number + '.mp3';
    pianokeys.addEventListener('click', () => playSound(newUrl));
});