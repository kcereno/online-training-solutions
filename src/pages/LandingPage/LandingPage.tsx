import { Fragment } from "react";
import CustomerReviews from "../../sections/CustomerReviewsSection/CustomerReviews";

import HeroSection from "../../sections/HeroSection/HeroSection";
import "./LandingPage.css";

export default function LandingPage() {
  return (
    <>
      <HeroSection />
      <CustomerReviews />
    </>
  );
}
