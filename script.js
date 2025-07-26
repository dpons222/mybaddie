// Change this to her name
const herName = "Babe";

// Update greeting dynamically
document.getElementById('her-name').textContent = herName;

document.getElementById('date-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const day = document.getElementById('day').value;
  const time = document.getElementById('time').value;
  const activity = document.getElementById('activity').value;

  console.log(`🌸 ${herName} picked: ${day}, ${time}, ${activity}`);

  alert(`Aww you picked: ${day}, ${time}, ${activity} 💖`);

  // Hide form, show confirmation
  document.getElementById('date-form').classList.add('hidden');
  document.getElementById('confirmation').classList.remove('hidden');

  // Confetti burst 🎉
  confetti({
    particleCount: 150,
    spread: 80,
    origin: { y: 0.6 }
  });
});
