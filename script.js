document.getElementById('date-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const day = document.getElementById('day').value;
  const time = document.getElementById('time').value;
  const activity = document.getElementById('activity').value;
  const message = document.getElementById('message').value;

  const confirmation = document.getElementById('confirmation');
  const userNote = document.getElementById('user-note');

  
  confirmation.classList.remove('hidden');

  // Fire confetti
  confetti({
    particleCount: 150,
    spread: 70,
    origin: { y: 0.6 },
  });
});