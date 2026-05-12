import { ArrowLeft, ArrowRight } from "lucide-react";
import { books } from "../../../data/books";
import Carousel from "../../../components/Carousel/Carousel";
import useEmblaCarousel from "embla-carousel-react";

const Picks = () => {
 const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    dragFree: false,
    containScroll: "trimSnaps",
  });

  const scrollPrev = () => emblaApi?.scrollPrev();

  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <section className="py-stack-lg">

      {/* Header */}
      <div className="flex justify-between items-end mb-stack-md">

        <div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">
            Curated by our Staff
          </h2>

          <p className="text-on-surface-variant font-body-md text-body-md">
            Hand-selected treasures from our shelves to yours.
          </p>
        </div>

        {/* Controls */}
        <div className="flex gap-2">

          <button
            onClick={scrollPrev}
            className="p-2 rounded-full border border-outline-variant hover:bg-surface-container transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>

          <button
            onClick={scrollNext}
            className="p-2 rounded-full border border-outline-variant hover:bg-surface-container transition-all"
          >
            <ArrowRight className="w-5 h-5" />
          </button>

        </div>
      </div>

      {/* Embla */}
      <div
        ref={emblaRef}
        className="overflow-hidden"
      >
        <div className="flex gap-gutter">

          {books.map((book) => (
            <div
              key={book.id}
              className="
                flex-[0_0_65%]
                sm:flex-[0_0_45%]
                lg:flex-[0_0_17%]
                min-w-0
              "
            >
              <Carousel {...book} />
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Picks;
