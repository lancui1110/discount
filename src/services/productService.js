import xhr from './xhr/'
import Api from './api'
/**
 * 对应后端的 /msg/* 所有 API
 */
class ProductService {
  /**
   * 取 productList（命名为 fetch 而非 get 主要是因为是远程操作）
   * @param  {String} options.author   作者名
   * @param  {Number} options.pageIdx  目标页码（默认是第 1 页）
   * @param  {Number} options.quantity 单页请求 msg 的数量（默认每页显示 10 条）
   * @param  {Number} options.msgId
   * @return {Promise}
   */
  fetch () {
    const url = Api.product.list
    return xhr({ url, dataType: 'jsonp' })
  }
}

// 实例化后再导出
export default new ProductService()
