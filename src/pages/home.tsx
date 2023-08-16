import Brands from "../components/home/brands";
import CaseStudy from "../components/home/caseStudy";
import Growing from "../components/home/growing";
import Landing from "../components/home/landing";
import Touch from "../components/home/touch";
import What from "../components/home/what";
import Who from "../components/home/who";

const Home = () => {
  return (
    <>
      <Landing />
      <Who />
      <What />
      <CaseStudy />
      <Brands />
      <Growing />
      <Touch />
    </>
  );
};

export default Home;
