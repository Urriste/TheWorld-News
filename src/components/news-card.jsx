import React from "react";
import "./news-card.css";

function NewsCard(props) {
  return (
    <div>
      <div className="card">
        <h2 className="card-title">{props.title}</h2>
        <img src={props.img} alt="card img" className="card-img" />
        <p className="card-paragraph">{props.description}</p>
        <h4 className="card-info">
          Leé más en
          <a
            rel="noreferrer"
            href={props.url}
            target="_blank"
            className="card-url"
          >
            {" "}
            {props.author}
          </a>
        </h4>
      </div>
    </div>
  );
}

export default NewsCard;
