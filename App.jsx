

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import AdminLayout from "./AdminLayout";
import Dashboard from "./Dashboard";
import Learners from "./Learners";
import Courses from "./Courses";
import LearnerProfile from "./LearnerProfile";
import CourseDetails from "./CourseDetails";

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

