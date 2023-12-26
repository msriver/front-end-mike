import { Route, Routes } from 'react-router-dom';

import Landing from './pages/Landing';
import Layout from './components/siteLayout/Layout';
import LocationList from './pages/LocationList';
import CommunityBoard from './pages/CommunityBoard';

const Router = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Landing />} />
        <Route path="/community" element={<CommunityBoard />} />
        <Route path="/location-list" element={<LocationList />} />
      </Route>
    </Routes>
  )
}

export default Router