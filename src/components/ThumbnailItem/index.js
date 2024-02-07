// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {eachItem} = props
  const {thumbnailUrl, thumbnailAltText} = eachItem
  return (
    <li>
      <img src={thumbnailUrl} className="thumbnail" alt={thumbnailAltText} />
    </li>
  )
}
export default ThumbnailItem
