import {
  LocationIcon,
  MailIcon,
  PhoneIcon,
  WebIcon,
} from "@/utils/icons/FooterIcons";
import { LogoIcon } from "@/utils/icons/Icons";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="main-container bg-footer-color text-white">
      <div className="footer-container pb-[42px]">
        <article className="flex justify-between pt-[32px] mb-[62px]">
          <section className="tablet:flex-1">
            <h6 className="text-[#FBA017] font-semibold leading-[22.4px] text-[14px] uppercase tracking-[1.68px]">
              Join Us
            </h6>
            <h3 className="flex items-center gap-[24px] font-bold desktop:text-[32px] desktop:leading-[44.8px]">
              <span>
                <span className="footer-title-bg">Subscribe</span> for
                newsletter
              </span>
            </h3>
          </section>
          <section className="tablet:flex-1 relative">
            <input
              type="text"
              placeholder="Enter your email"
              className="bg-transparent border border-footer-border text-[16px] rounded-full py-[8px] px-[16px] tablet:w-full desktop:w-[370px]"
            />
            <button className="absolute right-0 linear-gradient text-white text-[14px] py-[10px] px-[16px] rounded-full">
              Subscribe
            </button>
          </section>
        </article>

        <article className="w-full flex-col desktop:flex-row flex items-start desktop:gap-[133px] tablet:gap-[32px]">
          <section className="tablet:w-full tablet:items-center desktop:w-[339px] flex tablet:justify-between tablet:flex-row desktop:flex-col">
            <div>
              <Image
                src="/images/footer-logo.png"
                alt="Footer Logo"
                width={115}
                height={50}
              />
              <p className="footer-link desktop:w-[339px] mt-[10px]">
                Customer Feedback Analytic like it was Supposed to be!
              </p>
            </div>
            <div>
              <p className="mt-[16px]">Social Links</p>
              <div className="flex items-center gap-[8px] mt-[16px]">
                <Link href={"/"}>
                  <Image
                    src={"/images/Twitter.png"}
                    alt="Twitter"
                    height={24}
                    width={24}
                  />
                </Link>
                <Link href={"/"}>
                  <Image
                    src={"/images/Linkedin.png"}
                    alt="Linkedin"
                    height={24}
                    width={24}
                  />
                </Link>
                <Link href={"/"}>
                  <Image
                    src={"/images/Telegram.png"}
                    alt="Telegram"
                    height={24}
                    width={24}
                  />
                </Link>
                <Link href={"/"}>
                  <Image
                    src={"/images/Behance.png"}
                    alt="Behance"
                    height={24}
                    width={24}
                  />
                </Link>
                <Link href={"/"}>
                  <Image
                    src={"/images/Dribbble.png"}
                    alt="Dribbble"
                    height={24}
                    width={24}
                  />
                </Link>
              </div>
            </div>
          </section>
          <section className="desktop:w-[668px] flex items-start gap-[133px]">
            <div>
              <h4 className="footer-title mb-[16px]">Company</h4>
              <div className="flex flex-col gap-[12px]">
                <Link href="/" className="footer-link">
                  Home
                </Link>
                <Link href="/" className="footer-link">
                  About Us
                </Link>
                <Link href="/" className="footer-link">
                  Careers
                </Link>
                <Link href="/" className="footer-link">
                  Press
                </Link>
              </div>
            </div>
            <div>
              <h4 className="footer-title mb-[16px]">Our services</h4>
              <div className="flex flex-col gap-[12px]">
                <Link href="/" className="footer-link">
                  UI/UX Design
                </Link>
                <Link href="/" className="footer-link">
                  E-comers
                </Link>
                <Link href="/" className="footer-link">
                  Marketing
                </Link>
                <Link href="/" className="footer-link">
                  Free Delivery
                </Link>
              </div>
            </div>
            <div>
              <h4 className="footer-title mb-[16px]">Contact</h4>
              <div className="flex flex-col gap-[12px]">
                <Link href="/" className="footer-link flex gap-[8px]">
                  <MailIcon /> alexgoat@gmai.com
                </Link>
                <Link href="/" className="footer-link flex gap-[8px]">
                  <PhoneIcon /> +880 16096-55707
                </Link>
                <Link href="/" className="footer-link flex gap-[8px]">
                  <LocationIcon /> 221b Baker St London
                </Link>
                <Link href="/" className="footer-link flex gap-[8px]">
                  <WebIcon /> WebWhiz.com
                </Link>
              </div>
            </div>
          </section>
        </article>
      </div>
    </footer>
  );
};

export default Footer;
