import "./MainLayout.css";
import Footer from "../Footer/Footer";
import MainNavigation from "../MainNavigation/MainNavigation";
import { Fragment } from "react";
import { ChildrenInterface } from "../../constants/interfaces";

export default function MainLayout(props: ChildrenInterface) {
  return (
    <Fragment>
      <MainNavigation />
      <div className="layout-container">{props.children}</div>
      <Footer />
    </Fragment>
  );
}
