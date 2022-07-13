function openPlayerConfig(event) {
  editedPlayer = +event.target.dataset.playerid;
  playerConfigOverlay.style.display = 'block';
  backdropElement.style.display = 'block';
}

function closePlayerConfig() {
  playerConfigOverlay.style.display = 'none';
  backdropElement.style.display = 'none';
  formElement.firstElementChild.classList.remove('error');
  errorOutputElement.textContent = '';
  formElement.firstElementChild.lastElementChild.value = '';
}

function savePlayerConfig(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const enteredPlayerName = formData.get('player-name').trim();

  if (!enteredPlayerName) {
    event.target.firstElementChild.classList.add('error');
    errorOutputElement.textContent = 'Please enter a valid name!';
    return;
  }

  const updatedPlayerData = document.getElementById(`player${editedPlayer}-data`);
  updatedPlayerData.children[1].innerHTML = enteredPlayerName;

  players[editedPlayer - 1].name = enteredPlayerName;

  closePlayerConfig();
}
