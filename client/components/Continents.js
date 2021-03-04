import React, { Component } from 'react';
import axios from 'axios';

class Continents extends Component {
  constructor() {
    super();
    this.state = {
      continents: [],
    };
  }
  async componentDidMount() {
    const continents = (await axios.get('/api/continents')).data;
    this.setState({ continents });
  }
  render() {
    const { continents } = this.state;
    return (
      <div>
        <h1>Seven World Continents</h1>
        <ul>
          {continents.map((continent) => {
            return (
              <li className={`#${continent.id}`} key={continent.id}>
                <a href={`/#${continent.id}`}>{continent.name}</a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Continents;
