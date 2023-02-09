import etoileRose from "../../assets/etoile-rose.png";
import etoileGrise from "../../assets/etoile-grise.png";

function Rating(props) {
  const numberOfStar = [...Array(parseInt(props.size))];
  return (
    <>
      <div>
        {numberOfStar.map((item, index) => {
          return (
            <img
              key={`etoile_${index}`}
              src={props.full ? etoileRose : etoileGrise}
              alt={`etoile ${props.full ? "rose" : "grise"}`}
            />
          );
        })}
      </div>
    </>
  );
}

export default Rating;
