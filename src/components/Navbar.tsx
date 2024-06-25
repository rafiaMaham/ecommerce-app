import Link from "next/link";
import Menu from "./Menu";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="h-20 px-4 md:px-9 lg:px-16 xl:px-32 2xl:px-64 relative">
      {/* Mobile */}
      <div className=" h-full flex items-center justify-between">
        <Link href="/">
          <div className="text-2xl tracking-wide">FableFinds</div>
        </Link>
        <Menu />
      </div>

      {/* Larger screen */}
      <div className="hidden md:flex items-center h-full justify-between gap-8">
        {/* left */}
        <div className="w-1/3">
          <Link href="/">
          <Image src="/logo.png" alt="" width={24} height={24}/>
            <div className="text-2xl tracking-wide">FableFinds</div>
          </Link>
        </div>
        {/* right */}
        <div className="w-2/3"></div>
      </div>
    </div>
  );
};

export default Navbar;
