import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import './product.less'

class Product extends Component {
  componentDidMount () {

  }
  render () {
    return (
      <div className="box" id={`product${this.props.data.id}`}>
        <div className="img-container">
            <Link to={`/product/detail/${this.props.data.id}`}>
                <img className="product-image" src={this.props.data.imgUrl} onclick="review_product()" />
            </Link>
            <p className="text voucher-left"></p>
        </div>
        <div className="title-container">
            <Link to={`/product/detail/${this.props.data.id}`}>
                <p className="title" onclick="review_product()">{this.props.data.name}</p>
                </Link>
            <p className="product-group"><img className="flag" src={require('ASSET/img/om.png')} />Sports &amp; Outdoors</p>
        </div>
        <div className="price-box"><span className="price">${this.props.data.price}</span> <span className="currency">{this.props.data.currency}</span>
            <p className="shipping">{this.props.data.shipping}</p>
            <p className="discount">{this.props.data.discount}% off</p>
        </div>
        <Link to={`/product/detail/${this.props.data.id}`} forceRefresh={true}>
            <div className="btn-review review_btn" onclick="review_product()"><i className="fa"></i> Instant Deal</div>
        </Link>
      </div>
    )
  }
}

Product.propTypes = {
    Data: PropTypes.object.isRequired
}

export default Product
