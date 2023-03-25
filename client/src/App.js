import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CampaignDetails from "./pages/CampaignDetails";
import CreateCampaign from "./pages/CreateCampaign";
import Profile from "./pages/Profile";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import "./index.css";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="home_container">
        <aside>
          <Sidebar />
        </aside>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/addProject" element={<CreateCampaign />} />
            <Route path="/details/:id" element={<CampaignDetails />} />
            <Route path="/payement" element={<CampaignDetails />} />
            <Route path="/wwidraw" element={<CampaignDetails />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/logout" element={<CampaignDetails />} />
          </Routes>
        </main>
      </div>
    </>
  );
};

export default App;
