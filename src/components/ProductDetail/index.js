import React, { Component, PropTypes } from 'react'
import ProductOther from 'COMPONENT/ProductOther'
import productService from 'SERVICE/productService'
import './productDetail.less'


class ProductDetail extends Component {
  constructor(props) {
    super(props)    
    this.state = {
      products: []
    }
  }
  componentDidMount () {
    this.getProductList()
  }

  getProductList () {
    const self = this
    productService.fetch().then(products => {
      self.setState({ products })
    })
  }

  render () {
    const self = this
    const products = this.state.products

    if (!products.length) return null

    const product = products.find(p => {
      if (p.id == self.props.params.id) {
        return true
      }
    })

    return (
      <div className="detail-container">
        <div className="detail-box" id={`productDetail${product.id}`}>
          <div className="left clearfix">
            <p><img className="img" src={product.imgUrl} /></p>
            <p className="go-link"><a href={product.sourceUrl} target="_blank">Open in Amazon</a></p>
            
          </div>
          <div className="right clearfix">
            <p className="title">{product.name}</p>
            <p className="fullfilled">{product.shipping}</p>
            <p className="discount">{product.discount}% Discount</p>
            <p className="price">
              <span className="custom-price">${product.price}</span>
              <span className="discount-price">${product.discountPrice}</span>
            </p>
            <p>
              <a className="button" href={product.sourceUrl}>Expired</a>
            </p>
            <div className="description">
              <p>Description</p> 
              <p className="info">{product.discription}</p>
              <p>-More</p>
            </div>
          </div>
        </div>
        <div className="others">
          {products.map(v => (
            <ProductOther data={v}></ProductOther>
          ))}
        </div>
      </div>
    )
  }
}

ProductDetail.propTypes = {
    data: PropTypes.object.isRequired
}

export default ProductDetail
