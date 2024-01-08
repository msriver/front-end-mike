import React, { createContext, useReducer, useContext, useState } from 'react';
import axios from 'axios';

export const UserInfoStateConext = createContext(null);
export const UserInfoDispatchConext = createContext(null);

const initialSignUpData = {
  email: '',
  nickname: '',
  password: '',
  zipCode: '',
  city: '',
  street: '',
  mbti: '',
  gender: ''
};

const initialCurrentUserInfo = {
  code: '',
  status: '',
  message: '',
  data : {
    id : 1,
    email : "user@gmail.com",
    password : "$2a$10$/2JPXlQ.l039aMPqtaW2YO9BFjTgIObFmeuhsz0VApDd6iRgGzOzK",
    nickName : "user",
    address : {
      city : "서울특별시",
      street : "도봉구 도봉로 106길 23",
      zipcode : "102동 208호"
    },
    birth : "20000418",
    gender : "MAN",
    role : "ROLE_USER",
    refreshToken : null
  }
};

const initialUserInfo = {
  signupData: initialSignUpData,
  currentUserData: initialCurrentUserInfo,
  isLoggedIn: true
};

const userInfoReducer = (state, action) => {
  switch (action.type) {
    case 'SET_SIGNUP_INFO':
      return {
        ...state,
        signupData: {
          ...state.signupData,
          [action.fieldName]: action.fieldValue
        }
      };
    case 'CLEAR_SIGNUP_INFO':
      return initialUserInfo;
    case 'LOGOUT':
      return {
        ...state,
        isLoggedIn: false
      }
    default:
      throw new Error('Invalid action type');
  }
}

export const UserProvider = ({children}) => {

  const [userInfo, setUserInfo] = useReducer(userInfoReducer, initialUserInfo);

  return (
    <UserInfoStateConext.Provider value={userInfo}>
      <UserInfoDispatchConext.Provider value={setUserInfo}>
        {children}
      </UserInfoDispatchConext.Provider>
    </UserInfoStateConext.Provider>
  );
}
