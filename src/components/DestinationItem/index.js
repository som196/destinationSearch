import './index.css'

const DestinationItem = props => {
  const {eachDestination} = props
  const {name, imgUrl} = eachDestination

  return (
    <div>
      <li>
        <img src={imgUrl} alt={name} />
        <p>{name}</p>
      </li>
    </div>
  )
}

export default DestinationItem
