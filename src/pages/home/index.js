import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import apiDigimon from "../../service/api";
import "./styles.css";

const Home = () => {
  const history = useHistory();
  const [allDigimons, setAllDigimons] = useState("");

  useEffect(() => {
    apiDigimon
      .get("/digimon")
      .then((response) => setAllDigimons(response.data));
  });

  const handleClick = () => {
    history.push("/search");
  };
  return (
    <div>
      <h1>Digimons</h1>
      <p>Pesquisar digimon</p>
      <button className="btn_Search" onClick={handleClick}>
        Pesquisar
      </button>
      <div className="container_digimons">
        {allDigimons &&
          allDigimons.map((digimon, index) => {
            return (
              <div className="each_digimon" key={index}>
                <p>{digimon.name}</p>
                <img src={digimon.img} alt={digimon.name} />
                <p>Level: {digimon.level}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default Home;
