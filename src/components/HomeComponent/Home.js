import "./style.css";
import Banner from "../../components/BannerComponent/index";

const Home = () => {
  return (
    <div className="body">
      <Banner />
      <div className="nom-du-site">
        <p>Home Page</p>
      </div>
    </div>
  );
};

export default Home;
