import { Fragment } from "react";
import CustomerReviews from "../../components/CustomerReviews/CustomerReviews";

import Showcase from "../../components/Showcase/Showcase";
import "./LandingPage.css";

export default function LandingPage() {
  return (
    <Fragment>
      <Showcase />
      <CustomerReviews />
    </Fragment>
  );
}
