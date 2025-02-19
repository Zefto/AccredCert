import { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import * as React from 'react';

function App() {
  return (
    <Router>
      <Suspense
        fallback={
          <div className="flex justify-center items-center h-screen">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-yellow-400 border-opacity-75"></div>
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home/>} /> 
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
