import React, { useState } from 'react'

//React-Bootstrap components
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

//css module
import styles from '@/styles/HeaderStyles.module.css';

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
          <span className={styles.Text}>어디갈까?</span>
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
  )
}

export default Header