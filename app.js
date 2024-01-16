const timerEl = document.querySelector('.timer');
const startBtnEl = document.querySelector('.btn-start');
const stopBtnEl = document.querySelector('.btn-stop');
const resetBtnEl = document.querySelector('.btn-reset');

startBtnEl.addEventListener('click', startTimer);
stopBtnEl.addEventListener('click', stopTimer);
resetBtnEl.addEventListener('click', resetTimer);

let interval;
let timeLeft = 1500;
function updateTimer() {
	let minutes = Math.floor(timeLeft / 60);
	let seconds = timeLeft % 60;
	timerEl.innerHTML = `${minutes.toString().padStart(2, '0')} : ${seconds
		.toString()
		.padStart(2, '0')}`;
}
function startTimer() {
	interval = setInterval(() => {
		if (timeLeft === 0) {
			clearInterval(interval);
			alert('Time is up!');
			return;
		}
		timeLeft--;
		updateTimer();
	}, 1000);
}
function stopTimer() {
	clearInterval(interval);
}
function resetTimer() {
	clearInterval(interval);
	timeLeft = 1500;
	updateTimer();
}
