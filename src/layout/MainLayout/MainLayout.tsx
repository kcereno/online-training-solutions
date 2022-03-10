import './MainLayout.css'
import Footer from "../Footer/Footer";
import MainNavigation from "../MainNavigation/MainNavigation";
import { Fragment } from "react";

export default function MainLayout(props: any) {
  return (
    <Fragment>
      <MainNavigation />
      <div className="layout-container">{props.children}</div>
      <Footer />
    </Fragment>
  );
}
