import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <div>
        <nav className="flex justify-between items-center py-4">
          <Link href="/">Home</Link>
          <br />
          <Link href="/contact">contact</Link>
          <br />
          <Link href="/about">About</Link>
          <br />
          <Link href="/services">Services</Link>
          <br />
          <Link href="/services/mobile">Services-Mobile</Link>
        </nav>
      </div>
    </div>
  );
}
