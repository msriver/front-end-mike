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
      <Container fluid>
        <Navbar.Brand href="#home">
          <img
            alt="our brand logo"
            src="/src/assets/b3f2_brand_resized.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          어디갈까?
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          </Form>

          <Nav className="justify-content-end flex-grow-1 pe-3">
            <Nav.Link href="#deets">
              커뮤니티
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              코스 찾기
            </Nav.Link>

            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                내 정보 보기
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                내가 쓴 글 보기
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Something
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                로그아웃
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header