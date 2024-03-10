import TitleWithDescription from "@/components/shared/TitleWithDescription";
import { Address, Clock, Mail, Phone } from "@/utils/icons/ContactIcons";
import Image from "next/image";

const ContactUs = () => {
  return (
    <section className="contact-us-container">
      <div className="flex justify-between items-center w-full">
        <div className="flex-1">
          <TitleWithDescription
            title="Contact Us"
            description="Feel free to reach out to us at any time. We value your feedback, inquiries, and collaboration."
            isVertical={true}
            desWidth="w-[456px]"
            textSize="text-[16px]"
          />
          <div className="mt-[40px] desktop:w-[456px]">
            <form className="flex flex-col gap-[24px]">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-[24px] py-[16px] border-b"
              />
              <input
                type="text"
                placeholder="Email"
                className="w-full px-[24px] py-[16px] border-b"
              />
              <input
                type="text"
                placeholder="Message"
                className="w-full px-[24px] py-[16px] border-b"
              />
              <button
                type="submit"
                className="w-full linear-gradient rounded-full text-white py-[16px] px-[24px]"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="flex-1 relative flex justify-end items-center">
          <div className="bg-white absolute desktop:w-[471px] -left-[110px] top-[94px] rounded-[12px] p-[32px] contact-overlay-shadow flex flex-col justify-between gap-[32px]">
            <div className="flex items-center gap-2">
              <Mail /> <span>michael.mitc@example.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone /> <span>michael.mitc@example.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Address /> <span>michael.mitc@example.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock /> <span>michael.mitc@example.com</span>
            </div>
          </div>
          <Image
            src={"/images/contact-girl.png"}
            alt="Contact Girl"
            width={590}
            height={475}
            className="rounded-l-[16px]"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
