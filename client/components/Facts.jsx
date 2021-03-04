import React, { Component } from 'react';

const Facts = (props) => {
  const facts = props.facts;
  return (
    <ul>
      {facts.map((obj, idx) => (
        <li key={idx}>{obj.fact}</li>
      ))}
    </ul>
  );
};

export default Facts;
