import ServiceCard from "@/components/shared/ServiceCard";
import TitleWithDescription from "@/components/shared/TitleWithDescription";
import { GraphicDesign, UpRightArrow } from "@/utils/icons/CardIcons";
import { ServiceCards } from "@/utils/mocks/ServiceCards";

const Services = () => {
  return (
    <section className="section-bg tablet:mt-[42px] tablet:py-[32px]">
      <div className="container-wrapper py-[40px]">
        <div className="container">
          <TitleWithDescription
            title="Our satisfied customers share their stories"
            blueText="satisfied customers"
            description="In our portfolio section, you'll embark on a visual journey through a meticulously curated gallery that represents the epitome of digital excellence and creative ingenuity."
            desWidth="tablet:w-[505px]"
            sectionName="Services"
          />
          <div className="mt-[40px] grid desktop:grid-cols-2 gap-[32px]">
            {ServiceCards.map((card) => (
              <ServiceCard
                key={card.title}
                icon={card.icon}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
