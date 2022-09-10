import { Fragment } from "react";
import CustomerReviewsSection from "../../sections/CustomerReviewsSection/CustomerReviewsSection";
import HeroSection from "../../sections/HeroSection/HeroSection";
import "./LandingPage.css";

const LandingPage = () => (
  <>
    <HeroSection />
    <CustomerReviewsSection />
  </>
);

export default LandingPage;
