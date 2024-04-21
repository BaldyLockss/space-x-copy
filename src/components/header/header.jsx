import React from "react";
import s from "./header.module.css";
import Logo from "../../assets/svgs/logo";
function Header({ data }) {
  return (
    <main className={s.container}>
      <div className="wrapper">
        <div className={s.content}>
          <div className={s.logo}>
            <Logo />
          </div>
          <nav className={s.nav}>
            {data.map((item, i) => {
              return (
                <ul key={i}>
                  <li>{item}</li>
                </ul>
              );
            })}
          </nav>
        </div>
      </div>
      <div className={s.shop}>shop</div>
    </main>
  );
}

export default Header;
