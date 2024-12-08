async function processUserData(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const response = await fetch(`/processUserData`, {
    method: "POST",
    body: formData,
  });

  const userData = await response.json();

  const content = document.getElementById("content");
  content.innerHTML = `<p>Name: ${userData.userName}</p>`;
  content.innerHTML += `<p>Username: ${userData.userSurname}</p>`;
}
