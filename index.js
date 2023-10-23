const books = [
  {
    name: "To Kill a Mockingbird",
    authorFirst: "Harper",
    authorLast: "Lee",
    publishDate: 1960,
    genre: ["mystery", "historical", "fiction"],
  },
  {
    name: "The Great Gatsby",
    authorFirst: "F. Scott",
    authorLast: "Fitzgerald",
    publishDate: 1925,
    genre: ["mystery", "historical", "fiction"],
  },
  {
    name: "The Hobbit",
    authorFirst: "JRR",
    authorLast: "Tolkien",
    publishDate: 1937,
    genre: ["fantasy", "fiction"],
  },
  {
    name: "Harry Potter and the Deathly Hallows",
    authorFirst: "JK",
    authorLast: "Rowling",
    publishDate: 1997,
    genre: ["fantasy", , "fiction"],
  },
  {
    name: "Ulysses",
    authorFirst: "James",
    authorLast: "Joyce",
    publishDate: 1918,
    genre: ["historical", "non-fiction"],
  },
  {
    name: "War and Peace",
    authorFirst: "Leo",
    authorLast: "Tolstoy",
    publishDate: 1867,
    genre: ["historical", "fiction"],
  },
  {
    name: "Pride and Prejudice",
    authorFirst: "Jane",
    authorLast: "Austen",
    publishDate: 1813,
    genre: ["fiction"],
  },
  {
    name: "The Catcher in the Rye",
    authorFirst: "JD",
    authorLast: "Salinger",
    publishDate: 1951,
    genre: ["fiction"],
  },
  {
    name: "Great Expectations",
    authorFirst: "Charles",
    authorLast: "Dickens",
    publishDate: 1861,
    genre: ["historical", "fiction"],
  },
  {
    name: "Little Women",
    authorFirst: "Lousia May",
    authorLast: "Alcott",
    publishDate: 1868,
    genre: ["womens", "historical", "fiction"],
  },
];

const titles = [
  "To Kill a Mockingbird",
  "The Great Gatsby",
  "The Hobbit",
  "Harry Potter and the Deathly Hallows",
  "Ulysses",
  "War and Peace",
  "Pride and Prejudice",
  "The Catcher in the Rye",
  "Great Expectations",
  "Little Women",
];

//Array of authors and the book they wrote
//"--- wrote --- in ---"
const array = books.map((book => `${book.authorFirst} ${book.authorLast} wrote ${book.name}! in ${book.publishDate}`))
console.log(array)
//Sort books from oldest to most recent
const sorting = books.sort((a,b) => a.publishDate - b.publishDate)
console.log(sorting)

//sort books alphabetically#####
const alpha = [...books].sort((a,b) => a.name.localeCompare(b.name))
console.log(alpha)


//Find who wrote War and Peace
const paul = books.find((book => book.name === "War and Peace"))
const authorll = `${paul.authorFirst} ${paul.authorLast}`
console.log(authorll)


//how many books were written before 1900?
const old = books.filter((book => book.publishDate < 1900)).length
console.log(`${old}`)

//was there at least one book published within the last 100 years?
const currentYear = new Date().getFullYear();
const hasBookPublishedWithinLast100Years = books.some(book => currentYear - book.publishDate <= 100);
console.log(`At least one book was published within the last 100 years: ${hasBookPublishedWithinLast100Years}`);


//was every book published within the last 100 years?

const everybook = books.every(book => currentYear - book.publishDate <= 100)
if (everybook){
  console.log(true)
} else {
console.log(false)
}


  

 

// Print a list of books that "includes" the genre historical


const historicalBooks = books.filter(book => book.genre.includes("historical"));
console.log("Books that include the genre 'historical':");
historicalBooks.forEach(book => console.log(book.name));



const topMovies = books.map((bok,index) => ({
  date: bok.publishDate,
  id: index * 80,
}));
console.log(topMovies)









