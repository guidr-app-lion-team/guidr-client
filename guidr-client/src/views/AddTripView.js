import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AddTrip from '../components/AddTrip';


export default class AddTripView extends Component {
å
  render() {
    return (
      <div className="py-12 add-trip-bg">
        <AddTrip/>
      </div>
    )
  }
}
