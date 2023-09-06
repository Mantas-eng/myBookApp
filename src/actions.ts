import {Book, BookId,BookCreateInput} from './types';

const books: Record<BookId,Book>={};


export function addBook(bookInput: BookCreateInput): void {
    const id = generateUniqueId(); 
    const book: Book ={...bookInput, id};
    books[id] = book;
    console.log('Added book:',book)
}

export function displayAllBooks(): void{
    for(const id in books){
        if (books.hasOwnProperty(id)){
            console.log
        }
    }
}

function generateUniqueId():string{
    return 'unique-id-here';
}