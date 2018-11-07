import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchRepositories as fetchRepositoriesAction } from '../../actions/repositories'
import { refreshDoneFetch as refreshDoneFetchAction } from '../../actions/repositories'
import RepositoryItem from '../components/RepositoryItem'

import './Home.css'

class Home extends Component {
  static fetchData = store => {
    const isDoneFetch = true
    return store.dispatch(fetchRepositoriesAction(isDoneFetch))
  }

  componentDidMount() {
    const { fetchRepositories, isDoneFetch } = this.props
    if (!isDoneFetch) fetchRepositories()
  }

  componentWillUnmount() {
    this.props.refreshDoneFetch()
  }

  render() {
    const { isFetching, repositories, errors } = this.props
    if (isFetching) {
      return <div>Loading....</div>
    }
    if (errors) {
      return <div>{JSON.stringify(errors, null, 4)}</div>
    }

    return (
      <div className="repository-container">
        {repositories.map(repository => (
          <RepositoryItem key={repository.id} {...repository} />
        ))}
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { isFetching, repositories, errors, isDoneFetch } = state.repositories
  return {
    isFetching,
    repositories,
    errors,
    isDoneFetch,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchRepositories: () => dispatch(fetchRepositoriesAction()),
    refreshDoneFetch: () => dispatch(refreshDoneFetchAction()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home)
