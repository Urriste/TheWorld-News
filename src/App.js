import "./App.css";
import NewsCard from "./components/news-card";
import { useState } from "react";
import WorldImg from "./img/TheWorldNews.png";

function App() {
  const [data, setData] = useState();

  const getApi = async (country) => {
    const data = await fetch(
      `https://gnews.io/api/v4/top-headlines?country=${country}&token=f773cc18c03784944be3de31e8f4a0c3`
    );
    const result = await data.json();
    setData(result);
  };

  const procesarData = (e) => {
    e.preventDefault();
    let country = document.getElementById("select").value;
    getApi(country);
  };

  return (
    <div className="App">
      <div className="selections-container">
        <img src={WorldImg} alt="" className="title" />
        <h2 className="subtitle">
          El sitio de noticias del <span className="mercosur">Mundo</span>{" "}
        </h2>
        <select className="selector" id="select">
          <option className="option" value="au">
            Austria
          </option>
          <option className="option" value="de">
            Alemania
          </option>
          <option className="option" value="br">
            Brasil
          </option>
          <option className="option" value="ca">
            Canadá
          </option>
          <option className="option" value="cn">
            China
          </option>
          <option className="option" value="eg">
            Egipto
          </option>
          <option className="option" value="us">
            Estados Unidos
          </option>
          <option className="option" value="fr">
            Francia
          </option>
          <option className="option" value="ph">
            Filipinas
          </option>
          <option className="option" value="gr">
            Grecia
          </option>
          <option className="option" value="hk">
            Hong Kong
          </option>
          <option className="option" value="ie">
            Irlanda
          </option>
          <option className="option" value="in">
            India
          </option>
          <option className="option" value="it">
            Italia
          </option>
          <option className="option" value="jp">
            Japón
          </option>
          <option className="option" value="no">
            Noruega
          </option>
          <option className="option" value="pe">
            Perú
          </option>{" "}
          <option className="option" value="nl">
            Paises Bajos
          </option>
          <option className="option" value="pk">
            Pakistan
          </option>
          <option className="option" value="pt">
            Portugal
          </option>
          <option className="option" value="ro">
            Rumania
          </option>
          <option className="option" value="ru">
            Rusia
          </option>
          <option className="option" value="gb">
            Reino Unido
          </option>
          <option className="option" value="ch">
            Suiza
          </option>
          <option className="option" value="se">
            Suecia
          </option>
          <option className="option" value="tw">
            Taiwan
          </option>
          <option className="option" value="ua">
            Ucrania
          </option>
        </select>

        <button className="button" onClick={procesarData}>
          Mostrar
        </button>
      </div>

      <div className="news-container">
        {!data
          ? "Esperando por la seleccion"
          : data.articles.map((item, index) => {
              return (
                <NewsCard
                  key={index}
                  title={item.title}
                  img={item.image}
                  description={item.description}
                  url={item.url}
                  author={item.source.name}
                />
              );
            })}
      </div>
    </div>
  );
}
export default App;
