import { useState } from "react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="relative z-50 mx-auto w-full max-w-7xl px-6 py-6 md:px-10 lg:px-12">
      <div className="flex items-center justify-between">
        <a href="#" aria-label="Manage home">
          <img src="/logo.svg" alt="Manage" className="w-28 md:w-36" />{" "}
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-[#242d52] md:flex">
          <a href="#pricing" className="transition-colors hover:text-gray-400">
            Pricing
          </a>
          <a href="#product" className="transition-colors hover:text-gray-400">
            Product
          </a>
          <a href="#about" className="transition-colors hover:text-gray-400">
            About Us
          </a>
          <a href="#careers" className="transition-colors hover:text-gray-400">
            Careers
          </a>
          <a
            href="#community"
            className="transition-colors hover:text-gray-400"
          >
            Community
          </a>
        </nav>
        <a
          href="#get-started"
          className="hidden rounded-full bg-[#f25f3a] px-7 py-3 text-sm font-bold text-white shadow-md transition-opacity hover:opacity-70 md:inline-flex"
        >
          Get Started
        </a>
        <button
          type="button"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden"
        >
          <img
            src={isOpen ? "/icon-close.svg" : "/icon-hamburger.svg"}
            alt=""
            className="h-5 w-6"
          />
        </button>
      </div>
      {isOpen && (
        <>
          <button
            type="button"
            aria-label="Close navigation menu"
            onClick={closeMenu}
            className="fixed inset-0 top-20 -z-10 bg-black/30 md:hidden"
          />

          <nav className="absolute left-6 right-6 top-full mt-2 flex flex-col items-center gap-6 rounded-md bg-white px-6 py-8 text-sm font-bold text-[#242d52] shadow-xl md:hidden">
            <a href="#pricing" onClick={closeMenu}>
              Pricing
            </a>
            <a href="#product" onClick={closeMenu}>
              Product
            </a>
            <a href="#about" onClick={closeMenu}>
              About Us
            </a>
            <a href="#careers" onClick={closeMenu}>
              Careers
            </a>
            <a href="#community" onClick={closeMenu}>
              Community
            </a>
            <a
              href="#get-started"
              onClick={closeMenu}
              className="rounded-full bg-[#f25f3a] px-7 py-3 font-bold text-white"
            >
              Get Started
            </a>
          </nav>
        </>
      )}
    </header>
  );
};
