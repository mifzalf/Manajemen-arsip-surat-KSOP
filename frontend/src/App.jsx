import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import Dashboard from "./pages/Dashboard";
import IncomingLetters from "./pages/IncomingLetter/IncomingLetters";
import OutgoingLetters from "./pages/OutgoingLetter/OutgoingLetters";
import Archives from "./pages/Archives";
import IncomingLetterForm from "./pages/IncomingLetter/IncomingLetterForm";
import OutgoingLetterForm from "./pages/OutgoingLetter/OutgoingLetterForm";
import UserProfiles from "./pages/UserProfiles";
import IncomingLetterDetail from "./pages/IncomingLetter/IncomingLetterDetail";
import OutgoingLetterDetail from "./pages/OutgoingLetter/OutgoingLetterDetail";
import SignIn from "./pages/AuthPages/SignIn";
import Settings from "./pages/Settings";
import ClassificationManagement from "./pages/master/ClassificationManagement";
import UserManagement from "./pages/master/UserManagement";
import UserAddForm from "./pages/master/UserAddForm";
import ClassificationForm from "./pages/master/ClassificationForm";
import ActivityLog from "./pages/master/ActivityLog";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/incoming-letters" element={<IncomingLetters />} />
          <Route path="/outgoing-letters" element={<OutgoingLetters />} />
          <Route path="/archives" element={<Archives />} />
          <Route path="/incoming-letter-form" element={<IncomingLetterForm />} />
          <Route path="/outgoing-letter-form" element={<OutgoingLetterForm />} />
          <Route path="/profile" element={<UserProfiles />} />
          <Route path="/incoming-letters/:id" element={<IncomingLetterDetail />} />
          <Route path="/outgoing-letters/:id" element={<OutgoingLetterDetail />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/master/classification" element={<ClassificationManagement />} />
          <Route path="/master/classification/add" element={<ClassificationForm />} />
          <Route path="/master/users" element={<UserManagement />} />
          <Route path="/master/users/add" element={<UserAddForm />} />
          <Route path="/master/activity-log" element={<ActivityLog />} />
        </Route>
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;