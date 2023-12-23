/**
 * Landing 페이지의 인기 코스 섹션과 최근 코스 섹션을 위한 component
 */
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
    <div className='container'>
      <span className={styles['landing-header-text']}>
        {props.title}
      </span>
      <div className="mt-3 d-flex flex-fill justify-content-between">
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