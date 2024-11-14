import Home from "./components/Home";
import TrackForm from "./components/TrackForm";
import { useState } from "react";
import { Routes, Route, Router } from "react-router-dom";
import "./App.css";
const App = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const handleFormView = () => {
    setIsFormOpen(!isFormOpen);
  };
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-track" element={<TrackForm />} />
        <Route path="/edit-track/:trackId" element={<TrackForm />} />
      </Routes>
    </>
  );
};

export default App;
