import {Component} from 'react'

import './index.css'

import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props
    const searchResults = destinationsList.filter(eachDestination =>
      eachDestination.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="mainContainer">
        <h1>Destination Search</h1>
        <div className="inputDivContainer">
          <input
            type="search"
            placeholder="Search"
            onChange={this.onChangeSearchInput}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
          />
        </div>
        <ul className="unorderedList">
          {searchResults.map(each => (
            <DestinationItem key={each.id} eachDestination={each} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
