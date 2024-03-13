import SkillBar from "@/components/shared/SkillBar";
import TitleWithDescription from "@/components/shared/TitleWithDescription";
import Image from "next/image";

const AboutUs = () => {
  return (
    <section className="section-container tablet:mt-[42px]">
      <TitleWithDescription
        sectionName="About Us"
        title="We are turning products into Timeless elegance"
        blueText="Timeless elegance"
        description="In our portfolio section, you'll embark on a visual journey through a meticulously curated gallery that represents the epitome of digital excellence and creative ingenuity."
        desWidth="w-[505px]"
        textSize="text-[16px]"
      />
      <article className="desktop:mt-[48px] flex tablet:flex-col desktop:flex-row justify-between items-start gap-[32px]">
        <section className="tablet:w-full flex-1 tablet:py-[24px]">
          <div className="flex flex-col gap-[22px] bg-[#F6F9FE] rounded-[12px] p-[50px]">
            <SkillBar title="Graphics Design" barRange="65" />
            <SkillBar title="Lead Generation" barRange="87" />
            <SkillBar title="Product Design" barRange="45" />
            <SkillBar title="UI/UX Design" barRange="75" />
          </div>
        </section>
        <section className="flex-1 tablet:w-full">
          <div className="relative flex items-center justify-center">
            <Image
              src={"/images/about-us.png"}
              alt="About Us"
              width={626}
              height={417}
              className="rounded-[12px]"
            />
            <div
              className="absolute linear-gradient p-[32px] text-white rounded-[12px] 
          desktop:-right-[50px] desktop:w-[531px] desktop:-bottom-[70px] flex justify-between items-center gap-[32px] tablet:-bottom-[20px] tablet:opacity-95"
            >
              <div className="about-statics-frame">
                <h4 className="about-statics-number">58+</h4>
                <p className="about-statics-title">Project Delivery</p>
              </div>
              <div className="about-statics-frame border-x border-white px-[20px]">
                <h4 className="about-statics-number">120+</h4>
                <p className="about-statics-title">Happy Clients</p>
              </div>
              <div className="about-statics-frame">
                <h4 className="about-statics-number">32+</h4>
                <p className="about-statics-title">Years of Experience</p>
              </div>
            </div>
          </div>
        </section>
      </article>
    </section>
  );
};

export default AboutUs;
