function redirectToInstagram() {
  window.location.href = "https://www.instagram.com/ozito77_";
}

function enlargeYesButton() {
  let yesButton = document.getElementById('yesButton');
  yesButton.style.transform = 'scale(1.2)';
  redirectToInstagram();  // If you want to redirect to Instagram when "No" is clicked
}
