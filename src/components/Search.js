import React, { Component } from 'react';
import _ from 'lodash';

const THROTTLE_TIME = 800;
const CONJ_API = 'http://localhost:3001/conj/?verb=';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
        conjugationSearchTerm: '',
        translationSearchTerm: '',
        conjugation: {},
        translation: {},
        searchInProgress: false,
        validSearch: 'validSearch'
    };

    this.conjugate = _.throttle(this.conjugate.bind(this), THROTTLE_TIME);
    this.translate = _.throttle(this.translate.bind(this), THROTTLE_TIME);
  }

  conjugate() {
    const conjValue = this.conjValue.value;
    if (conjValue.length < 3 || this.state.searchInProgress) {
      return;
    }

    this.setState({searchInProgress: true});

    fetch(CONJ_API + conjValue)
      .then(response => response.json())
      .then(data => {
        return data;
      })
      .then(data => {        
        if (data === null || data.tenses.length === 0) {
          this.setState({ conjugation: data, searchInProgress: false, validSearch: 'invalidSearch' })
          return;
        }

          this.setState({ conjugation: data, searchInProgress: false })
          this.props.history.push({
            pathname: '/results',
            search: '',
            state: { data: data }
          })
      })
      .catch((error) => {
        console.error('error: ', error);
        this.setState({ searchInProgress: false, validSearch: 'invalidSearch' })
      });
  }

  translate() {
    console.log('bye ', this.transValue.value);
  }

  render() {
    return (
      <div className="App">
        <div>
            Conjugate:
            <input class={this.state.validSearch} placeholder="conjugate" onChange={this.conjugate} ref={input => this.conjValue = input}/>
        </div>
      </div>
    );
  }
}

export default Search;