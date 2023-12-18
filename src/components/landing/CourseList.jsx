import React from 'react'
import CourseListItem from './CourseListItem';
import PropTypes from 'prop-types';

import ListGroup from 'react-bootstrap/ListGroup';

const CourseList = (props) => {

  let courseItems = props.locations.map((item, index) => {
    return (
      <CourseListItem key={index} course={item} />
    );
  });

  return (
    <div>
      <ListGroup variant="flush">
        {courseItems}
      </ListGroup>
    </div>
  )
}

CourseList.propTypes = {
  locations: PropTypes.array
}

export default CourseList