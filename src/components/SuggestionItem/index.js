import './index.css'

const SuggetionItem = props => {
  const {suggestionDetails} = props
  const {suggestion} = suggestionDetails
  return (
    <li className="suggestion">
      <p className="description">{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="image2"
      />
    </li>
  )
}

export default SuggetionItem
