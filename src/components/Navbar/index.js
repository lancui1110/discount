import React, { Component } from 'react'
import { connect } from 'react-redux'
import { IndexLink, Link } from 'react-router'
// import LoginForm from './LoginForm'
// import LogoutDropdown from './LogoutDropdown'

/* 导航栏全局显示，控制着用户的登录注销 */

@connect( // 功能同 UTIL/createContainer
  ({ userData }) => ({ userData }),
  require('ACTION/user').default
)
export default class Navbar extends Component {
  componentWillMount () {
    console.info('[Navbar] 初始化：检查用户是否已经登录')
    console.info('[TIPS] 由于有Redux Logger，故之后就不手动打印动作了')
    // this.props.checkLogin()
  }

  render () {
    let {
      // userData, login, logout, // 通过 connect 获取
      location: { pathname }   // 通过 App 传入
    } = this.props

    return (
      <div className="row clearfix">
        <div className="col-md-12 column">
          <nav className="navbar navbar-default" role="navigation">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target="#nav-collapse">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <Link to='/' className="navbar-brand">
                Discount
              </Link>
            </div>
            <div className="collapse navbar-collapse" id="nav-collapse">
              <ul className="nav navbar-nav">
                <li className={pathname === '/' && 'active'}>
                  <IndexLink to='/'>
                    index
                  </IndexLink>
                </li>
                {/* <li className={pathname.startsWith('/msg') && 'active'}>
                  <Link to='/msg'>
                  Deal in China
                  </Link>
                </li>
                <li className={pathname.startsWith('/todo') && 'active'}>
                  <Link to='/todo'>
                  Deal in USA
                  </Link>
                </li>
                <li className={pathname.startsWith('/freebieDeal') && 'active'}>
                  <Link to='/freebieDeal'>
                  Freebie Deal
                  </Link>
                </li> */}
                <li className={pathname.startsWith('/saler') && 'active'}>
                  <Link to='/saler'>
                  Saler
                  </Link>
                </li>
              </ul>
              {/* { userData ?
                <LogoutDropdown userData={userData} logout={logout} /> :
                <LoginForm login={login} />
              } */}
            </div>
          </nav>
        </div>
      </div>
    )
  }
}
