import Link from "next/link";
export default function Header(){return <header className="header wrap"><Link href="/" className="brand"><span>A</span>AI Product Daily</Link><nav><Link href="/">Today</Link><Link href="/#archive">Archive</Link><a href="mailto:hello@example.com">About</a></nav></header>}
