import React from "react";

const InfoArticles = () => {
  return (
    <section className="info-section info-section--articles">
      <div className="info">
        <div className="info__heading">
          <h4>
            to <strong>Go back</strong>
          </h4>
          <h5>Try saying:</h5>
        </div>
        <div className="info__text">
          <p className="info__text-1">"Go back"</p>
        </div>
      </div>

      <div className="info">
        <div className="info__heading">
          <h4>
            to <strong>open the article</strong>
          </h4>
          <h5>Try saying:</h5>
        </div>
        <div className="info__text">
          <p className="info__text-1">"Open article '5'"</p>
        </div>
      </div>
    </section>
  );
};

export default InfoArticles;
