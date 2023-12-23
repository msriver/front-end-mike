import styles from '@/styles/LandingStyles.module.css'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import CourseList from './CourseList';
import KakaoMap from '../kakaomap/KakaoMap';

const mapStyles = {
  maxWidth: '700px',
  minWidth: '450px',
  height: '500px'
}

const RecommendedCourses = () => {

  const locations = [
    {no: 1, locationName: "능이한방백숙", likes: 25, isBooked: false},
    {no: 2, locationName: "스타먹스 마곡나루점", likes: 990, isBooked: false},
    {no: 3, locationName: "불광천", likes: 333, isBooked: true},
    {no: 4, locationName: "황가네 탕후루", likes: 453, isBooked: false}
  ];

  return (
    <Container>
      <Row>
        <Col>
          <KakaoMap styles={mapStyles} />
        </Col>
        <Col>
          <div className={`pt-3 px-3 ${styles['card']}`}>
            <div className={`mb-3 ${styles[`card-header-text`]}`}>장소 목록:</div>
            <CourseList locations={locations} />
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default RecommendedCourses