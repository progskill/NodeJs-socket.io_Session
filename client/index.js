const socket = io();

function sendMessage() {
  const message = document.getElementById("messageInput").ariaValueMax;

  socket.emit("message", message);
}

socket.on("message", (message) => {
  const messageDiv = document.createElement("div");
  messageDiv.textContent = message;
  document.body.appendChild(messageDiv);
});
