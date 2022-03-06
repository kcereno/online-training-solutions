import { Fragment } from "react";
import { Carousel } from "react-bootstrap";
import Showcase from "../../Showcase/Showcase";
import Footer from "../../components/Footer/Footer";
import "./LandingPage.css";

export default function LandingPage() {
  return (
    <Fragment>
      <Showcase />

      <div className="carousel text-center bg-secondary text-white ">
        <h2 className="pt-4 pb-3">Customer Reviews</h2>
        <Carousel>
          <Carousel.Item>
            <div className="pb-5">
              <h3>Ana</h3>
              <p>Makes assigning programs so much easier!</p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="pb-5">
              <h3>Karl</h3>
              <p>Clients are less confused on what to do</p>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>

      <Footer />
    </Fragment>
  );
}
