import { Hero } from "./components/hero";
import { About } from "./components/about";
import { CTA } from "./components/cta";
import { Testimonials } from "./components/testimonials";
import { Footer } from "./components/footer";

function App() {
  return (
    <>
      <Hero />
      <div className="relative isolate overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-80 top-[300px] -z-10 h-[800px] w-[800px] bg-[url('/bg-tablet-pattern.svg')] bg-contain bg-no-repeat md:-left-[450px] md:top-[200px] md:h-[1000px] md:w-[1000px]"
        />

        <About />
        <Testimonials />
      </div>
      <CTA />
      <Footer />
    </>
  );
}

export default App;
