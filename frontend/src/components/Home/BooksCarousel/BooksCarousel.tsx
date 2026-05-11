import { books } from "../../../data/books";

export default function BookCarousel() {
  return (
    <div className="flex overflow-x-auto gap-gutter hide-scrollbar pb-8 -mx-margin-mobile px-margin-mobile md:mx-0 md:px-0">
      {books.map((book) => (
        <div
          key={book.id}
          className="flex-none w-48 group cursor-pointer"
        >
          <div className="relative w-full aspect-2/3 mb-4 overflow-hidden rounded-sm shadow-[0_15px_15px_-3px_rgba(74,66,56,0.04)] group-hover:shadow-[0_20px_25px_-5px_rgba(74,66,56,0.1)] transition-all duration-300">
            <img
              src={book.image}
              alt={book.title}
              className="w-full h-full object-cover grayscale-20 group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105"
            />
          </div>

          <h3 className="font-headline-md text-[18px] leading-tight text-on-surface group-hover:text-primary transition-colors">
            {book.title}
          </h3>

          <p className="text-label-md font-label-md text-on-surface-variant mt-1">
            {book.author}
          </p>

          <div className="mt-2 text-primary font-bold text-label-sm">
            {book.price}
          </div>
        </div>
      ))}
    </div>
  );
}