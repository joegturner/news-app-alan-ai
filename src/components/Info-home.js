import React from "react";

const InforHome = () => {
  return (
    <React.Fragment>
      <h3 className="directions">
        Click or Touch the bottom right blue mic button to speak{" "}
      </h3>
      <section className="info-section">
        <div className="info">
          <div className="info__heading">
            <h4>
              for <strong>Latest News</strong>
            </h4>
            <h5>Try saying:</h5>
          </div>
          <div className="info__text">
            <p className="info__text-1">"Give me the lastest news"</p>
          </div>
        </div>

        <div className="info">
          <div className="info__heading">
            <h4>
              for News <strong>by Categories</strong>
            </h4>
            <h5>Try saying:</h5>
          </div>
          <div className="info__text">
            <p className="info__text-1">
              "Give me the lastest 'Technology' news"
            </p>
            <p className="info__text-2">Categories:</p>
            <p className="info__text-3">
              Business, Entertainment, General, Health, Science, Sports,
              Technology
            </p>
          </div>
        </div>

        <div className="info">
          <div className="info__heading">
            <h4>
              for News <strong>by Terms</strong>
            </h4>
            <h5>Try saying:</h5>
          </div>
          <div className="info__text">
            <p className="info__text-1">"What's up with 'Playstation 5'"</p>
            <p className="info__text-2">Terms:</p>
            <p className="info__text-3">
              BitCoin, Playstation 5, Smartphones, Donald Trump, etc.
            </p>
          </div>
        </div>

        <div className="info">
          <div className="info__heading">
            <h4>
              for News <strong>by Sources</strong>
            </h4>
            <h5>Try saying:</h5>
          </div>
          <div className="info__text">
            <p className="info__text-1">"Give me the news from 'CNN'"</p>
            <p className="info__text-2">Sources:</p>
            <p className="info__text-3">
              ABC News, Wired, BBC, Time, IGN, Buzzfeed, CNN, etc.
            </p>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default InforHome;
