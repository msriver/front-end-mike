import styles from '@/styles/LandingStyles.module.css'

import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple
} from 'mdb-react-ui-kit';

const cardItemStyles = {
  width: '23%',
  height: '400px'
};

const CourseCardItem = (props) => {
  return (

    <MDBCard>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/111.webp' fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>{props.locationName}</MDBCardTitle>
        <MDBCardText>
          {props.shortDescription}
        </MDBCardText>
      </MDBCardBody>
    </MDBCard>
    // <div className="card" style={cardItemStyles}>
    //   <img className="card-img-top" src={props.imgUrl} alt="Card image"></img>
    //   <div class="card-body">
    //     <h4 className="card-title">{props.locationName}</h4>
    //     <p className="card-text">{props.shortDescription}</p>
    //   </div>
    // </div>
  )
}

export default CourseCardItem