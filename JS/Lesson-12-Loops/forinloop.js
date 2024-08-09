const book = {
  title: "Mechanical Engineering",
  author: "Jane Doe",
  publisher: "Macmillian",
};

//For In Loops- Objects

// for (placeholder in object) {
// }
console.log(book.title);
console.log(book["author"]);
console.log("...............");

for (b in book) {
  console.log(book[b]);
}

const books = [
  {
    title: "Mechanical Engineering",
    author: "Jane Doe",
    publisher: "Macmillian",
  },
  {
    title: "Civil Engineering",
    author: "John Doe",
    publisher: "Oxford",
  },
  {
    title: "Industrial Engineering",
    author: "Dexter Doe",
    publisher: "NGM",
  },
];

for (b in books) {
  console.log(books[b].publisher);
}

const fullname = "Olukayode Adams";

for (character in fullname) {
  console.log(fullname[character]);
}
