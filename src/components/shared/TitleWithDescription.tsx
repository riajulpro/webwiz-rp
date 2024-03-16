type TitleType = {
  isVertical?: boolean;
  isMain?: boolean;
  sectionName?: string;
  title: string;
  description: string;
  blueText?: string;
  desWidth?: string;
  textSize?: string;
};

const TitleWithDescription = ({
  isVertical,
  sectionName,
  title,
  description,
  blueText,
  isMain,
  desWidth,
  textSize,
}: TitleType) => {
  const titleArray = title.split(" ");

  return (
    <div>
      <h6 className="text-center tablet:text-left text-[14px] font-semibold uppercase tracking-[1.68px] text-accent-color">
        {sectionName}
      </h6>
      <div
        className={`
        ${
          isVertical
            ? "flex justify-between flex-col gap-[16px]"
            : "flex justify-between flex-col tablet:flex-row items-center tablet:items-start"
        }`}
      >
        <div>
          <h1
            className={`w-full text-center tablet:text-left desktop:w-[554px] ${
              isMain
                ? "text-[32px] tablet:text-[40px] desktop:text-[64px] tablet:leading-[56px] desktop:leading-[84px]"
                : "text-[24px] tablet:leading-[39.2px] desktop:text-[40px] desktop:leading-[56px]"
            } font-bold`}
          >
            {titleArray.map((word, index) => (
              <span
                key={index}
                className={
                  blueText?.includes(word) ? "text-primary-color title-bg" : ""
                }
              >
                {word}{" "}
              </span>
            ))}
          </h1>
        </div>
        <div>
          <p
            className={`${isVertical ? "" : "mt-[4px]"}
            tablet:border-l-[4px] tablet:border-primary-color leading-[25.6px] pl-[12px] font-normal tablet:line-clamp-2 text-center tablet:text-left
            ${
              isMain ? "text-[16px] w-full tablet:w-auto desktop:w-[572px]" : ""
            }
            ${textSize ? textSize : "text-[14px]"}
            ${desWidth}`}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TitleWithDescription;
