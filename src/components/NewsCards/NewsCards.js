import React from "react";

import NewsCard from "../NewsCard/NewsCard";
import InfoHome from "../Info-home";
import InfoArticles from "../Info-articles";

const NewsCards = ({ articles, activeArticle }) => {
  if (!articles.length) {
    return (
      <React.Fragment>
        <div className="header">
          <h1 className="header__main">Voice Activated News App</h1>
          <div className="header__sub-box">
            <h2 className="header__sub">with the help of Alan AI</h2>
            <a
              className="header__link"
              href="https://studio.alan.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="header__logo"
                src="https://alan.app/voice/images/previews/preview.jpg"
                alt="Alan AI Logo"
              ></img>
            </a>
          </div>
        </div>
        <InfoHome />
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <InfoArticles />
        {articles ? (
          <section className="cards">
            {articles.map((article, i) => (
              <NewsCard
                key={i}
                article={article}
                activeArticle={activeArticle}
                i={i}
              />
            ))}
          </section>
        ) : null}
      </React.Fragment>
    );
  }
};

export default NewsCards;
