//For In Loops Objects
const books = [
  { title: "How to make money", author: "John Doe", publisher: "Oxford" },
  {
    title: "Mechanical Engineering",
    author: "Jane Doe",
    publisher: "Macmillian",
  },
];

// for (let i = 0; i < books.length; i++) {
//   console.log(books[i].author);
// }
const book = {
  title: "Mechanical Engineering",
  author: "Jane Doe",
  publisher: "Macmillian",
};
for (b in book) {
  console.log(`${b} - ${book[b]}`);
}
