import "./style.css";
import Banner from "../../components/BannerComponent/index";
import Collapse from "../../components/CollapseComponent/index";
import Sections from "../Sections";

const About = () => {
  return (
    <div className="body">
      <Banner />
      <div className="container-section">
        {Sections.map((section) => {
          return (
            <Collapse
              key={section.id}
              title={section.title}
              details={section.details}
            />
          );
        })}
      </div>
    </div>
  );
};

export default About;
