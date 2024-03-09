import AboutUs from "@/components/ui/home-sections/AboutUs";
import Banner from "@/components/ui/home-sections/Banner";
import Portfolio from "@/components/ui/home-sections/Portfolio";
import Services from "@/components/ui/home-sections/Services";

const HomePage = () => {
  return (
    <main>
      <Banner />
      <Portfolio />
      <AboutUs />
      <Services />
    </main>
  );
};

export default HomePage;
