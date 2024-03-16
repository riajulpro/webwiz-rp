import TitleWithDescription from "@/components/shared/TitleWithDescription";
import { LeftArrow, RightArrow, StarIcon } from "@/utils/icons/Icons";
import Image from "next/image";

const ClientReviews = () => {
  return (
    <section className="tablet:mt-[42px]">
      <div className="container-wrapper py-[40px]">
        <div className="container">
          <article className="flex flex-col tablet:flex-row gap-[32px] items-stretch tablet:flex-wrap">
            <section className="self-start tablet:w-[314px] desktop:w-[330px]">
              <TitleWithDescription
                isVertical={true}
                title="Client Reviews"
                description="The team at  consistently delivered outstanding surpassing expectations "
              />
            </section>
            <section>
              <Image
                src={"/images/client-image-one.png"}
                alt="Client Photo 01"
                height={401}
                width={306}
              />
            </section>
            <section className="self-end tablet:w-full desktop:w-[420px] flex desktop:flex-col flex-col-reverse gap-[16px]">
              <div className="flex justify-end gap-[12px] items-center">
                <button className="border border-primary-color rounded-full p-[12px]">
                  <LeftArrow />
                </button>
                <p>
                  <span className="text-primary-color text-[19px]">01</span>/
                  <span className="text-[11px]">06</span>
                </p>
                <button className="linear-gradient border border-primary-color rounded-full p-[12px]">
                  <RightArrow />
                </button>
              </div>
              <div className="border border-[#5F90F0] p-[24px] rounded-[12px]">
                <div className="flex items-center justify-between">
                  <div>
                    <h5 className="text-[20px] leading-[30px] font-semibold">
                      Maria Sarapavoo
                    </h5>
                    <p className="text-[#64656D] leading-[22.4px] text-[14px] font-normal">
                      Whistleblower and privacy advocate
                    </p>
                  </div>
                  <div className="flex gap-[8px] items-center">
                    <p>4.5</p>
                    <StarIcon />
                  </div>
                </div>
                <div className="mt-[16px]">
                  The team at WebWhiz consistently delivered outstanding results
                  surpassing our expectations in{" "}
                </div>
              </div>
            </section>
          </article>
        </div>
      </div>
    </section>
  );
};

export default ClientReviews;
