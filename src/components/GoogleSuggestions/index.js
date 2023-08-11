import {Component} from 'react'

import './index.css'

import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {suggestionsList} = this.props
    const searchResults = suggestionsList.filter(each =>
      each.suggestion.includes(searchInput),
    )
    return (
      <div className="app-container">
        <img
          className="image"
          alt="google logo"
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          className="google"
        />
        <div className="input-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
            alt="search icon"
            className="icon"
          />
          <input
            type="search"
            className="input"
            placeholder="search Google"
            onChange={this.onChangeSearchInput}
            value={searchInput}
          />
        </div>
        <ul className="suggestions-container">
          {searchResults.map(each => (
            <SuggestionItem suggestion={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default GoogleSuggestions

