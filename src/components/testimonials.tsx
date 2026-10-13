import { useState } from "react";
import { testimonials } from "../data/testimonials";

export const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const desktopTestimonials = testimonials.slice(0, 3);

  return (
    <section
      id="testimonials"
      className="relative isolate overflow-hidden py-16 md:py-24"
    >
      {" "}
      <h2 className="mb-20 text-center text-3xl font-bold text-[hsl(228,39%,23%)] md:text-4xl">
        What they've said{" "}
      </h2>
      <div className="mx-auto hidden max-w-7xl grid-cols-3 gap-6 px-6 md:grid md:px-10 lg:px-12">
        {desktopTestimonials.map((item) => (
          <article
            key={item.id}
            className="relative flex flex-col items-center bg-[hsl(0,0%,98%)] px-6 pb-8 pt-16 text-center"
          >
            <img
              src={item.image}
              alt={item.name}
              className="absolute -top-10 h-20 w-20"
            />

            <h3 className="mb-4 font-bold text-[hsl(228,39%,23%)]">
              {item.name}
            </h3>

            <p className="text-sm leading-7 text-[hsl(227,12%,61%)]">
              "{item.testimonial}"
            </p>
          </article>
        ))}
      </div>
      <div className="px-6 md:hidden">
        <div className="relative mx-auto mt-10 max-w-md bg-[hsl(0,0%,98%)] px-6 pb-8 pt-16 text-center">
          <img
            src={testimonials[activeIndex].image}
            alt={testimonials[activeIndex].name}
            className="absolute left-1/2 top-0 h-20 w-20 -translate-x-1/2 -translate-y-1/2"
          />

          <h3 className="mb-4 font-bold text-[hsl(228,39%,23%)]">
            {testimonials[activeIndex].name}
          </h3>

          <p className="text-sm leading-7 text-[hsl(227,12%,61%)]">
            "{testimonials[activeIndex].testimonial}"
          </p>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {testimonials.map((item, index) => (
            <button
              key={item.id}
              type="button"
              aria-label={`Show testimonial ${index + 1}`}
              aria-current={activeIndex === index ? "true" : undefined}
              onClick={() => setActiveIndex(index)}
              className={`h-3 w-3 rounded-full border border-[hsl(12,88%,59%)] ${
                activeIndex === index ? "bg-[hsl(12,88%,59%)]" : "bg-white"
              }`}
            />
          ))}
        </div>
      </div>
      <div className="mt-12 text-center">
        <button className="rounded-full bg-[hsl(12,88%,59%)] px-7 py-3 text-sm font-bold text-white shadow-md transition-opacity hover:opacity-70">
          Get Started
        </button>
      </div>
    </section>
  );
};
