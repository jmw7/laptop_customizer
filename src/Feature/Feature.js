import React, { Component } from 'react';
// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';
import FeatureItem from '../FeatureItem/FeatureItem';

class Feature extends Component {

  render() {
    const features = Object.keys(this.props.features).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const options = this.props.features[feature].map(item => {
        const itemHash = slugify(JSON.stringify(item));
        //const feature=(feature)
        return (
          <FeatureItem
            selected={this.props.selected}
            key={itemHash}
            id={itemHash}
            itemOption={item}
            feature={feature}
            name={slugify(feature)}
            itemName={item.name}
            cost={item.cost}
            formatCost={this.props.formatCost}
            handleUpdate={this.props.handleUpdate}
          />
        )
      });

      return (
        <fieldset className="feature" key={featureHash}>
          <legend className="feature__name">
            <h3>{feature}</h3>
          </legend>
          {options}
        </fieldset>
      );
    });
    
    return features
  }

}


export default Feature