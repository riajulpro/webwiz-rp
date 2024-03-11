import TitleWithDescription from "@/components/shared/TitleWithDescription";

const Blogs = () => {
  return (
    <section className="section-container">
      <div className="flex items-center justify-between">
        <div className="flex-1"></div>
        <div className="flex-1">
          <TitleWithDescription
            isVertical={true}
            title="Our satisfied customers share their stories"
            blueText="satisfied customers"
            description="The team  consistently delivered outstanding results surpassing our expectations in terms of creativity strategy Graphic design is a dynamic and creative field that blends artistry with technology"
            sectionName="Blog"
          />
        </div>
      </div>
    </section>
  );
};

export default Blogs;
