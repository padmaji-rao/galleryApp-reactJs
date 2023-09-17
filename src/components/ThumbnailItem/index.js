import './index.css'

const ThumbnailItem = props => {
  const {thumbnailUrl, thumbnailAltText, updateImageId, id, isActive} = props
  const ActiveClassName = isActive ? 'active' : ''
  const OnClickThumbnail = () => {
    console.log('In onClick method upside ')
    console.log(id)

    updateImageId(id)
    console.log('In onClick method')
  }
  return (
    <li>
      <button
        className={`thumbnail-element ${ActiveClassName}`}
        onClick={OnClickThumbnail}
        type="button"
      >
        <img src={thumbnailUrl} alt={thumbnailAltText} />
      </button>
    </li>
  )
}

export default ThumbnailItem
