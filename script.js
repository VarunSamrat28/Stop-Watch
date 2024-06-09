let timer;
let isRunning = false;
let startTime;
let elapsedTime = 0;

function startStop() {
    if (isRunning) {
        clearInterval(timer);
        elapsedTime += Date.now() - startTime;
        document.getElementById('startStopBtn').textContent = 'Start';
    } else {
        startTime = Date.now();
        timer = setInterval(updateDisplay, 1000);
        document.getElementById('startStopBtn').textContent = 'Stop';
    }
    isRunning = !isRunning;
}

function reset() {
    clearInterval(timer);
    isRunning = false;
    elapsedTime = 0;
    document.getElementById('display').textContent = '00:00:00';
    document.getElementById('startStopBtn').textContent = 'Start';
}

function updateDisplay() {
    const now = Date.now();
    const diff = elapsedTime + (now - startTime);
    const hours = Math.floor(diff / 3600000);
    const minutes = Math.floor((diff % 3600000) / 60000);
    const seconds = Math.floor((diff % 60000) / 1000);

    const display = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
    document.getElementById('display').textContent = display;
}

function pad(number) {
    return number < 10 ? '0' + number : number;
}
