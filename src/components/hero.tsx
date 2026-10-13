import { Header } from "./header";

export const Hero = () => {
  return (
    <div className="relative isolate w-full overflow-x-clip">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 -z-10 h-[420px] w-full overflow-hidden md:h-[650px]"
      >
        <div className="absolute -right-24 -top-24 h-[450px] w-[450px] bg-[url('/bg-tablet-pattern.svg')] bg-contain bg-no-repeat md:-right-40 md:-top-40 md:h-[700px] md:w-[700px]" />{" "}
      </div>
      <Header />
      <section className="mx-auto flex w-full max-w-7xl flex-col-reverse items-center gap-10 px-6 py-10 md:flex-row md:justify-between md:gap-12 md:px-10 md:py-16 lg:px-12">
        <div className="flex w-full max-w-lg flex-col items-center text-center md:items-start md:text-left">
          <h1 className="text-4xl font-bold leading-tight text-[hsl(228,39%,23%)] md:text-5xl lg:text-6xl">
            Bring everyone together to build better products.
          </h1>

          <p className="mt-6 max-w-md leading-7 text-[hsl(233,12%,13%)]">
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>

          <button className="mt-8 rounded-full bg-[hsl(12,88%,59%)] px-7 py-3 font-bold text-white shadow-md transition-opacity hover:opacity-70">
            Get Started
          </button>
        </div>

        <img
          src="/illustration-intro.svg"
          alt="Charts and illustrations representing team productivity"
          className="block h-auto w-full max-w-md md:max-w-[48%]"
        />
      </section>
    </div>
  );
};
