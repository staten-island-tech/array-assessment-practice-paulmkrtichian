const authorBookPairs = books.map(book => `${book.authorFirst} ${book.authorLast} wrote ${book.name} in ${book.publishDate}`);
console.log(authorBookPairs);

const sortedByPublishDate = books.sort((a, b) => a.publishDate - b.publishDate);
console.log(sortedByPublishDate);

const alphabet = [...books].sort((a,b) => a.name.localeCompare(b.name));
console.log(alphabet);

const warAndPeaceAuthor = books.find(book => book.name === "War and Peace");
const warAndPeaceAuthorName = `${warAndPeaceAuthor.authorFirst} ${warAndPeaceAuthor.authorLast}`;
console.log(`War and Peace was written by ${warAndPeaceAuthorName}`);

const booksBefore1900 = books.filter(book => book.publishDate < 1900).length;
console.log(`${booksBefore1900} books were written before 1900`);



const allBooksPublishedWithinLast100Years = books.every(book => currentYear - book.publishDate <= 100);
console.log(`Every book was published within the last 100 years: ${allBooksPublishedWithinLast100Years}`);
 
const historicalBooks = books.filter(book => book.genre.includes("historical"));
console.log("Books that include the genre 'historical':");
historicalBooks.forEach(book => console.log(book.name));