import React, { Component } from 'react';
import './FeatureItem.css';

class FeatureItem extends Component {
  render() {
    
    return (
      <div key={this.props.key} className="feature__item">
        <input
          type="radio"
          id={this.props.key}
          className="feature__option"
          name={slugify(this.props.feature)}
          checked={this.props.item.name === this.props.selected[this.props.feature].name}
          onChange={e => this.props.handleUpdate(feature, item)}
        />
        <label htmlFor={this.props.key} className="feature__label">
          {this.props.item.name} ({formatCost.format(this.propsitem.cost)})
        </label>
      </div>
    );

  }
}

export default FeatureItem