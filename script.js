function redirectToInstagram() {
  window.location.href = "https://www.instagram.com/ozito77_";
}

function enlargeYesButton() {
  let yesButton = document.getElementById('yesButton');
  let currentSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
  let newSize = (parseFloat(currentSize) * 1.2) + 'px';
  yesButton.style.fontSize = newSize;
}
