function greetings() {
  let name = document.getElementById("name").value;

  let content = document.getElementById("content");
  content.innerHTML += "<p>Hola " + name + "!</p>";
}
