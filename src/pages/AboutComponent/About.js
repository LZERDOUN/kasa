import "./style.css";
import Banner from "../../components/BannerComponent";
import Collapse from "../../components/CollapseComponent";
import Sections from "../../data/Sections";

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
              sized={true}
            />
          );
        })}
      </div>
    </div>
  );
};

export default About;
