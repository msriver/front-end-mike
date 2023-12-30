import { Route, Routes } from 'react-router-dom';

import Layout from './components/siteLayout/Layout';
import SignUpLayout from './components/siteLayout/SignUpAndLoginLayout';

import Landing from './pages/Landing';
import LocationList from './pages/LocationList';
import CommunityBoard from './pages/CommunityBoard';
import SignUp from './pages/SignUp';
import Login from './pages/Login';

const Router = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Landing />} />
        <Route path="/community" element={<CommunityBoard />} />
        <Route path="/location-list" element={<LocationList />} />
      </Route>

      <Route element={<SignUpLayout />}>
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  )
}

export default Router