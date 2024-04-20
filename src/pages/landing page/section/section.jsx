import React from "react";
import s from "./section.module.css";

const InfoSection = React.memo(({ data }) => {
  return (
    <main className={s.container}>
      {data.map(({ preTitle, title, btn, src, alt }, i) => {
        return (
          <section key={i}>
            <img src={src} alt={alt} />
            <div className="wrapper">
              <div className={s.details__container}>
                <div className={s.details}>
                  <h3>{preTitle}</h3>
                  <h2>{title}</h2>
                  <button>{btn}</button>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </main>
  );
});

export default InfoSection;
