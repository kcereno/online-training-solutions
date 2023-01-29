import Marquee from 'react-fast-marquee';
import logo1 from '../../../assets/images/logos/business-insider.png';
import logo2 from '../../../assets/images/logos/forbes.png';
import logo3 from '../../../assets/images/logos/techcrunch.png';
import logo4 from '../../../assets/images/logos/the-new-york-times.png';
import logo5 from '../../../assets/images/logos/usa-today.png';
import './FeaturedSection.scss';

const FeaturedSection = () => {
  return (
    <section className=" text-white primary-bg section">
      <h2 className="text-center heading-text"> Featured In</h2>
      <Marquee
        speed={20}
        gradient={false}
      >
        <div className="logos my-3">
          <img
            className="logo"
            src={logo1}
            alt="Business Insider"
          />
          <img
            className="logo"
            src={logo2}
            alt="Forbes"
          />
          <img
            className="logo"
            src={logo3}
            alt="TechCrunch"
          />
          <img
            className="logo"
            src={logo4}
            alt="The New York Times"
          />
          <img
            className="logo"
            src={logo5}
            alt="USA Today"
          />
          <img
            className="logo"
            src={logo1}
            alt="Business Insider"
          />
          <img
            className="logo"
            src={logo2}
            alt="Forbes"
          />
          <img
            className="logo"
            src={logo3}
            alt="TechCrunch"
          />
          <img
            className="logo"
            src={logo4}
            alt="The New York Times"
          />
          <img
            className="logo"
            src={logo5}
            alt="USA Today"
          />
          <img
            className="logo"
            src={logo1}
            alt="Business Insider"
          />
          <img
            className="logo"
            src={logo2}
            alt="Forbes"
          />
          <img
            className="logo"
            src={logo3}
            alt="TechCrunch"
          />
          <img
            className="logo"
            src={logo4}
            alt="The New York Times"
          />
          <img
            className="logo"
            src={logo5}
            alt="USA Today"
          />
          <img
            className="logo"
            src={logo1}
            alt="Business Insider"
          />
          <img
            className="logo"
            src={logo2}
            alt="Forbes"
          />
          <img
            className="logo"
            src={logo3}
            alt="TechCrunch"
          />
          <img
            className="logo"
            src={logo4}
            alt="The New York Times"
          />
          <img
            className="logo"
            src={logo5}
            alt="USA Today"
          />
          <img
            className="logo"
            src={logo1}
            alt="Business Insider"
          />
          <img
            className="logo"
            src={logo2}
            alt="Forbes"
          />
          <img
            className="logo"
            src={logo3}
            alt="TechCrunch"
          />
          <img
            className="logo"
            src={logo4}
            alt="The New York Times"
          />
          <img
            className="logo"
            src={logo5}
            alt="USA Today"
          />
          <img
            className="logo"
            src={logo1}
            alt="Business Insider"
          />
          <img
            className="logo"
            src={logo2}
            alt="Forbes"
          />
          <img
            className="logo"
            src={logo3}
            alt="TechCrunch"
          />
          <img
            className="logo"
            src={logo4}
            alt="The New York Times"
          />
          <img
            className="logo"
            src={logo5}
            alt="USA Today"
          />
        </div>
      </Marquee>
    </section>
  );
};

export default FeaturedSection;
