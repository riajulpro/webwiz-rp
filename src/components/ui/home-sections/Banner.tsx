import TitleWithDescription from "@/components/shared/TitleWithDescription";
import { UpRightArrow } from "@/utils/icons/CardIcons";
import { BannerCircleIcon, ProfileIcon } from "@/utils/icons/Icons";
import Image from "next/image";

const Banner = () => {
  return (
    <section className="desktop:mt-[22px] section-container">
      <div className="flex justify-between items-center gap-[20px]">
        <div className="flex-1">
          <TitleWithDescription
            isMain={true}
            isVertical={true}
            title="Turning Imagination into Innovation"
            description="Welcome to my digital playground, where creativity knows no bounds. I'm a passionate designer and developer on a mission to turn innovative ideas into stunning digital realities."
            blueText="Imagination"
          />
          <div className="mt-[20px]">
            <button className="btn-primary w-[160px] mr-3">Hire Me</button>
            <button className="btn-secondary">View Portfolio</button>
          </div>
        </div>
        <div className="relative flex-1 flex justify-center items-center">
          <Image
            src={"/images/banner-photo.png"}
            alt="Banner"
            width={358}
            height={433}
          />
          <div className="absolute -z-10 h-[481px] w-[308px] bg-banner-bg rounded-[12px]"></div>
          <div className="absolute -z-20 h-[64px] w-[64px] bg-banner-bg-circle rounded-full -top-12 right-20"></div>
          <div className="absolute -bottom-[34px] left-[116px]">
            <BannerCircleIcon />
          </div>
          <div className="absolute top-[34px] left-0 service-card-shadow overlay-bg">
            <div className="w-[47px] h-[47px] rounded-full overflow-hidden">
              <Image
                src={"/images/banner-photo.png"}
                alt="Banner"
                width={358}
                height={433}
                className="object-cover"
              />
            </div>
            <div>
              <h4 className="overlay-title">Albert Flores</h4>
              <p className="overlay-subtitle">Product Manager</p>
            </div>
          </div>
          <div className="absolute right-0 top-[148px] overlay-bg right-shadow">
            <div className="bg-card-left-icon p-[8px] rounded-full">
              <ProfileIcon />
            </div>
            <div>
              <h4 className="overlay-title">15,235</h4>
              <p className="overlay-subtitle">Visitors</p>
            </div>
            <div className="text-primary-color text-[12px] font-normal flex items-center gap-[4px]">
              {" "}
              <UpRightArrow size="12px" color="#5F90F0" /> 25%
            </div>
          </div>
          <div className="absolute right-[22px] -bottom-[50px] overlay-bg right-shadow">
            <div className="bg-card-left-icon p-[8px] rounded-full">
              <Image
                src={"/images/premium-icon.png"}
                alt="Project Done"
                height={39}
                width={39}
              />
            </div>
            <div>
              <p className="overlay-subtitle">Project Done</p>
              <h4 className="overlay-title">4679</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
