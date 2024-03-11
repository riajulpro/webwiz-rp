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
        <div className="flex justify-between pt-[32px] mb-[62px]">
          <div>
            <h6 className="text-[#FBA017] font-semibold leading-[22.4px] text-[14px] uppercase tracking-[1.68px]">
              Join Us
            </h6>
            <h3 className="flex items-center gap-[24px] font-bold text-[32px] leading-[44.8px]">
              <span>
                <span className="footer-title-bg">Subscribe</span> for
                newsletter
              </span>
            </h3>
          </div>
          <div>top right</div>
        </div>

        <div className="w-full flex items-start gap-[133px]">
          <div className="desktop:w-[339px]">
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
          <div className="desktop:w-[668px] flex items-start gap-[133px]">
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
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
