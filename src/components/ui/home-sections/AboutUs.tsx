import SkillBar from "@/components/shared/SkillBar";
import TitleWithDescription from "@/components/shared/TitleWithDescription";
import Image from "next/image";

const AboutUs = () => {
  return (
    <section className="section-container">
      <TitleWithDescription
        sectionName="About Us"
        title="We are turning products into Timeless elegance"
        blueText="Timeless elegance"
        description="In our portfolio section, you'll embark on a visual journey through a meticulously curated gallery that represents the epitome of digital excellence and creative ingenuity."
        desWidth="w-[505px]"
        textSize="text-[16px]"
      />
      <div className="mt-[48px] flex justify-between items-start gap-[32px]">
        <div className="flex-1">
          <div className="flex flex-col gap-[22px] bg-[#F6F9FE] rounded-[12px] p-[50px]">
            <SkillBar title="Graphics Design" barRange="65" />
            <SkillBar title="Lead Generation" barRange="87" />
            <SkillBar title="Product Design" barRange="45" />
            <SkillBar title="UI/UX Design" barRange="75" />
          </div>
        </div>
        <div className="relative">
          <div>
            <Image
              src={"/images/about-us.png"}
              alt="About Us"
              width={626}
              height={417}
              className="rounded-[12px]"
            />
            <div
              className="absolute desktop:w-[531px] linear-gradient p-[32px] text-white rounded-[12px] 
          right-0 bottom-0"
            >
              <div className="flex justify-between items-center flex-col">
                <h4 className="font-bold text-[24px] leading-[33.6px]">58+</h4>
                <p className="text-[16px] font-normal leading-[25.6px]">
                  Project Delivery
                </p>
              </div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
