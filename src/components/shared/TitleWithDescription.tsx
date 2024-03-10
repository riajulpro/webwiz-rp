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
      <h6 className="text-[14px] font-semibold uppercase tracking-[1.68px] text-accent-color">
        {sectionName}
      </h6>
      <div
        className={`flex justify-between
        ${isVertical ? "flex-col gap-[16px]" : "flex-row items-start"}`}
      >
        <div>
          <h1
            className={`desktop:w-[554px] ${
              isMain
                ? "text-[64px] leading-[84px]"
                : "text-[40px] leading-[56px]"
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
            border-l-[4px] border-primary-color leading-[25.6px] pl-[12px] font-normal 
            ${isMain ? "text-[16px] desktop:w-[572px]" : ""}
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
