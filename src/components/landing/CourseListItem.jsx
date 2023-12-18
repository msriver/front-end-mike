import React from 'react'
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';

const imgStyle = {
  width: '24px',
  height: '24px',
}

const CourseListItem = (props) => {
  
  const getIconPerIsBooked = function(isBooked) {
    return (<img style={imgStyle} src={isBooked ? 'src/assets/favorite.svg' : 'src/assets/favorite_border.svg'}></img>);
  }

  return (
    <ListGroup.Item>
      <div className="row">
        <div className="col-sm-1">{props.course.no}</div>
        <div className="col-sm-1">{getIconPerIsBooked(props.course.isBooked)}</div>
        <div className="col-sm-8">{props.course.locationName}</div>
        <div className="col-sm-2">{props.course.likes}</div>
      </div>
    </ListGroup.Item>
  )
}

CourseListItem.propTypes = {
  course: PropTypes.exact({
    no: PropTypes.number,
    locationName: PropTypes.string,
    likes: PropTypes.number,
    isBooked: PropTypes.bool
  })
}

export default CourseListItem