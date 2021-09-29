import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import addDigimonsThunk from "../../store/modules/digimons/thunks";
import "./styles.css";

const Search = () => {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  const history = useHistory();

  const handleClick = () => {
    history.push("/");
  };

  const dispatch = useDispatch();

  const handleSearch = () => {
    setError(false);
    dispatch(addDigimonsThunk(input, setError));
    setInput("");
  };

  return (
    <div>
      <h1>Procure pelo seu Digimon!</h1>
      <div className="container_inputs">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Procure seu Digimon"
        />
        {error && <p>Digimon não encontrado</p>}
        <div className="btns">
          <button className="btn_search" onClick={handleSearch}>
            Pesquisar
          </button>
          <button className="btn_back" onClick={handleClick}>
            Voltar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
