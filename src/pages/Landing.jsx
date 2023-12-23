//importing each section
import RecommendedCourses from '../components/landing/RecommendedCourses'
import Courses from '../components/landing/Courses'

//React-bootstrap
import Stack from 'react-bootstrap/Stack';

const popularLocations = [
  {imgUrl: '@/assets/sampleCardImage.jpeg', no: 1, locationName: 'Mega Coffee', shortDescription: '맛있는 커피와 빵을 즐길 수 있다!'},
  {imgUrl: '@/assets/sampleCardImage.jpeg', no: 2, locationName: '낙산 공원', shortDescription: '야경이 좋다.'},
  {imgUrl: '@/assets/sampleCardImage.jpeg', no: 3, locationName: '경복궁', shortDescription: '소갈비가 맛있다.'},
  {imgUrl: '@/assets/sampleCardImage.jpeg', no: 4, locationName: '청와대', shortDescription: '정통중국집. 간짜장이 맛있다.'},
];

const recentlyAddedLocations = [
  {imgUrl: '@/assets/sampleCardImage.jpeg', no: 1, locationName: '영등포시장', shortDescription: '맛있는 커피와 빵을 즐길 수 있다!'},
  {imgUrl: '@/assets/sampleCardImage.jpeg', no: 2, locationName: '여기어때지점', shortDescription: '야경이 좋다.'},
  {imgUrl: '@/assets/sampleCardImage.jpeg', no: 3, locationName: '창덕궁', shortDescription: '소갈비가 맛있다.'},
  {imgUrl: '@/assets/sampleCardImage.jpeg', no: 4, locationName: 'ㅇㅇㅇ', shortDescription: '정통중국집. 간짜장이 맛있다.'},
];

const firstSectionTitle = 'xxx구의 인기 코스';
const secondSectionTitle = '최근 올라온 코스';

const Landing = (props) => {

  return (
    <Stack gap={5}>
      {/** 해당 User의 MBTI 맞춤 코스 */}
      <RecommendedCourses />

      {/** 해당 구의 인기 코스 */}
      <Courses 
          title={firstSectionTitle} 
          locations={popularLocations} 
      />

      {/** 최근 올라온 코스 */}
      <Courses 
          title={secondSectionTitle} 
          locations={recentlyAddedLocations} 
      />
    </Stack>
  )
}

export default Landing;