import styles from '@/styles/LandingStyles.module.css'

const cardItemStyles = {
  width: '23%',
  height: '400px'
};

const CourseCardItem = (props) => {
  return (
    <div className="card" style={cardItemStyles}>
      <img className="card-img-top" src={props.imgUrl} alt="Card image"></img>
      <div class="card-body">
        <h4 className="card-title">{props.locationName}</h4>
        <p className="card-text">{props.shortDescription}</p>
      </div>
    </div>
  )
}

export default CourseCardItem