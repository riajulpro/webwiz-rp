import TitleWithDescription from "@/components/shared/TitleWithDescription";
import { LeftArrow, RightArrow, StarIcon } from "@/utils/icons/Icons";
import Image from "next/image";

const ClientReviews = () => {
  return (
    <section className="section-container tablet:mt-[42px]">
      <div className="flex gap-[32px] items-stretch">
        <article className="self-start desktop:w-[330px]">
          <TitleWithDescription
            isVertical={true}
            title="Client Reviews"
            description="The team at  consistently delivered outstanding surpassing expectations "
          />
        </article>
        <article>
          <Image
            src={"/images/client-image-one.png"}
            alt="Client Photo 01"
            height={401}
            width={306}
          />
        </article>
        <article className="self-end">
          <div className="flex justify-end gap-[12px] items-center mb-[16px]">
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
        </article>
      </div>
    </section>
  );
};

export default ClientReviews;
