import "./style.css";
import Banner from "../../components/BannerComponent/index";
import Collapse from "../../components/CollapseComponent/index";
import Sections from "../../data/Sections";

const About = () => {
  return (
    <div className="body-about">
      <Banner />
      <div className="container-section">
        {Sections.map((section, index) => {
          return (
            <Collapse
              key={`section_${index}`}
              title={section.title}
              details={section.details}
              sized={true}
            />
          );
        })}
      </div>
    </div>
  );
};

export default About;
