import { Book } from '../types/book';
import TheGreatGatsby from '../images/TheGreatGatsby.jpg';
import NineteenEightyFour from '../images/1984.jpeg';
import PrideAndPrejudice from '../images/prideandprejudice.jpg';
import TheShivSutras from '../images/theshivsutras.jpeg';
import Monto from '../images/monto.jpeg';


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
    cover: NineteenEightyFour,
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
    title: 'The Shiv Sutras',
    author: 'Ranjit Choudhri',
    cover: TheShivSutras,
    description: "A book about the Shiv Sutras",
    category: 'Religious'
  },
  {
    id: '5',
    title: 'The story of monto',
    author: 'John finegan and mercier',
    cover: Monto,
    description: 'A story of autor and his journeyj',
    category: 'Classic'
  }
];