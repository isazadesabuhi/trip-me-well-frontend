import Link from "next/link";
function Header() {
  return (
    <header className="flex flex-row items-center justify-between text-slate-300">
      <Link href="/" className="text-5xl font-bold text-black">
        Trip. <span className="hidden">Me Well</span>
      </Link>
      <div className="flex flex-row gap-x-4 text-black text-[14px] font-bold">
        <Link href="/">Blog</Link>
        {/* <Link href="/about">About</Link> */}
      </div>
    </header>
  );
}

export default Header;
