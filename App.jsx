
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import AdminLayout from "./components/AdminLayout";
import Dashboard from "./components/Dashboard";
import Learners from "./components/Learners";
import Courses from "./components/Courses";
import LearnerProfile from "./components/LearnerProfile";

import CourseDetails from "./components/CourseDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AdminLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/apprenants" element={<Learners />} />
          <Route
            path="/apprenants/:id"
            element={<LearnerProfile />}
          />
          <Route path="/formations" element={<Courses />} />
          <Route
            path="/formations/:id"
            element={<CourseDetails />}
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;






