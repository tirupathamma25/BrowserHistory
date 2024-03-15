import './index.css'

const HistoryItem = props => {
  const {historyDetails, deleteHistory} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = historyDetails

  const onClickDeleteHistory = () => {
    deleteHistory(id)
  }
  return (
    <div>
      <li className="list-item">
        <div className="domain-card">
          <p className="time">{timeAccessed}</p>
          <img src={logoUrl} alt="domain logo" className="domain-url" />
          <p className="time">{title}</p>
          <p className="domain">{domainUrl}</p>
        </div>
        <button
          type="button"
          data-testid="delete"
          className="delete-button"
          onClick={onClickDeleteHistory}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </li>
    </div>
  )
}

export default HistoryItem
