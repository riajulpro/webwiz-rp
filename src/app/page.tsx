import AboutUs from "@/components/ui/home-sections/AboutUs";
import Banner from "@/components/ui/home-sections/Banner";
import Blogs from "@/components/ui/home-sections/Blogs";
import ClientReviews from "@/components/ui/home-sections/ClientReviews";
import ContactUs from "@/components/ui/home-sections/ContactUs";
import Portfolio from "@/components/ui/home-sections/Portfolio";
import Services from "@/components/ui/home-sections/Services";

const HomePage = () => {
  return (
    <main className="main-container">
      <Banner />
      <Portfolio />
      <AboutUs />
      <Services />
      <ClientReviews />
      <ContactUs />
      <Blogs />
    </main>
  );
};

export default HomePage;
