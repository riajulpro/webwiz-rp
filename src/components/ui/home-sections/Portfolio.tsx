import TabsItems from "@/components/shared/TabsItems";
import TitleWithDescription from "@/components/shared/TitleWithDescription";

const Portfolio = () => {
  return (
    <section className="section-bg tablet:mt-[42px] tablet:py-[32px]">
      <article className="section-container">
        <TitleWithDescription
          sectionName="Portfolio"
          blueText="Creative innovation"
          title="Discovering digital mastery and Creative innovation"
          description="In our portfolio section, you'll embark on a visual journey through a meticulously curated gallery that represents the epitome of digital excellence and creative ingenuity."
          desWidth="w-[505px]"
        />
        <TabsItems />
      </article>
    </section>
  );
};

export default Portfolio;
