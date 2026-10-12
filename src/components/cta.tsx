export const CTA = () => {
  return (
    <section className="relative overflow-hidden bg-[hsl(12,88%,59%)]">
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 py-16 text-center md:flex-row md:px-10 md:py-14 md:text-left">
        <h2 className="max-w-lg text-4xl font-bold leading-tight text-white md:text-5xl">
          Simplify how your team works today.
        </h2>

        <button className="shrink-0 rounded-full bg-white px-7 py-3 font-bold text-[hsl(12,88%,59%)] shadow-md transition-colors hover:bg-gray-100">
          Get Started
        </button>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[url('/bg-simplify-section-desktop.svg')] bg-no-repeat bg-[position:right_-8rem_center] md:bg-[position:right_-10rem_center]"
      />
    </section>
  );
};
