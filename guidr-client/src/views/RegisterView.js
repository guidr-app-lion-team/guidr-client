import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Register from '../components/Register'

export class RegisterView extends Component {
  //   static propTypes = {
  //     prop: PropTypes
  //   }
  state = {
    username: "",
    email: "",
    password: "",
    password2: "",
    name: "",
    location: "",
    bio: "",
    professional: false
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.state.password1 === this.state.password2) {
      //send the data via axios
    }
    else {
      alert("You're passwords don't match.")
    }
  }

  handleChange = (e) => {
    console.log(e.target.name, e.target.value)
    if (e.target.name === "professional") {
      this.setState({ professional: !this.state.professional })
    }
    else {
      this.setState({ [e.target.name]: e.target.value })
    }
  }

  render() {
    return (
      <div className="w-screen login-screen">
        <Register
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterView)
