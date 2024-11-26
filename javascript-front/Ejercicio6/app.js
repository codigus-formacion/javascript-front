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

function addBookToDOOM(book, i) {
  let div = document.createElement("div");
  content.appendChild(div);

  let pTitle = document.createElement("p");
  div.appendChild(pTitle);

  pTitle.textContent = book.title + " ";

  let button = document.createElement("button");
  pTitle.appendChild(button);
  button.textContent = "Más info";
  button.onclick = () => showHideMoreInfo(i);

  let pMoreInfo = document.createElement("p");
  div.appendChild(pMoreInfo);

  pMoreInfo.style.display = "none";
  pMoreInfo.id = "moreinfo-book-" + i;
  pMoreInfo.textContent = book.author + " (" + book.year + ")";
}

function addBook(book) {
  books.push(book);

  addBookToDOOM(book, books.length - 1);
}

function newBook() {
  let titleInput = document.getElementById("title");
  let title = titleInput.value;
  titleInput.value = "";

  let authorInput = document.getElementById("author");
  let author = authorInput.value;
  authorInput.value = "";

  let yearInput = document.getElementById("year");
  let year = yearInput.value;
  yearInput.value = "";

  addBook({ title, author, year });
}

let content = document.getElementById("content");

for (let i = 0; i < books.length; i++) {
  let book = books[i];

  addBookToDOOM(book, i);
}
