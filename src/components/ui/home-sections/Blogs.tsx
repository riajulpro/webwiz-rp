import TitleWithDescription from "@/components/shared/TitleWithDescription";
import Image from "next/image";

const Blogs = () => {
  return (
    <section className="tablet:mt-[42px] desktop:mt-[86px]">
      <div className="container-wrapper">
        <div className="container">
          <article className="flex flex-col tablet:flex-row items-center justify-between gap-[70px] desktop:mt-[64px]">
            <section className="flex-1 relative flex flex-col tablet:flex-row justify-center items-center">
              <div className="tablet:hidden desktop:block">
                <Image
                  src={"/images/blog-photo.png"}
                  alt="Blog Photo"
                  width={369}
                  height={510}
                  className="tablet:absolute desktop:bottom-[74px]"
                />
                <div className="bg-[#EDEEFB] desktop:w-[554px] desktop:h-[450px] rounded-[16px]" />
              </div>

              <div className="tablet:block desktop:hidden"></div>
            </section>
            <section className="flex-1">
              <div className="mb-[44px]">
                <TitleWithDescription
                  isVertical={true}
                  title="Our satisfied customers share their stories"
                  blueText="satisfied customers"
                  description="The team  consistently delivered outstanding results surpassing our expectations in terms of creativity strategy Graphic design is a dynamic and creative field that blends artistry with technology"
                  sectionName="Blog"
                />
              </div>
            </section>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
