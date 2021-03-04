import React, { Component } from 'react';
import axios from 'axios';
import Continents from './components/Continents.jsx';
import Facts from './components/Facts.jsx';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      continents: [],
      selectedPage: '',
      facts: [],
    };
    this.getPageComponents = this.getPageComponents.bind(this);
  }

  async getPageComponents() {
    this.setState({ selectedPage: window.location.hash.slice(1) });
    if (this.state.selectedPage) {
      let facts = (
        await axios.get(`/api/continents/fact/${this.state.selectedPage}`)
      ).data;
      this.setState({ facts });
    }
  }

  async componentDidUpdate() {
    if (window.location.hash.slice(1) !== this.state.selectedPage) {
      this.getPageComponents();
    }
  }

  async componentDidMount() {
    const continents = (await axios.get('/api/continents')).data;
    this.setState({ continents });
    window.addEventListener('hashchange', async () => {
      this.getPageComponents();
    });
    this.getPageComponents();
  }

  render() {
    const { continents, selectedPage, facts } = this.state;
    return (
      <div>
        <h1>
          <a href={'/'}>Seven World Continents</a>
        </h1>
        {!selectedPage ? <Continents continents={continents} /> : ''}
        {!!selectedPage ? (
          <Facts facts={facts} continent={continents[selectedPage * 1 - 1]} />
        ) : (
          ''
        )}
      </div>
    );
  }
}

export default Main;
