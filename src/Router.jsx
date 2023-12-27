import { Route, Routes } from 'react-router-dom';

import Landing from './pages/Landing';
import Layout from './components/siteLayout/Layout';
import LocationList from './pages/LocationList';
import CommunityBoard from './pages/CommunityBoard';
import Login from './pages/Login';

const Router = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Landing />} />
        <Route path="/community" element={<CommunityBoard />} />
        <Route path="/location-list" element={<LocationList />} />
      </Route>

      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default Router