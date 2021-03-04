import React, { Component } from 'react';

const Continents = (props) => {
  return (
    <ul>
      {props.continents.map((continent) => {
        return (
          <li className={`#${continent.id}`} key={continent.id}>
            <a href={`/#${continent.id}`}>{continent.name}</a>
          </li>
        );
      })}
    </ul>
  );
};

export default Continents;
