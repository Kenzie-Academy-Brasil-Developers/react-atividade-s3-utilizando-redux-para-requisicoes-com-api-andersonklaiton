import { useSelector } from "react-redux";
import "./styles.css"

const Digimons = () => {
  const { digimons } = useSelector((state) => state);

  return (
    <div className="container_digimon">
      {digimons.map((digimon, index) => {
        return (
          <div className="each_digimonList" key={index}>
            <p>{digimon.name}</p>
            <img src={digimon.img} alt={digimon.name} />
            <p>Level: {digimon.level}</p>
          </div>
        );
      })}
    </div>
  );
};
export default Digimons;
