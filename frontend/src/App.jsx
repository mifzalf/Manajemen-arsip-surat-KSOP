import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import Dashboard from "./pages/Dashboard";
import IncomingLetters from "./pages/IncomingLetters";
import OutgoingLetters from "./pages/OutgoingLetters";
import Archives from "./pages/Archives";
import IncomingLetterForm from "./pages/IncomingLetterForm";
import OutgoingLetterForm from "./pages/OutgoingLetterForm";
import UserProfiles from "./pages/UserProfiles"; // <-- 1. Impor halaman profil

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
          <Route path="/profile" element={<UserProfiles />} /> {/* <-- 2. Tambahkan rute untuk profil */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;