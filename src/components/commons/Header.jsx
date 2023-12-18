import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavItem } from 'react-bootstrap';

const styles = {
  Header: {
    display: 'flex',
    top: '0px',
    left: '1px',
    width: '1440px',
    height: '121px',
    backgroundColor: '#ffffff',
    boxShadow: '0px 2px 0px rgba(0,0,0,0.08)',
  },
  InputWidth: {
    width: '20% !important'
  },
  Text: {
    color: '#030303',
    fontSize: '40px',
    fontFamily: 'Montserrat',
    fontWeight: 700,
    lineHeight: '52px',
  },
  Input: {
    top: '32px',
    left: '335px',
    width: '428px',
    height: '42px',
    padding: '0px 8px',
    border: '1px solid #dddddd',
    boxSizing: 'border-box',
    borderRadius: '24px',
    boxShadow: '0px 1px 2px rgba(0,0,0,0.08)',
    backgroundColor: '#ffffff',
    color: '#232323',
    fontSize: '14px',
    fontFamily: 'Montserrat',
    fontWeight: 500,
    lineHeight: '18px',
    outline: 'none',
  },

};

const InputField = () => {
  return (
    <input style={styles.Input} placeholder="데이트 코스, 장소들을 검색해보세요" />
  );
};

const Header = () => {

  //TODO: Use reducer instead of useState
  const [user] = useState({name: '강민성'});

  return (

    <Navbar expand="lg" className="bg-transparent mb-5">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt="our brand logo"
            src="/src/assets/b3f2_brand_resized.png"
            width="60"
            height="60"
            className="d-inline-block align-top"
          />{' '}
          <span style={styles.Text}>어디갈까?</span>
        </Navbar.Brand>

        <Form inline>
          <InputField />
        </Form>

        <Nav className="justify-content-end">
          <Nav.Item>
            <Nav.Link href="#features">내 코스</Nav.Link>
          </Nav.Item>
          
          <Nav.Item>
            <Nav.Link href="#pricing">커뮤니티</Nav.Link>
          </Nav.Item>
        </Nav>

        <Navbar.Text>
          <a href="#login">Mark Otto</a>
        </Navbar.Text>
      </Container>
    </Navbar>

      // {/* <div style={styles.Header}>
        
      //   <div style={styles.Text}>
      //     어디갈까?
      //   </div>
        
      //   <div>
      //     <InputField />
      //   </div>

      //   <div>
      //     {user.name}
      //   </div>
        
      // </div> */}

  )
}

export default Header