const userBalance = 1000; // Example user balance
document.getElementById('userBalance').textContent = `₹${userBalance.toFixed(2)}`;

// Example function to start and update the countdown timer
// Replace with actual logic to handle round timings
function startCountdown(duration) {
    let timer = duration, minutes, seconds;
    setInterval(() => {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        document.getElementById('countdown').textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
            // TODO: Fetch new round data and update the interface
        }
    }, 1000);
}

// Call to initialize the countdown timer with 3 minutes (180 seconds)
startCountdown(180);

// TODO: Add event listeners and API integration logic for betting, fetching game results, and user round information
// JavaScript to handle betting on number boxes
document.querySelectorAll('.number-box').forEach(box => {
    box.addEventListener('click', function () {
        const number = this.textContent;
        const color = this.classList.contains('half-red-half-violet') ? 'half-red-half-violet' :
            this.classList.contains('half-green-half-violet') ? 'half-green-half-violet' :
                this.classList.contains('green') ? 'green' : 'red';
        placeBet(number, color);
    });
});

function placeBet(number, color) {
    // Here you would integrate with your API to handle the bet
    console.log(`Bet placed on number ${number} with color ${color}`);
}