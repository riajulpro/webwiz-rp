import TitleWithDescription from "@/components/shared/TitleWithDescription";
import Image from "next/image";

const Banner = () => {
  return (
    <section className="mt-[22px] section-container">
      <div className="flex justify-between items-center gap-[20px]">
        <div className="flex-1">
          <TitleWithDescription
            isMain={true}
            isVertical={true}
            title="Turning Imagination into Innovation"
            description="Welcome to my digital playground, where creativity knows no bounds. I'm a passionate designer and developer on a mission to turn innovative ideas into stunning digital realities."
            blueText="Imagination"
          />
          <div className="mt-6">
            <button className="btn-primary w-[160px] mr-3">Hire me</button>
            <button className="btn-secondary">View Portfolio</button>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <Image
            src={"/images/banner-photo.png"}
            alt="Banner"
            width={358}
            height={433}
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
