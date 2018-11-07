import React from 'react'

import './RepositoryItem.css'

const RepositoryItem = ({ name, html_url, description, stargazers_count }) => {
  return (
    <div className="respository-item">
      <div className="respository-item__name">
        <span className="title">Name: </span>
        <span>{name}</span>
      </div>
      <div className="respository-item__link">
        <span className="title">URL: </span>
        <span>{html_url}</span>
      </div>
      <div className="respository-item__star">
        <span className="title">Star: </span>
        <span>{stargazers_count}</span>
      </div>
      <div className="respository-item__desc">
        <span className="title">Description: </span>
        <span>{description}</span>
      </div>
    </div>
  )
}

export default RepositoryItem
