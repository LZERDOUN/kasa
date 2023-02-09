import "./style.css";
import { useParams } from "react-router-dom";
import Collapse from "../../components/CollapseComponent";
import Tag from "../../components/TagComponent";
import Annonces from "../../data/Annonces";
import Error from "../../pages/ErrorComponent/Error";
import Rating from "../../components/RatingComponent";

//Filtrer tableau annonce avec id

const Logement = () => {
  const logementId = useParams().id;
  const annonce = Annonces.filter((annonce) => {
    return annonce.id === logementId;
  })[0];

  return (
    <>
      {annonce ? (
        <div className="body-logement">
          <div className="caroussel-section"></div>
          <div className="section-information">
            <div className="section-1">
              <p className="title-logement">{annonce.title}</p>
              <p className="location-logement">{annonce.location}</p>
              <div className="tags-logement">
                {annonce.tags.map((tag) => {
                  return <Tag key={tag} tag={tag} />;
                })}
              </div>
            </div>
            <div className="section-2">
              <div className="host-information">
                <p className="host-name">{annonce.host.name}</p>
                <img
                  className="host-picture"
                  src={annonce.host.picture}
                  alt={annonce.title}
                />
              </div>
              <div className="rating">
                <Rating size={annonce.rating} full={true} />
                <Rating size={5 - annonce.rating} full={false} />
              </div>
            </div>
          </div>
          <div className="collapse-section">
            <Collapse
              title="Description"
              details={annonce.description}
              sized={false}
            />
            <Collapse
              title="Equipements"
              details={annonce.equipments}
              sized={false}
            />
          </div>
        </div>
      ) : (
        <Error />
      )}
    </>
  );
};

export default Logement;
