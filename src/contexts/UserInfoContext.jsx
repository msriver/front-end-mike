import React, { createContext, useReducer, useContext, useState } from 'react';
import axios from 'axios';

export const UserInfoStateConext = createContext(null);
export const UserInfoDispatchConext = createContext(null);
// const UserInfoDispatchContext = createContext(null);

const initialUserInfo = {};

const userInfoReducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER_INFO':
      return {
        ...state,
        [action.fieldName]: action.fieldValue
      };
    case 'CLEAR_USER_INFO':
      return initialUserInfo;
    default:
      break;
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
