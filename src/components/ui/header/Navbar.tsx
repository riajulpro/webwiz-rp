import { LogoIcon } from "@/utils/icons/Icons";
import { navLinks } from "@/utils/mocks/NavLinks";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="mt-[32px] nav-container">
      <div className="flex justify-between items-center">
        <div>
          <LogoIcon />
        </div>
        <div className="flex gap-[32px] items-center">
          {navLinks.map((link) => (
            <Link className="text-[14px]" key={link.route} href={link.pathName}>
              {link.route}
            </Link>
          ))}
          <button className="btn-primary w-[104px]">Contact</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
