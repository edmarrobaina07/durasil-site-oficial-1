document.addEventListener('DOMContentLoaded', () => {

    // Countdown Timer Logic
    const countdownElement = document.getElementById('countdown');
    const countdownBar = document.getElementById('countdown-bar');
    const countdownTime = 5 * 60; // 5 minutes in seconds
    let timeLeft = countdownTime;

    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    }

    function updateCountdown() {
        if (timeLeft <= 0) {
            clearInterval(timer);
            countdownElement.textContent = "00:00";
            countdownBar.style.display = 'none';
            return;
        }

        countdownElement.textContent = formatTime(timeLeft);
        timeLeft--;
    }

    const timer = setInterval(updateCountdown, 1000);
    updateCountdown();

    // Cookie Consent Logic
    const cookieContainer = document.getElementById('cookie-container');
    const acceptButton = document.getElementById('accept-cookies');
    const rejectButton = document.getElementById('reject-cookies');
    const closeButton = document.getElementById('close-cookie');
    const affiliateLink = 'https://app.monetizze.com.br/r/BHP1891470';

    function hideAndRedirect() {
        cookieContainer.style.opacity = '0';
        setTimeout(() => {
            cookieContainer.style.display = 'none';
            window.location.href = affiliateLink; // Redirects the user
        }, 500);
    }

    // Now, a click on any of these buttons will simply redirect without saving the choice.
    acceptButton.addEventListener('click', () => {
        hideAndRedirect();
    });

    rejectButton.addEventListener('click', () => {
        hideAndRedirect();
    });

    closeButton.addEventListener('click', () => {
        hideAndRedirect();
    });
});