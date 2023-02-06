import "./style.css";
import Banner from "../../components/BannerComponent/index";
import Card from "../../components/CardComponent/index";
import Annonces from "../Annonces";

const Home = () => {
  return (
    <div className="body">
      <Banner>
        <p className="opacity">Chez vous, partout et ailleurs</p>
      </Banner>
      <div className="container">
        {Annonces.map((annonce) => {
          return (
            <Card
              key={annonce.id}
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
