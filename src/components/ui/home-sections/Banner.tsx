import TitleWithDescription from "@/components/shared/TitleWithDescription";

const Banner = () => {
  return (
    <section className="mt-[53px] content-box">
      <div className="flex justify-between">
        <div>
          <TitleWithDescription
            isMain={true}
            isVertical={true}
            title="Turning Imagination into Innovation"
            description="Welcome to my digital playground, where creativity knows no bounds. I'm a passionate designer and developer on a mission to turn innovative ideas into stunning digital realities."
            blueText="Imagination"
          />
          <div className="mt-6">
            <button className="btn-primary w-[112px] mr-3">Hire me</button>
            <button className="btn-secondary">View Portfolio</button>
          </div>
        </div>
        <div>Image will place here</div>
      </div>
    </section>
  );
};

export default Banner;
