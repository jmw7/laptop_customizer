import React, { Component } from 'react';

class FeatureItem extends Component {

  render() {
    return (
      <div key={this.props.id} className="feature__item">
        <input
          type="radio"
          id={this.props.id}
          className="feature__option"
          name={this.props.featureName}
          checked={this.props.itemName === this.props.selected[this.props.feature].name}
          onChange={e => this.props.handleUpdate(this.props.feature, this.props.itemOption)}
        />
        <label htmlFor={this.props.id} className="feature__label">
          {this.props.itemName} ({this.props.formatCost.format(this.props.cost)})
        </label>
      </div>
    );

  }
}

export default FeatureItem