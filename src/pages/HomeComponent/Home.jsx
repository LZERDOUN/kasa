import "./style.css";
import Banner from "../../components/BannerComponent/index";
import Card from "../../components/CardComponent/index";
import Annonces from "../../data/Annonces";

const Home = () => {
  return (
    <div className="body-home">
      <Banner>
        <div className="opacity">
          <p className="home-text">Chez vous, partout et ailleurs</p>
        </div>
      </Banner>
      <div className="container-annonces">
        {Annonces.map((annonce, index) => {
          return (
            <Card
              key={`annonce_${index}`}
              id={annonce.id}
              title={annonce.title}
              image={annonce.cover}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
