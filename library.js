function Book(name, author, pages) {
  this.name = name;
  this.author = author;
  this.pages = pages;
}

let btn = document.querySelector(".add-holder");
let dialog = document.querySelector("dialog");
btn.addEventListener("click", () => {
  dialog.showModal();
});

let add = document.querySelector(".add");
let cardHolder = document.querySelector(".cards-holder");
let myLibrary = [];

add.addEventListener("click", () => {
  let bookName = document.querySelector("#bookName").value;
  let bookAuthor = document.querySelector("#bookAuthor").value;
  let bookPages = document.querySelector("#pages").value;
  if (!bookName || !bookAuthor || !bookPages) {
    alert("Please fill in all fields.");
    dialog.close();
    return;
  }

  let newBook = new Book(bookName, bookAuthor, bookPages);

  console.log(newBook);

  let divMain = document.createElement("div");
  let divName = document.createElement("p");
  let divAuthor = document.createElement("p");
  let divPages = document.createElement("p");
  let divRead = document.createElement("p");

  divName.textContent = `Book Name : ${newBook.name}`;
  divAuthor.textContent = `Author Name : ${newBook.author}`;
  divPages.textContent = `No. of Pages : ${newBook.pages}`;
  divRead.textContent = "Read : ";
  divRead.style.justifySelf = "center";

  divMain.appendChild(divName);
  divMain.appendChild(divAuthor);
  divMain.appendChild(divPages);
  divMain.appendChild(divRead);

  let checkbox = document.createElement("input");
  checkbox.classList.add("read");
  checkbox.type = "checkbox";
  checkbox.addEventListener("change", () => {
    divMain.style.backgroundColor = checkbox.checked ? "#70db70" : "";
  });

  divMain.appendChild(checkbox);

  cardHolder.appendChild(divMain);
  divMain.classList.add("divMain");

  myLibrary.push(newBook);

  document.querySelector("#bookName").value = "";
  document.querySelector("#bookAuthor").value = "";
  document.querySelector("#pages").value = "";

  dialog.close();
});

function isAlpha(evt) {
  var charCode = evt.which || evt.keyCode;
  return (
    (charCode >= 65 && charCode <= 90) ||
    (charCode >= 97 && charCode <= 122) ||
    charCode === 32
  );
}
