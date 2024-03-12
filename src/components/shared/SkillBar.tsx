type SkillBarType = {
  title: string;
  barRange: string;
};

const SkillBar = ({ title, barRange }: SkillBarType) => {
  return (
    <>
      <h4 className="font-semibold text-[16px] leading-[16px] mb-[10px]">
        {title}
      </h4>
      <div className="flex items-center gap-[12px]">
        <div className="relative w-full h-[10px] bg-[#E2EBFB] rounded-full">
          <div
            className={`absolute bg-gradient-to-b from-[#5F90F0] to-[#185AD9] rounded-full h-[10px] inset-0 z-50`}
            style={{ width: `${barRange}%` }}
          ></div>
        </div>
        <div className="text-[#64656D] font-normal text-[14px] leading-[22.4px]">
          {barRange}%
        </div>
      </div>
    </>
  );
};

export default SkillBar;
