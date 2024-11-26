let books = [
  {
    title: "Cien años de soledad",
    author: "Gabriel García Márquez",
    year: 1967,
  },
  {
    title: "El señor de los anillos",
    author: "J. R. R. Tolkien",
    year: 1954,
  },
  {
    title: "1984",
    author: "George Orwell",
    year: 1949,
  },
  {
    title: "Un mundo feliz",
    author: "Aldous Huxley",
    year: 1932,
  },
];

function showHideMoreInfo(id) {
  let moreInfoElement = document.getElementById("moreinfo-book-" + id);
  let display = moreInfoElement.style.display;

  if (display === "none") {
    moreInfoElement.style.display = "block";
  } else {
    moreInfoElement.style.display = "none";
  }
}

let content = document.getElementById("content");

for (let i = 0; i < books.length; i++) {
  let book = books[i];

  content.innerHTML += `<div>
            <p id="book-${i}">${book.title} <button onclick="showHideMoreInfo(${i})">Más info</button></p>
            <p style="display:none" id="moreinfo-book-${i}"> ${book.author} (${book.year})</p>
        </div>`;
}
