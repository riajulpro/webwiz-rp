import TabsItems from "@/components/shared/TabsItems";
import TitleWithDescription from "@/components/shared/TitleWithDescription";

const Portfolio = () => {
  return (
    <section className="section-bg tablet:mt-[42px] tablet:py-[32px]">
      <div className="container-wrapper py-[40px] tablet:py-0">
        <article className="container">
          <TitleWithDescription
            sectionName="Portfolio"
            blueText="Creative innovation"
            title="Discovering digital mastery and Creative innovation"
            description="In our portfolio section, you'll embark on a visual journey through a meticulously curated gallery that represents the epitome of digital excellence and creative ingenuity."
            desWidth="tablet:w-[505px]"
          />
          <TabsItems />
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
