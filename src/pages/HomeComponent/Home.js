import "./style.css";
import Banner from "../../components/BannerComponent";
import Card from "../../components/CardComponent";
import Annonces from "../../data/Annonces";

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