const books = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { title: "To Kill a Mockingbird", author: "Harper Lee" },
    { title: "1984", author: "George Orwell" },
    { title: "Pride and Prejudice", author: "Jane Austen" },
    { title: "The Catcher in the Rye", author: "J.D. Salinger" }
];

const recommendBtn = document.getElementById("recommend-btn");
const bookTitle = document.getElementById("book-title");
const bookAuthor = document.getElementById("book-author");

recommendBtn.addEventListener("click", function() {
    // Select a random index from the array
    const randomIndex = Math.floor(Math.random() * books.length);
    const selectedBook = books[randomIndex];

    bookTitle.textContent = selectedBook.title;
    bookAuthor.textContent = "By " + selectedBook.author;
});