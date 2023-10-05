import './index.css'

const DestinationItem = props => {
  const {eachDestination} = props
  const {name, imgUrl} = eachDestination

  return (
    <div className="itemContainer">
      <img src={imgUrl} alt={name} className="destinationImage" />
      <p>{name}</p>
    </div>
  )
}

export default DestinationItem
