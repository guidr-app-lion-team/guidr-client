import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import NewsFeed from '../components/NewsFeed/NewsFeed'

export class NewsFeedView extends Component {
//   static propTypes = {
//     prop: PropTypes
//   }

  render() {
    return (
      <div>
        <NewsFeed />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsFeedView)
