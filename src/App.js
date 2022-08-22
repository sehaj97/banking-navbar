import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import MainNavbar from "./components/main-navbar/main-navbar.component";
import PersonalNavbar from "./components/personal-navbar/personal-navbar.component";
import PhNavbar from "./components/ph-navbar/ph-navbar.component";

function Personal() {
  return <h1>I am Personal</h1>;
}
function Business() {
  return <h1>I am Business</h1>;
}
function PV() {
  return <h1>I am privatehealth</h1>;
}
function App() {
  return (
    <Routes>
      <Route path="/" element={<MainNavbar />}>
        <Route path="personal" element={<PersonalNavbar />}>
          <Route key="ba" path="ba" element={<Personal />} />
          <Route path="cc" element={<PV />} />
          <Route path="m" element={<Business />} />
        </Route>
        <Route path="privatehealth" element={<PhNavbar />}>
          <Route key="ba" path="ba" element={<Personal />} />
          <Route path="cc" element={<PV />} />
        </Route>
        {/* to do */}
        <Route path="privatehealth" element={<PersonalNavbar />} />
        <Route path="business" element={<PersonalNavbar />} />
        <Route path="commercial" element={<PersonalNavbar />} />
        <Route path="capitalmarkets" element={<PersonalNavbar />} />
        <Route path="GAM" element={<PersonalNavbar />} />
      </Route>
    </Routes>
  );
}

export default App;
