function notify(message) {
  let div = document.getElementById('notification');
  div.textContent = message;
  div.style.display = 'block';

  div.addEventListener('click', onClick);

  function onClick(event) {
    div.textContent = '';
    div.style.display = 'none';
  }
}
