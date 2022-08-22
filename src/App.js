import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import MainNavbar from "./components/main-navbar/main-navbar.component";
import PersonalNavbar from "./components/personal-navbar/personal-navbar.component";
import PhNavbar from "./components/ph-navbar/ph-navbar.component";

function BA() {
  return <h1>I am BANK ACCOUNTS</h1>;
}
function CC() {
  return <h1>I am CREDIT CARDS</h1>;
}
function M() {
  return <h1>I am MORTGAGES</h1>;
}
function App() {
  return (
    <Routes>
      <Route path="/" element={<MainNavbar />}>
        <Route path="personal" element={<PersonalNavbar />}>
          <Route key="ba" path="ba" element={<BA />} />
          <Route path="cc" element={<CC />} />
          <Route path="m" element={<M />} />
        </Route>
        <Route path="privatehealth" element={<PhNavbar />}>
          <Route key="ba" path="ba" element={<BA />} />
          <Route path="cc" element={<CC />} />
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
