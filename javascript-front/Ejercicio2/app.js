let books = [
  "Cien años de soledad",
  "El señor de los anillos",
  "1984",
  "Un mundo feliz",
];

let content = document.getElementById("content");

for (let i = 0; i < books.length; i++) {
  content.innerHTML += "<p>" + books[i] + "</p>";
}
