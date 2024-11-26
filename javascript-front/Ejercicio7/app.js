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

function showBookPage(id) {
  let content = document.getElementById("content");

  let book = books[id];

  content.innerHTML = `
        <h2>Libro: ${book.title}</h2>

        <p>Autor: ${book.author}</p>
        <p>Año: ${book.year}</p>

        <button onclick='showBooksPage()'>Volver a la lista</button>
    `;
}

function showBooksPage() {
  let content = document.getElementById("content");

  content.innerHTML = `<h2>Libros</h2>`;

  for (let i = 0; i < books.length; i++) {
    content.innerHTML += `<p>
            ${books[i].title}
            <button onclick="showBookPage(${i});">Más info</button>            
        </p>`;
  }
}

showBooksPage();
