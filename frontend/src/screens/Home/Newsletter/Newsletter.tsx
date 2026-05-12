const Newsletter = () => {
  return (
    <section className="py-stack-lg mb-stack-lg">
      <div className="bg-primary-container/10 border border-primary-container/20 rounded-xl p-stack-lg text-center">
        <h2 className="font-headline-lg text-headline-lg text-primary mb-stack-sm">
          The Reader's Circle
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-stack-md">
          Subscribe to receive monthly curated reading lists, exclusive author
          interviews, and first access to rare editions.
        </p>
        <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            className="grow px-6 py-3 rounded-lg bg-surface border border-primary-container/30 focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-all"
            placeholder="Your email address"
            type="email"
          />
          <button
            className="bg-primary-container text-on-secondary px-8 py-3 rounded-lg font-bold hover:brightness-110 transition-all"
            type="submit"
          >
            Join Us
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
