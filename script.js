// Change this to her name
const herName = "Babe";

// Update greeting dynamically
document.getElementById('her-name').textContent = herName;

document.getElementById('date-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const day = document.getElementById('day').value;
  const time = document.getElementById('time').value;
  const activity = document.getElementById('activity').value;
  const note = document.getElementById('message').value.trim();

  console.log(`🌸 ${herName} picked: ${day}, ${time}, ${activity}`);
  if (note) console.log(`💬 Note: "${note}"`);

  alert(`Aww you picked: ${day}, ${time}, ${activity} 💖`);

  // Show note if there's one
  if (note) {
    document.getElementById('user-note').textContent = `Your note: “${note}”`;
  }

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
