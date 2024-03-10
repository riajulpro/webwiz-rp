type TitleType = {
  isVertical?: boolean;
  isMain?: boolean;
  sectionName?: string;
  title: string;
  description: string;
  blueText?: string;
};

const TitleWithDescription = ({
  isVertical,
  sectionName,
  title,
  description,
  blueText,
  isMain,
}: TitleType) => {
  const titleArray = title.split(" ");

  return (
    <div>
      <h6 className="text-[14px] font-semibold uppercase tracking-[1.68px] text-accent-color">
        {sectionName}
      </h6>
      <div
        className={`flex justify-between ${
          isVertical ? "flex-col gap-4" : "flex-row"
        }`}
      >
        <div>
          <h1
            className={`w-[554px] ${
              isMain ? "text-[64px]" : "text-4xl"
            } font-bold ${isMain ? "leading-[76.8px]" : "leading-[56px]"}`}
          >
            {titleArray.map((word, index) => (
              <span
                key={index}
                className={word === blueText ? "text-primary-color" : ""}
              >
                {word}{" "}
              </span>
            ))}
          </h1>
        </div>
        <div>
          <p className="border-l border-primary-color pl-3 w-[498px] font-normal text-xs">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TitleWithDescription;
