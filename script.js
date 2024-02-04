function showConfirmation() {
  document.getElementById('confirmation').classList.remove('hidden');
}

function hideConfirmation() {
  document.getElementById('confirmation').classList.add('hidden');
}

function showSadMessage() {
  document.getElementById('sadMessage').classList.remove('hidden');
  document.getElementById('yesButton').classList.add('grow');
  document.getElementById('noButton').classList.add('shrink');
}

function showCryingMessage() {
  alert("Notification: She said 'No'.");
}

function showLoveMessage() {
  document.getElementById('loveMessage').classList.remove('hidden');
}

function showInstagramProfile() {
  alert("Congratulations! She said 'Yes'!\nCheck out my Instagram profile: @ozito77_");
  window.open("https://www.instagram.com/ozito77_", "_blank");
}
