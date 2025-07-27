document.getElementById('date-form').addEventListener('submit', function (e) {
  e.preventDefault();

  // Get values (optional if you’re not using them)
  const day = document.getElementById('day').value;
  const time = document.getElementById('time').value;
  const activity = document.getElementById('activity').value;
  const message = document.getElementById('message').value;

  // Show the confirmation message
  const confirmation = document.getElementById('confirmation');
  confirmation.classList.remove('hidden');

  // Fire confetti 🎉
  confetti({
    particleCount: 150,
    spread: 70,
    origin: { y: 0.6 },
  });
});