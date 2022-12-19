// Write your code here

import './index.css'

const TabItem = props => {
  const {eachTab, clickTabITem, isActive} = props
  const {tabId, displayText} = eachTab

  const addingClass = isActive ? 'active' : ''

  const passingTab = () => {
    clickTabITem(tabId)
  }

  return (
    <li className="li-element">
      <button
        type="button"
        onClick={passingTab}
        className={`button ${addingClass}`}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
