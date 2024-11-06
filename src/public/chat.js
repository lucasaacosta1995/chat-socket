const socket = io();

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const message = document.querySelector('#message').value;
    socket.emit('chat message', message);
    document.querySelector('#message').value = '';
});

socket.on('chat message', (msg) => {
    const item = document.createElement('li');
    item.textContent = msg;
    document.querySelector('#messages').appendChild(item);
});
