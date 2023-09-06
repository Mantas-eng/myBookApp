const books = {};
export function addBook(bookInput) {
    const id = generateUniqueId();
    const book = Object.assign(Object.assign({}, bookInput), { id });
    books[id] = book;
    console.log('Added book:', book);
}
export function displayAllBooks() {
    for (const id in books) {
        if (books.hasOwnProperty(id)) {
            console.log;
        }
    }
}
function generateUniqueId() {
    return 'unique-id-here';
}
