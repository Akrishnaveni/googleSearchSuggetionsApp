import 'index.css'

const SuggetionItem = props => {
  const {suggetion} = props

  return (
    <li className="suggetion">
      <p className="description">{suggetion}</p>
      <img src="" alt="arrow" className="image2" />
    </li>
  )
}
