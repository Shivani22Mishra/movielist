import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieTab from '../movieTab/index'
import MovieDetail from '../movieTab/MovieDetail'
function AppRoutes() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MovieTab />} />
          <Route path="/detail/:id" element={<MovieDetail />} />
        </Routes>
      </Router>
    </>
  );
}

export default AppRoutes;
