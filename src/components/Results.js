import React, { Component } from 'react';
import _ from 'lodash';

const TENSE_MAP = {
  singular: {
    first: 'eu',
    second: 'tu',
    third: 'voce'
  },
  plural: {
    first: 'nos',
    second: '',
    third: 'eles'
  }
};

const TENSE_NAME = {
  'pastparticiple': 'Past Participle',
  'pastparticiplemasculinesingular': 'Past Participle Masculine Singular',
  'pastparticiplemasculineplural': 'Past Participle Masculine Plural',
  'pastparticiplefemininesingular': 'Past Participle Feminine Singular',
  'pastparticiplefeminineplural': 'Past Participle Feminine Plural',
  'futureperfect': 'Future Perfect',
  'presentperfect': 'Present Perfect',
  'pastperfectcompound': 'Past Perfect Compound',
  'pastconditional': 'Past Conditional',
  'presentsubjunctive' : 'Present Subjunctive',
  'futuresubjunctive': 'Future Subjunctive',
  'futureperfectsubjunctive': 'Future Perfect Subbjunctive',
  'imperfectsubjunctive': 'Imperfect Subjunctive',
  'presentperfectsubjunctive': 'Present Perfect Subjunctive',
  'pastperfectsubjunctive': 'Past Perfect Subjunctive',
  'presentpersonalinfinitive': 'Present Personal Infinitive',
  'personalinfinitiveperfect': 'Personal Infinitive Perfect'

};
class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.location.state.data.data
    }
    console.log(this.props.location)
    this.searchAgain = this.searchAgain.bind(this);
  }

  searchAgain() {
    console.log('search again')
    this.props.history.goBack();
  }

  render() {
    const conjs = _.map(this.state.data, ({singular, plural, def }, tense) => {
      const snakeCaseTense = tense ? tense[0].toUpperCase().concat(tense.substring(1, tense.length)) : '';
      if (def !== undefined && def !== null) {
        console.log('def', def);
        return( 
          <div class='text-field'>
            <h1>{TENSE_NAME[tense] || snakeCaseTense}</h1>
            <div>{def.def}</div>
            <div>
              <br></br><br></br><br></br>
            </div>
          </div>
        )
      }

      if (singular !== undefined && singular !== null) {
        return( 
          <div class='container'>
            <h1>{TENSE_NAME[tense] || snakeCaseTense}</h1>
            <div>
              <div>{TENSE_MAP.singular.first} : {singular.first}</div>
              <div>{TENSE_MAP.singular.third} : {singular.third}</div>
              <div>{TENSE_MAP.plural.first} : {plural.first}</div>
              <div>{TENSE_MAP.plural.third} : {plural.third}</div>
              <div>
              <br></br><br></br><br></br>
            </div>
            </div>
          </div>
        )
      }
    })
    return (
      <div>
        <button onClick={this.searchAgain}>Search Again</button>
        {conjs}
      </div>);
  }
}

export default Results;