import { LogoIcon, MenuIcon } from "@/utils/icons/Icons";
import { navLinks } from "@/utils/mocks/NavLinks";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="mt-[32px] container-wrapper">
      <div className="nav-container flex justify-between items-center">
        <div>
          <LogoIcon />
        </div>
        <div className="flex gap-[32px] justify-end">
          <div className="hidden gap-[32px] items-center desktop:flex">
            {navLinks.map((link) => (
              <Link
                className="text-[14px]"
                key={link.route}
                href={link.pathName}
              >
                {link.route}
              </Link>
            ))}
          </div>
          <button className="btn-primary w-[104px] hidden tablet:block">
            Contact
          </button>
          <button className="block desktop:hidden">
            <MenuIcon />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
