import Link from "next/link";

function NavBar() {
  return (
    <div className="p-4 flex-row justify-between items-center bg-black text-white">
      <Link href="/">
        <h1 className="text-2xl font-bold">Goggins AI</h1>
      </Link>
    </div>
  );
}

export default NavBar;
