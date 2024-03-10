import { GraphicDesign, UpRightArrow } from "@/utils/icons/CardIcons";

type CardType = {
  title: string;
  description: string;
  icon: any;
};

const ServiceCard = ({ icon, title, description }: CardType) => {
  return (
    <div className="border rounded-[32px] p-[32px] bg-white hover:shadow-lg cursor-pointer">
      <div className="flex justify-between items-start mb-[16px]">
        <div className="bg-card-left-icon rounded-[16px] p-[12px]">{icon}</div>
        <div className="linear-gradient p-[12px] rounded-full">
          <UpRightArrow />
        </div>
      </div>
      <h4 className="text-[28px] capitalize font-bold leading-[39.2px] mt-[16px]">
        {title}
      </h4>
      <p className="mt-[8px] text-[16px] leading-[25.6px]">{description}</p>
    </div>
  );
};

export default ServiceCard;
