async function applyUppercase() {
  const text = document.getElementById("text").value;

  const response = await fetch(`/textToUppercase`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      text: text,
    }),
  });

  const textData = await response.json();
  const content = document.getElementById("content");

  content.innerHTML += textData.text + " " + textData.textUppercase + "<br>";
}
