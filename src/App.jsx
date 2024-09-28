import React from "react";
import './App.css'
import Landing from "./pages/Landing";
import { Routes, Route } from "react-router-dom";
import Add from "./components/Add";
import View from "./components/View";
import Edit from "./components/Edit";
import Delete from "./components/Delete";
import ContactDetails from "./components/ContactDetails";
import './bootstrap.min.css';

function App() {

  return (
    <>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/add" element={<Add />} />
          <Route path="/view" element={<View />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/delete" element={<Delete />} />
          <Route path="/contacts/:id" element={<ContactDetails />} />
        </Routes>
    </>
  )
}

export default App
