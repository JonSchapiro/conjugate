import React, { Component, Fragment } from 'react';
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
  'presentsubjunctive': 'Present Subjunctive',
  'futuresubjunctive': 'Future Subjunctive',
  'futureperfectsubjunctive': 'Future Perfect Subbjunctive',
  'imperfectsubjunctive': 'Imperfect Subjunctive',
  'presentperfectsubjunctive': 'Present Perfect Subjunctive',
  'pastperfectsubjunctive': 'Past Perfect Subjunctive',
  'presentpersonalinfinitive': 'Present Personal Infinitive',
  'personalinfinitiveperfect': 'Personal Infinitive Perfect'
};

const TENSE_TRANSLATION = {
  'pastparticiple': '',
  'pastparticiplemasculinesingular': '',
  'pastparticiplemasculineplural': '',
  'pastparticiplefemininesingular': '',
  'pastparticiplefeminineplural': '',
  'futureperfect': 'Will Have',
  'presentperfect': 'Have/Has Been',
  'pastperfectcompound': '',
  'pastconditional': '',
  'presentsubjunctive': '',
  'futuresubjunctive': '',
  'futureperfectsubjunctive': '',
  'imperfectsubjunctive': 'Were To',
  'presentperfectsubjunctive': '',
  'pastperfectsubjunctive': '',
  'presentpersonalinfinitive': '',
  'personalinfinitiveperfect': '',
  'imperative': 'Command!'
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
    const conjs = _.map(this.state.data, ({ singular, plural, def }, tense) => {
      const snakeCaseTense = tense ? tense[0].toUpperCase().concat(tense.substring(1, tense.length)) : '';

      if (singular !== undefined && singular !== null) {
        return (
          <Fragment>
            <h1>{TENSE_NAME[tense] || snakeCaseTense}</h1>
            <table className='conjugation'>
              <tr>
                <td>{TENSE_MAP.singular.first}</td>
                <td> {singular.first}</td>
              </tr>
              <tr>
                <td>{TENSE_MAP.singular.third}</td>
                <td> {singular.third}</td>
              </tr>
              <tr>
                <td>{TENSE_MAP.plural.first}</td>
                <td> {plural.first}</td>
              </tr>
              <tr>
                <td>{TENSE_MAP.plural.third}</td>
                <td> {plural.third}</td>
              </tr>
            </table>
          </Fragment>
        )
      }
    })
    return (
      <div>
        <div>
        <button onClick={this.searchAgain}>Search Again</button>
        </div>
        {conjs}
      </div>);
  }
}

export default Results;