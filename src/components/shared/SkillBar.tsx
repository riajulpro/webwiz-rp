type SkillBarType = {
  title: string;
  barRange: string;
};

const SkillBar = ({ title, barRange }: SkillBarType) => {
  const getBarClass = (range: string) => {
    const percentage = parseInt(range, 10);
    if (percentage >= 0 && percentage <= 25) {
      return `w-[25%]`;
    } else if (percentage > 25 && percentage <= 50) {
      return "w-[50%]";
    } else if (percentage > 50 && percentage <= 75) {
      return "w-[75%]";
    } else if (percentage > 75 && percentage <= 90) {
      return "w-[80%]";
    } else {
      return "w-full";
    }
  };
  return (
    <div>
      <h4 className="font-semibold text-[16px] leading-[16px] mb-[10px]">
        {title}
      </h4>
      <div className="flex items-center gap-[12px]">
        <div className="relative w-full h-[10px] bg-[#E2EBFB] rounded-full">
          <div
            className={`absolute bg-gradient-to-b from-[#5F90F0] to-[#185AD9] rounded-full h-[10px] ${getBarClass(
              barRange
            )} inset-0 z-50`}
          ></div>
        </div>
        <div className="text-[#64656D] font-normal text-[14px] leading-[22.4px]">
          {barRange}%
        </div>
      </div>
    </div>
  );
};

export default SkillBar;
