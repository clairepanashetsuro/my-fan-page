import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="site-navigation">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
    </nav>
  );
}