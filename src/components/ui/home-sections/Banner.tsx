import TitleWithDescription from "@/components/shared/TitleWithDescription";
import { UpRightArrow } from "@/utils/icons/CardIcons";
import { BannerCircleIcon, ProfileIcon } from "@/utils/icons/Icons";
import Image from "next/image";

const Banner = () => {
  return (
    <section className="mt-[27px] tablet:mt-[32px] desktop:mt-[22px]">
      <div className="container-wrapper tablet:py-[40px] sm:py-auto">
        <div className="container flex flex-col tablet:flex-row justify-between items-center gap-[20px]">
          <article className="flex-1">
            <TitleWithDescription
              isMain={true}
              isVertical={true}
              title="Turning Imagination into Innovation"
              description="Welcome to my digital playground, where creativity knows no bounds. I'm a passionate designer and developer on a mission to turn innovative ideas into stunning digital realities."
              blueText="Imagination"
            />
            <div className="flex justify-center items-center gap-2 tablet:static mt-[20px]">
              <button className="w-full btn-primary tablet:w-[160px] mr-3">
                Hire Me
              </button>
              <button className="w-full tablet:w-auto btn-secondary">
                View Portfolio
              </button>
            </div>
          </article>
          <article className="relative desktop:hidden flex-1 flex items-center justify-center my-10">
            <Image
              src={"/images/tablet-banner.png"}
              alt="Banner"
              width={327}
              height={286}
            />
            <div className="absolute -right-6 -bottom-6 overlay-bg right-shadow">
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
            <div className="absolute -left-6 -top-6 overlay-bg right-shadow">
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
            <div className="absolute rounded-md -z-10 h-[318px] w-[295px] bg-[#FFF3EB]" />
            <div className="absolute -bottom-[34px] left-[0px]">
              <BannerCircleIcon />
            </div>
            <div className="absolute -z-20 h-[50px] w-[50px] bg-banner-bg-circle rounded-full -top-7 -right-7" />
          </article>
          <div className="hidden relative flex-1 desktop:flex justify-center items-center">
            <Image
              src={"/images/banner-photo.png"}
              alt="Banner"
              width={358}
              height={433}
            />
            <div className="absolute -z-10 tablet:h-[481px] tablet:w-[308px] bg-banner-bg rounded-[12px]"></div>
            <div className="absolute -z-20 h-[64px] w-[64px] bg-banner-bg-circle rounded-full -top-12 right-20" />
            <div className="absolute -bottom-[34px] left-[116px]">
              <BannerCircleIcon />
            </div>
            <div className="absolute top-[34px] left-0 service-card-shadow overlay-bg">
              <div className="tablet:w-[47px] tablet:h-[47px] rounded-full overflow-hidden">
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
            <div className="absolute right-[14px] -bottom-[54px] overlay-bg right-shadow">
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
      </div>
    </section>
  );
};

export default Banner;
