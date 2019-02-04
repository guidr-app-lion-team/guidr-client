import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Register from '../components/Register'

export class RegisterView extends Component {
  //   static propTypes = {
  //     prop: PropTypes
  //   }

  render() {
    return (
      <div className="w-screen login-screen">
        <Register />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterView)
