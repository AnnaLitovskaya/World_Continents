import React, { Component } from 'react';

const Continents = (props) => {
  return (
    <div>
      <img
        src="../../assets/WorldMap.gif"
        alt="map"
        useMap="#worldmap"
        width="800"
        height="379"
      />
      <map name="worldmap">
        {props.continents.map((continent) => {
          return (
            <area
              key={continent.id}
              shape="rect"
              coords={continent.map}
              alt={continent.name}
              href={`/#${continent.id}`}
            />
          );
        })}
      </map>
    </div>
  );
};

export default Continents;
