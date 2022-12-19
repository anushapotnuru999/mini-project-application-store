// Write your code here

import './index.css'

const AppItem = props => {
  const {eachListing} = props
  const {appName, imageUrl} = eachListing

  return (
    <li className="card1">
      <img className="image-size" alt={appName} src={imageUrl} />
      <p className="para2">{appName}</p>
    </li>
  )
}

export default AppItem
