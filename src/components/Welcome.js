import React, { Component } from 'react'
// import { Link } from 'react-router'
import Product from 'COMPONENT/Product/'
import productService from 'SERVICE/productService'

/**
 * 本组件为欢迎页（首页）
 * 由于几乎没有交互逻辑
 * 因此可以不使用类的写法
 * 
 * 实际上，ES6 的类经由 Babel 转码后
 * 其实还是返回一个类似的函数
 */

// const products = []

// for (let i = 0; i < 20; i++) {
//   const pro = {
//     id: 1001 + i,
//     name: 'Bird and Giraffe 11" Cartoon Plush Dog Toys - Interactive Durable Chew Squeaky - 2 Pack Gift set',
//     imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/51y8szCZBAL.jpg',
//     sourceUrl: '',
//     price: 10 + i,
//     discount: 30 + i,
//     shipping: 'Fulfilled by Amazon',
//     currency: 'USD'
//   }
//   products.push(pro)
// }
// products[0].imgUrl = 'https://images-na.ssl-images-amazon.com/images/I/51g4SZW3aZL.jpg'
// products[1].imgUrl = 'https://images-na.ssl-images-amazon.com/images/I/41uncieck3L.jpg'
// products[2].imgUrl = 'https://images-na.ssl-images-amazon.com/images/I/51WsgecdULL.jpg'
// products[3].imgUrl = 'https://images-na.ssl-images-amazon.com/images/I/41vWpcq7EbL.jpg'


class Welcome extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = { products: [] }
  }
  componentWillMount () {
    this.getProductList()
  }
  componentDidMount () {
    this.init()
    window.onresize = () => {
      this.init() // onresize时，重置宽度
    }
  }  
  
  init () {
    const [iWidth, iSpace] = [236, 10]
    const oWidth = iWidth + iSpace
    // 设置box-container的宽度
    const oContainer = document.querySelector('.box-container')
    const oClientWidth = document.documentElement.clientWidth
    const iCells = Math.floor(oClientWidth / oWidth)
    const w = oWidth * iCells
    oContainer.style.width = `${w}px`
  }

  getProductList () {
    productService.fetch().then(products => {
        console.log(products)
        this.setState({ products })
      })
  }
  render () {
    return (
      <div className="box-container">
        {this.state.products.map(v => {
          return <Product data={v}></Product>
        })}
        
      </div>
    )
  }
}

export default Welcome
