import React, { useState, useEffect, createRef } from "react";
import classNames from "classnames";

const NewsCard = ({ article, i, activeArticle }) => {
  const [elRefs, setElRefs] = useState([]);
  const scrollToRef = (ref) => window.scroll(0, ref.current.offsetTop - 50);

  // useEffects for scroll to article
  useEffect(() => {
    setElRefs((refs) =>
      Array(20)
        .fill()
        .map((_, j) => refs[j] || createRef())
    );
  }, []);

  useEffect(() => {
    if (i === activeArticle && elRefs[activeArticle]) {
      scrollToRef(elRefs[activeArticle]);
    }
  }, [i, activeArticle, elRefs]);

  return (
    <div
      className={classNames("card", activeArticle === i ? "activeCard" : null)}
      key={i}
      ref={elRefs[i]}
    >
      <img
        className="card__image"
        src={article.urlToImage}
        alt="Article Image"
      />
      <div className="card__content">
        <div className="card__source-box">
          <p className="card__date">
            {new Date(article.publishedAt).toDateString()}
          </p>
          <p className="card__source">{article.source.name}</p>
        </div>
        <h4 className="card__headline">{article.title}</h4>
        <p className="card__text">{article.content}</p>
        <div className="card__footer">
          <a
            className="card__learn-more"
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            learn more
          </a>
          <p className="card__index">{i + 1}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
