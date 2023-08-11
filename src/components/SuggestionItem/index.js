import 'index.css'

const SuggetionItem = props => {
  const {suggestionDetails} = props
  const {id, suggestion} = suggestionDetails
  return (
    <li className="suggetion">
      <p className="description">{suggetion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="image2"
      />
    </li>
  )
}

export default SuggetionItem
