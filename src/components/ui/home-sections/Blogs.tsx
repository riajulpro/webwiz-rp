import TitleWithDescription from "@/components/shared/TitleWithDescription";
import Image from "next/image";

const Blogs = () => {
  return (
    <section className="section-container tablet:mt-[200px] desktop:mt-[86px]">
      <div className="flex items-center justify-between gap-[70px] mt-[64px]">
        <div className="flex-1 relative flex justify-center items-center">
          <Image
            src={"/images/blog-photo.png"}
            alt="Blog Photo"
            width={369}
            height={510}
            className="absolute desktop:bottom-[74px]"
          />
          <div className="bg-[#EDEEFB] desktop:w-[554px] desktop:h-[450px] rounded-[16px]"></div>
        </div>
        <div className="flex-1">
          <div className="mb-[44px]">
            <TitleWithDescription
              isVertical={true}
              title="Our satisfied customers share their stories"
              blueText="satisfied customers"
              description="The team  consistently delivered outstanding results surpassing our expectations in terms of creativity strategy Graphic design is a dynamic and creative field that blends artistry with technology"
              sectionName="Blog"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
