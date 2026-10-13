import { Features } from "./feature";
import { features as featuresData } from "../data/features";

export const About = () => {
  return (
    <section
      id="about"
      className="relative isolate overflow-hidden py-16 md:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-72 top-40 -z-10 h-[600px] w-[600px] bg-contain bg-no-repeat md:-left-96 md:top-20 md:h-[800px] md:w-[800px]"
      />
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 md:flex-row md:items-start md:gap-16 md:px-10 lg:px-12">
        <div className="flex flex-col gap-5 text-center md:w-1/2 md:text-left">
          <h2 className="text-3xl font-bold text-[hsl(228,39%,23%)] md:text-4xl">
            What's different about Manage?
          </h2>

          <p className="mx-auto max-w-md leading-7 text-[hsl(227,12%,61%)] md:mx-0">
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
          </p>
        </div>

        <div className="md:w-1/2">
          <Features features={featuresData} />
        </div>
      </div>
    </section>
  );
};
