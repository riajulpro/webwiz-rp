import { LogoIcon } from "@/utils/icons/Icons";
import { navLinks } from "@/utils/mocks/NavLinks";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="mt-8 content-box">
      <div className="flex justify-between items-center">
        <div>
          <LogoIcon />
        </div>
        <div className="flex gap-14 items-center">
          <div className="flex gap-8 items-center">
            {navLinks.map((link) => (
              <Link className="text-xs" key={link.route} href={link.pathName}>
                {link.route}
              </Link>
            ))}
          </div>
          <button className="btn-primary">Contact</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
