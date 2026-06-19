import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="site-navigation" style={{ display: 'flex', gap: '150px' }}>
      <Link href="/"><strong>Home</strong></Link>
      <Link href="/about"><strong>About</strong></Link>
    </nav>
  );
}