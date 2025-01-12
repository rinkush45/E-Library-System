import { Book } from '../types/book';
import Image from 'next/image';

interface BookCardProps {
  book: Book;
}

export default function BookCard({ book }: BookCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative h-64">
        <Image
          src={book.cover}
          alt={book.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{book.title}</h3>
        <p className="text-gray-600">by {book.author}</p>
        <span className="inline-block bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded mt-2">
          {book.category}
        </span>
        <p className="text-gray-500 mt-2 text-sm">{book.description}</p>
      </div>
    </div>
  );
}