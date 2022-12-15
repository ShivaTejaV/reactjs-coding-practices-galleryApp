// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {id, thumbnailUrl, thumbnailAltText, isSelected, selectImg} = props

  const onClickImage = () => {
    selectImg(id)
  }

  const ifSelected = isSelected ? 'opacity' : ''
  return (
    <li key={id}>
      <button className="customButton">
        <img
          src={thumbnailUrl}
          className={`thumbnail ${ifSelected}`}
          alt={thumbnailAltText}
          onClick={onClickImage}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
