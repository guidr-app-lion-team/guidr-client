import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Login from '../components/Login'

export class LoginView extends Component {
//   static propTypes = {
//     prop: PropTypes
//   }

  render() {
    return (
      <div className="w-screen login-screen">
        <Login/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginView)
