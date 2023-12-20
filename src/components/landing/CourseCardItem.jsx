import styles from '@/styles/LandingStyles.module.css'

const CourseCardItem = (props) => {
  return (
    <div className={styles['course-card-item']}>
      <div className="card">
        <img className="card-img-top" src={props.imgUrl} alt="Card image"></img>
        <div className="card-img-overlay">
          <div>
            <h4 className="card-title">{props.locationName}</h4>
            <p className="card-text">{props.shortDescription}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseCardItem