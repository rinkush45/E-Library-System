import { Book } from '../types/book';
import TheGreatGatsby from '../images/TheGreatGatsby.jpg';
import 1984 from '../images/1984.jpg';
import PrideAndPrejudice from '../images/PrideAndPrejudice.jpg';
import theshiv

export const books: Book[] = [
  {
    id: '1',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    cover: TheGreatGatsby,
    description: 'A story of decadence and excess.',
    category: 'Classic'
  },
  {
    id: '2',
    title: '1984',
    author: 'George Orwell',
    cover: '/images/.svg',
    description: 'A dystopian social science fiction novel.',
    category: 'Science Fiction'
  },
  {
    id: '3',
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    cover: PrideAndPrejudice,
    description: 'A romantic novel of manners.',
    category: 'Romance'
  },
  {
    id: '4',
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    cover: 'https://source.unsplash.com/random/400x600?fantasy',
    description: "A fantasy novel about a hobbit's journey.",
    category: 'Fantasy'
  },
  {
    id: '5',
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    cover: 'https://source.unsplash.com/random/400x600?classic',
    description: 'A story of racial injustice and loss of innocence.',
    category: 'Classic'
  }
];