import React, { Component, PropTypes } from 'react'
import './saler.less'


class Product extends Component {
  render () {
    return (
      <div className="saler-box">
        {/* <img className="bg-img" src={require('../../assets/img/bg0.jpg')} /> */}
        <dl className="saler-info">
          <dt>Product Link</dt>
          <dd>
            <input className="product-url" type="text" name="productUrl"/>
            <a className="add-button">Add</a>
          </dd>
        </dl>
      </div>
    )
  }
}

Product.propTypes = {
    Data: PropTypes.object.isRequired
}

export default Product
