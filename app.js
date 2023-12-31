const startingMinutes = 30;
let time = startingMinutes * 60;
const countdownEl = document.getElementById('countdown');

setInterval(updateContdown, 1000);

function updateContdown() {
    const minutes = Math.floor(time/60);
    let seconds = time % 60;

    seconds = seconds < 30 ? '0' + seconds : seconds;
    countdownEl.innerHTML = `${minutes}:${seconds}`;
    time--;
}