import styles from '@/components/commons/LandingStyles.module.css'

import CourseList from './CourseList';
import CourseCardImage from './CourseCardImage';

const defaultProps = {
  image: 'https://images.unsplash.com/photo-1679678691006-0ad24fecb769?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MXwxfHNlYXJjaHwxfHxOYXR1cmV8ZW58MXx8fHwxNjk5NjA3NDM3fDA&ixlib=rb-4.0.3&q=80&w=1080',
}

const imgStyles = {
  ImageContainer: {
    top: '234px',
    left: '51px',
    width: '686px',
    height: '580px',
    borderRadius: '24px',
    backgroundImage: 'url(./image.jpeg)',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
};

const RecommendedCourses = () => {

  const locations = [
    {no: 1, locationName: "능이한방백숙", likes: 25, isBooked: false},
    {no: 2, locationName: "스타먹스 마곡나루점", likes: 990, isBooked: false},
    {no: 3, locationName: "불광천", likes: 333, isBooked: true},
    {no: 4, locationName: "황가네 탕후루", likes: 453, isBooked: false}
  ];

  return (
    <div className={styles['grid-container']}>
      <div className={`${styles['grid-item']} ${styles['landing-header-text']}`}>XXX님을 위한 추천코스입니다!</div>
      <div className={styles['grid-item']}>
        <CourseCardImage image={defaultProps.image} styleOverride={imgStyles.ImageContainer} />
      </div>
      <div className={`${styles['grid-item']} ${styles['card']}`}>
        <div className="container pt-3 px-3">
          <div className={`mb-3 ${styles[`card-header-text`]}`}>장소 목록:</div>
          <CourseList locations={locations} />
        </div>
      </div>
    </div>
  )
}

export default RecommendedCourses