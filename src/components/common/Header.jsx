import React, { useState, useContext } from 'react'

import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBBtn,
  MDBIcon,
  MDBNavbarNav,
  MDBInputGroup
} from 'mdb-react-ui-kit';

import { Link } from 'react-router-dom';
import { UserInfoStateConext, UserInfoDispatchConext } from '../../contexts/UserInfoContext';
import ProfileAvatar from './ProfileAvatar'

const Header = () => {

  const userInfo = useContext(UserInfoStateConext);
  const setUserInfo = useContext(UserInfoDispatchConext);

  const [openNav, setOpenNav] = useState(false);

  const handleLogout = () => {
    setUserInfo({type: 'LOGOUT'})
  }

  return (
    <>
      <MDBNavbar expand='lg' light bgColor='light'>
        <MDBContainer fluid className='d-flex justify-content-lg-center'>
          <MDBNavbarToggler
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setOpenNav(!openNav)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>

          <MDBNavbarBrand>
            <img
              alt="our brand logo"
              src="/src/assets/b3f2_brand_resized.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            어디갈까?
          </MDBNavbarBrand>

          <MDBNavbarNav fullWidth={false} className='d-block d-lg-none'>
            <MDBNavbarItem>
              <ProfileAvatar  />
          </MDBNavbarItem>
          </MDBNavbarNav>

          <MDBCollapse navbar open={openNav} className='justify-content-start'>
            <MDBNavbarNav fullWidth={false} className='mr-auto mb-2 mb-lg-0'>
              <MDBNavbarItem>
                <MDBNavbarLink>
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              
              <MDBNavbarItem>
                <MDBNavbarLink>
                  Link
                </MDBNavbarLink>
                
              </MDBNavbarItem>
            </MDBNavbarNav>
              <form className='d-flex input-group me-lg-3 w-50 ps-5'>
                <input 
                  type='search' 
                  className='form-control' 
                  placeholder='장소를 검색하세요.' 
                  aria-label='Search' 
                />
                <MDBBtn color='primary'>검색</MDBBtn>
              </form>
          </MDBCollapse>

          <MDBNavbarNav right fullWidth={false} className='d-none d-lg-block'>
            <MDBNavbarItem className='me-3'>
              {
                userInfo.isLoggedIn ? 
                <ProfileAvatar  handleOnClick={handleLogout} /> : 
                <Link to='/login' >로그인</Link>
              }
          </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBContainer>
      </MDBNavbar>
    </>
  )
}

export default Header
