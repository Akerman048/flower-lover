import React from "react";

export const Menu = ({ st, clickHandler, links }) => (
    <>
      <ul className={st}>
        {links.map((nav, index) => (
          <li key={nav.id} onClick={clickHandler}>
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
    </>
  );