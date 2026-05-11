import { ArrowLeft, ArrowRight } from "lucide-react";

const Picks = () => {
  return (
    <section className="py-stack-lg">
      <div className="flex justify-between items-end mb-stack-md">
        <div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">
            Curated by our Staff
          </h2>
          <p className="text-on-surface-variant font-body-md text-body-md">
            Hand-selected treasures from our shelves to yours.
          </p>
        </div>
        <div className="flex gap-2">
          <button className="p-2 rounded-full border border-outline-variant hover:bg-surface-container transition-all">
            <span className="material-symbols-outlined"><ArrowLeft/></span>
          </button>
          <button className="p-2 rounded-full border border-outline-variant hover:bg-surface-container transition-all">
            <span className="material-symbols-outlined"><ArrowRight/></span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Picks;
