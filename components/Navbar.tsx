import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-neutral-950/80 
backdrop-blur border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-8 h-16 flex items-center 
justify-between">
        <Link href="/" className="font-semibold text-lg">
          Sports Analytics
        </Link>

        <div className="flex gap-8 text-sm text-neutral-300">
          <Link href="/product">Product</Link>
          <Link href="/methodology">Methodology</Link>
          <Link href="/coverage">Coverage</Link>
          <Link
            href="/"
            className="px-4 py-2 bg-white text-black rounded-lg"
          >
            Request Access
          </Link>
        </div>
      </div>
    </nav>
  );
}

