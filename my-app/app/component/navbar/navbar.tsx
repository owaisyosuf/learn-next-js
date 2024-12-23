import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <div>
        <nav className=" bg-gray-500 text-white flex justify-end p-4 gap-x-6 ">
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
