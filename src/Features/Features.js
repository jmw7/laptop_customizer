import React, { Component } from 'react';
import Feature from '../Feature/Feature';

class Features extends Component {

  render() {

    //where {feature} = <Feature />
    //and {options} = <FeatureItem />

    Object.keys(this.props.features).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      <Feature 
        key={featureHash}
        
        />
    })

    return (
      <>
        <fieldset className="feature" key={featureHash}>
          <legend className="feature__name">
            <h3><Feature /></h3>
          </legend>
          <FeatureItem />
        </fieldset>
      </>
    )

    const features = Object.keys(this.props.features).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const options = this.props.features[feature].map(item => {
        const itemHash = slugify(JSON.stringify(item));
        return (
          <div key={itemHash} className="feature__item">
            <input
              type="radio"
              id={itemHash}
              className="feature__option"
              name={slugify(feature)}
              checked={item.name === this.state.selected[feature].name}
              onChange={e => this.updateFeature(feature, item)}
            />
            <label htmlFor={itemHash} className="feature__label">
              {item.name} ({USCurrencyFormat.format(item.cost)})
            </label>
          </div>
        )
      });

    });
  }
}


export default Features