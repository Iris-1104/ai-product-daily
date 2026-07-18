import Link from "next/link";
import ArchiveDrawer from "@/components/ArchiveDrawer";
import { issues } from "@/content/issues";

export default function Header() {
  const archiveItems = issues.map((issue) => ({
    slug: issue.slug,
    isoDate: issue.isoDate,
    dateLabel: issue.dateLabel,
    weekday: issue.weekday,
    oneSentence: issue.oneSentence,
    productCount: issue.products.length
  }));

  return (
    <header className="header wrap">
      <Link href="/" className="brand"><span>A</span>AI Product Daily</Link>
      <nav aria-label="主导航">
        <Link href="/">Today</Link>
        <ArchiveDrawer items={archiveItems} />
        <a href="mailto:hello@example.com">About</a>
      </nav>
    </header>
  );
}
