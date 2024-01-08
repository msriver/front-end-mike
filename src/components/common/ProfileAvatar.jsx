import React from 'react'
import {
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
} from "mdb-react-ui-kit";


const ProfileAvatar = (props) => {
  return (
    <MDBDropdown>
      <MDBDropdownToggle
        tag="a"
        className="nav-link d-flex align-items-center"
        href="#"
      >
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img(31).webp"
          className="rounded-circle"
          height="33"
          alt="Avatar"
          loading="lazy"
        />
      </MDBDropdownToggle>
      <MDBDropdownMenu>
        <MDBDropdownItem link>
          내 프로필
        </MDBDropdownItem>
        <MDBDropdownItem link>
          내가 쓴 게시글
        </MDBDropdownItem>
        <MDBDropdownItem link onClick={props.handleOnClick}>
          로그아웃
        </MDBDropdownItem>
      </MDBDropdownMenu>
    </MDBDropdown>
  )
}

export default ProfileAvatar