export const Footer = () => {
  return (
    <footer className="bg-[hsl(233,12%,13%)] px-6 py-12 text-white md:px-10">
      <div className="mx-auto flex max-w-7xl flex-col-reverse gap-10 md:flex-row md:justify-between">
        <div className="flex flex-col-reverse items-center justify-between gap-10 md:flex-col md:items-start">
          <img
            src="/logo.svg"
            alt="Manage"
            className="w-36 brightness-0 invert"
          />

          <div className="flex items-center gap-8 md:gap-4">
            <a href="#" aria-label="Facebook">
              <img src="/icon-facebook.svg" alt="" className="h-5 w-5" />
            </a>
            <a href="#" aria-label="YouTube">
              <img src="/icon-youtube.svg" alt="" className="h-5 w-5" />
            </a>
            <a href="#" aria-label="Twitter">
              <img src="/icon-twitter.svg" alt="" className="h-5 w-5" />
            </a>
            <a href="#" aria-label="Pinterest">
              <img src="/icon-pinterest.svg" alt="" className="h-5 w-5" />
            </a>
            <a href="#" aria-label="Instagram">
              <img src="/icon-instagram.svg" alt="" className="h-5 w-5" />
            </a>
          </div>
        </div>

        <nav className="flex justify-around gap-12 text-sm md:gap-20">
          <div className="flex flex-col gap-3">
            <a href="#home" className="hover:text-[hsl(12,88%,59%)]">
              Home
            </a>
            <a href="#pricing" className="hover:text-[hsl(12,88%,59%)]">
              Pricing
            </a>
            <a href="#product" className="hover:text-[hsl(12,88%,59%)]">
              Products
            </a>
            <a href="#about" className="hover:text-[hsl(12,88%,59%)]">
              About Us
            </a>
          </div>

          <div className="flex flex-col gap-3">
            <a href="#careers" className="hover:text-[hsl(12,88%,59%)]">
              Careers
            </a>
            <a href="#community" className="hover:text-[hsl(12,88%,59%)]">
              Community
            </a>
            <a href="#privacy" className="hover:text-[hsl(12,88%,59%)]">
              Privacy Policy
            </a>
          </div>
        </nav>

        <div className="flex flex-col justify-between gap-6">
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="Updates in your inbox..."
              aria-label="Email address"
              className="min-w-0 flex-1 rounded-full px-4 py-3 text-sm bg-white text-gray-900 outline-none focus:ring-2 focus:ring-[hsl(12,88%,59%)]"
            />
            <button
              type="submit"
              className="rounded-full bg-[hsl(12,88%,59%)] px-6 py-3 text-sm font-bold text-white transition-opacity hover:opacity-70"
            >
              Go
            </button>
          </form>

          <p className="hidden text-right text-xs text-gray-400 md:block">
            Copyright 2020. All Rights Reserved.
          </p>
        </div>
      </div>

      <p className="mt-10 text-center text-xs text-gray-400 md:hidden">
        Copyright 2020. All Rights Reserved.
      </p>
    </footer>
  );
};
