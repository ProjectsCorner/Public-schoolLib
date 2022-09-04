//react router
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home";
import { Dashboard } from "../Dashboard";
import UploadNotes from "./Uploadnotes";

//components


export default () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dasboard" element={<Dashboard />} />
        <Route path="/uploadnotes" element={<UploadNotes />} />
      </Routes>
    </BrowserRouter>
  );
};