import Services from "../../components/Shared/Services/Services";
import About from "./About/About";
import Hero from "./Hero/Hero";
import Partners from "./Partners/Partners";
import Promotion from "./Promotion/Promotion";
import Team from "./Team/Team";

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Promotion />
      <Team />
      <Partners />
    </>
  );
};

export default Home;
