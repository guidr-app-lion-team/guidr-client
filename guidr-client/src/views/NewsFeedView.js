import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import NewsFeed from '../components/NewsFeed/NewsFeed'
import {getNewsFeed} from '../actions';

export class NewsFeedView extends Component {
  //   static propTypes = {
  //     prop: PropTypes
  //   }
  componentDidMount(){
    this.props.getNewsFeed();
  }
  render() {
    return (
      <div>
        <NewsFeed 
        adventures={this.props.adventures}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    isFetchingFeed: state.isFetchingFeed,
    adventures: state.adventures,
    error: state.error,
})

const mapDispatchToProps = {
  getNewsFeed,
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsFeedView)
