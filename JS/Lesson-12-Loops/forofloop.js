//For Of Loops- Iterables

// for (placeholder of object) {
// }

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

for (book of books) {
  console.log(`${book.title} - ${book.author} - ${book.publisher}`);
}

const fullname = "Olukayode Adams";

for (character of fullname) {
  console.log(character);
}
