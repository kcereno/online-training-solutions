import { Fragment } from "react";
import CustomerReviewsSection from "../../components/Sections/CustomerReviewsSection/CustomerReviewsSection";
import HeroSection from "../../components/Sections/HeroSection/HeroSection";
import "./LandingPage.css";

const LandingPage = () => (
  <>
    <HeroSection />
    <CustomerReviewsSection />
  </>
);

export default LandingPage;
