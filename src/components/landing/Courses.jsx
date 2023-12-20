import PropTypes from 'prop-types';
import CourseCardItem from './CourseCardItem';
import styles from '@/styles/LandingStyles.module.css'

const Courses = (props) => {

  const cards = props.locations.map((item, index) => {
    return (
      <CourseCardItem 
        key={index} 
        imgUrl={item.imgUrl} 
        locationName={item.locationName} 
        shortDescription={item.shortDescription}
      />
    );
  });

  return (
    <div>
      <span className={styles['landing-header-text']}>{props.title}</span>
      <div className="d-flex flex-fill justify-content-between">
        {cards}
      </div>
    </div>
  )
}

Courses.propTypes = {
  title: PropTypes.string,
  locations: PropTypes.array,
}

export default Courses