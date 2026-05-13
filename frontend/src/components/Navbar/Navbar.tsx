import { Search, ShoppingBag, SquareUserRound } from "lucide-react";

function Navbar({setIsCartOpen}: {setIsCartOpen: (open: boolean) => void}) {
  return (
    <nav className="bg-surface/80 dark:bg-surface-dim/80 backdrop-blur-md docked full-width top-0 sticky z-50 shadow-[0_15px_15px_-3px_rgba(74,66,56,0.04)]">
      <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-4 max-w-container-max mx-auto">
        <div className="text-headline-md font-headline-md font-semibold text-primary dark:text-primary-fixed-dim">
          Aurelia Books
        </div>
        <div className="hidden md:flex items-center space-x-gutter">
          <a
            className="text-primary dark:text-primary-fixed border-b-2 border-primary dark:border-primary-fixed pb-1 font-label-md text-label-md hover:text-primary dark:hover:text-primary-fixed transition-colors duration-200"
            href="#"
          >
            Home
          </a>
          <a
            className="text-on-surface-variant dark:text-surface-variant font-medium font-label-md text-label-md hover:text-primary dark:hover:text-primary-fixed transition-colors duration-200"
            href="#"
          >
            Catalog
          </a>
          <a
            className="text-on-surface-variant dark:text-surface-variant font-medium font-label-md text-label-md hover:text-primary dark:hover:text-primary-fixed transition-colors duration-200"
            href="#"
          >
            Staff Picks
          </a>
          <a
            className="text-on-surface-variant dark:text-surface-variant font-medium font-label-md text-label-md hover:text-primary dark:hover:text-primary-fixed transition-colors duration-200"
            href="#"
          >
            About
          </a>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center bg-surface-container-low px-4 py-2 rounded-full border border-outline-variant/30">
            <Search className="material-symbols-outlined text-on-surface-variant text-[15px] mr-2" />
            <input
              className="bg-transparent border-none outline-none focus:outline-none focus:ring-0 text-label-md font-label-md text-primary caret-secondary placeholder:text-on-surface-variant w-32 lg:w-48"
              placeholder="Search classics..."
              type="text"
            />
          </div>
          <div className="flex gap-2">
            <button
              className="p-2 text-on-surface-variant hover:text-primary transition-transform duration-150 ease-in-out active:scale-95"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingBag className="cursor-pointer material-symbols-outlined" />
            </button>
            <button className="p-2 text-on-surface-variant hover:text-primary transition-transform duration-150 ease-in-out active:scale-95">
              <SquareUserRound className="cursor-pointer material-symbols-outlined" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
