import Footer from "../Footer/Footer";
import MainNavigation from "../MainNavigation/MainNavigation";

export default function MainLayout(props: any) {
  return (
    <div className='bg-black'>
      <MainNavigation />
      {props.children}
      <Footer />
    </div>
  );
}
