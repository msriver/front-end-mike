import React from 'react'

import Image from '../components/Image';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { loginImageContainer } from '../styles/LoginStyles';

const defaultStyles = {
  pageContainer: {
    display: 'table',
    width: '100%'
  },
  leftSide: {
    display: 'table-cell',
    height: '100%'
  },
  rightSide: {
    display: 'table-cell',
    verticalAlign: 'top',
    backgroundColor: 'rgb(216, 221, 230)',
    width: '50%',
    height: '100%',
    color: 'rgba(255, 255, 255, 0.6)'
  }
}

const Login = () => {
  return (
    <div style={defaultStyles.pageContainer}>
      <div style={defaultStyles.leftSide}>

      </div>

      <div style={defaultStyles.rightSide}>

      </div>
    </div>

  )
}

export default Login;