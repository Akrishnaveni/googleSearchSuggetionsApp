
  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  deleteHistory = id => {
    const {historyList} = this.state
    const filterList = historyList.filter(each => each.id !== id)

    this.setState({historyList: filterList})
  }

  render() {
    const {historyList, searchInput} = this.state

    const searchResult = historyList.filter(each =>
      each.title.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="app-container">
        <div className="header">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            className="history-logo"
            alt="app logo"
          />
          <div className="input-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              className="search-image"
              alt="search"
            />
            <input
              placeholder="search History"
              type="search"
              value={searchInput}
              className="input"
              onChange={this.onChangeSearchInput}
            />
          </div>
        </div>
        <ul className="list-container">
          {searchResult.map(each => (
            <HistoryItem
              historyDetails={each}
              key={each.id}
              deleteHistory={this.deleteHistory}
              updateSearchInput={this.updateSearchInput}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default History
