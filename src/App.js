import "./App.css";
import NewsCard from "./components/news-card";
import { useState, useEffect } from "react";
import WorldImg from "./img/TheWorldNews.png";

function App() {
  const [data, setData] = useState();
  const [countries, setCountries] = useState([
    { name: "Australia", key: "au" },
    { name: "Alemania", key: "de" },
    { name: "Brasil", key: "br" },
    { name: "Canadá", key: "ca" },
    { name: "China", key: "cn" },
    { name: "Egipto", key: "eg" },
    { name: "Estados Unidos", key: "us" },
    { name: "Francia", key: "fr" },
    { name: "Filipinas", key: "ph" },
    { name: "Grecia", key: "gr" },
    { name: "Hong Kong", key: "hk" },
    { name: "Irlanda", key: "ie" },
    { name: "India", key: "in" },
    { name: "Italia", key: "it" },
    { name: "Japón", key: "jp" },
    { name: "Noruega", key: "no" },
    { name: "Perú", key: "pe" },
    { name: "Paises Bajos", key: "nl" },
    { name: "Pakistán", key: "pk" },
    { name: "Portugal", key: "pt" },
    { name: "Rumania", key: "ro" },
    { name: "Rusia", key: "ru" },
    { name: "Reino Unido", key: "gb" },
    { name: "Suiza", key: "ch" },
    { name: "Suecia", key: "se" },
    { name: "Taiwan", key: "tw" },
    { name: "Ucrania", key: "ua" },
  ]);

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
        <select className="selector" id="select" onChange={procesarData}>
          <option className="option" disabled>
            Elige un país para ver sus noticias
          </option>
          {countries.map((item, index) => {
            return (
              <option className="option" key={index} value={item.key}>
                {item.name}
              </option>
            );
          })}
        </select>
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
