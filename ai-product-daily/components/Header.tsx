import { Search } from "lucide-react";

export function Header() {
  return (
    <header className="site-header">
      <a href="/" className="brand">
        <span className="brand-mark">A</span>
        <span>AI Product Daily</span>
      </a>

      <nav>
        <a href="#today">Today</a>
        <a href="#archive">Archive</a>
        <a href="#about">About</a>
        <button className="icon-button" aria-label="搜索">
          <Search size={18} />
        </button>
      </nav>
    </header>
  );
}
