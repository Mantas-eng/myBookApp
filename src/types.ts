export interface Book {
    id:string;
    title: string;
    author: string;
    genre: string;
    publicationYear: number;
    pages: number;
}


export type BookCreateInput = Omit<Book, 'id'>;
export type BookUpdateInput = Pick<Book, 'title' | 'author'>;

export type BookId = string;

export type AnyParam = Record<string,any>;

