import React, { useLayoutEffect } from "react";
import "./Home.css";
import HomeHero from "./Component/HomeHero";
import NeedWhat from "./Component/NeedWhat";
import HomeContent from "./Component/HomeContent";
import Footer from "../../Layout/Footer";

// assets
import Illustration from "../../Assets/Illustration (2).png";
import illustrations from "../../Assets/illustrations.png";
import Illustration1 from "../../Assets/Illustration (4).png";

const Home = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <React.Fragment>
      <div className="hero">
        <HomeHero />
        <NeedWhat />
        <HomeContent
          className="row align-items-center"
          heading="EVERYTHING IN ONE PLACE"
          text={
            <>
              Need a list of all of the paperwork you need to get ready? Want to
              know how far in the immigration process you are? Need the address
              and phone number of a specific government office?{" "}
              <strong>We've got you covered.</strong>
            </>
          }
          img={Illustration}
        />
        <HomeContent
          className="row custom_revers_row flex-row-reverse align-items-center"
          heading="IN ENGLISH"
          text={
            <>
              Expats often find the language barrier daunting when first
              arriving in Germany. We take this barrier <strong>away </strong>by
              providing you with all of the information you need{" "}
              <strong>in English.</strong>
            </>
          }
          img={illustrations}
        />
        <HomeContent
          className="row align-items-center"
          heading="ADAPTED TO
          EACH CITY"
          text={
            <>
              Germany is a federal republic, meaning each individual state in
              the country operates independently from one another, each with
              different rules. EasyXpat <strong>adapts </strong>to the{" "}
              <strong>local </strong>
              processes of your target city, to make your immigration process
              <strong> seamless.</strong>
            </>
          }
          img={Illustration1}
        />
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Home;
