import "./MainLayout.css";
import Footer from "../Footer/Footer";
import MainNavigation from "../MainNavigation/MainNavigation";
import { Fragment } from "react";

type propType = {
  children: object;
};

export default function MainLayout(props: propType) {
  console.log(props);
  return (
    <Fragment>
      <MainNavigation />
      <div className="layout-container">{props.children}</div>
      <Footer />
    </Fragment>
  );
}
