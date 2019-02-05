import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import NewsFeed from '../components/NewsFeed/NewsFeed'
import {getNewsFeed, getUsers} from '../actions';

export class NewsFeedView extends Component {
  //   static propTypes = {
  //     prop: PropTypes
  //   }
  componentDidMount(){
    this.props.getNewsFeed();
    this.props.getUsers();
  }
  render() {
    console.log(this.props.users)
    return (
      <div>
        <NewsFeed 
        adventures={this.props.adventures}
        users={this.props.users}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    isFetchingFeed: state.isFetchingFeed,
    adventures: state.adventures,
    error: state.error,
    users: state.users
})

const mapDispatchToProps = {
  getNewsFeed,
  getUsers
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsFeedView)
