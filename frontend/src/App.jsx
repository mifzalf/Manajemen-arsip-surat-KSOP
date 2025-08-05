import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import Dashboard from "./pages/Dashboard";
import IncomingLetters from "./pages/IncomingLetters";
import OutgoingLetters from "./pages/OutgoingLetters";
import Archives from "./pages/Archives";
import IncomingLetterForm from "./pages/IncomingLetterForm";
import OutgoingLetterForm from "./pages/OutgoingLetterForm";
import UserProfiles from "./pages/UserProfiles";
import IncomingLetterDetail from "./pages/IncomingLetterDetail";
import OutgoingLetterDetail from "./pages/OutgoingLetterDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index path="/" element={<Dashboard />} />
          <Route path="/incoming-letters" element={<IncomingLetters />} />
          <Route path="/outgoing-letters" element={<OutgoingLetters />} />
          <Route path="/archives" element={<Archives />} />
          <Route path="/incoming-letter-form" element={<IncomingLetterForm />} />
          <Route path="/outgoing-letter-form" element={<OutgoingLetterForm />} />
          <Route path="/profile" element={<UserProfiles />} />
          <Route path="/incoming-letters/:id" element={<IncomingLetterDetail />} />
          <Route path="/outgoing-letters/:id" element={<OutgoingLetterDetail />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;