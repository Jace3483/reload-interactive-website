// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyAccount from './MyAccount';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/myaccount" element={<MyAccount />} />
        <Route path="*" element={<p>Page not found</p>} />
      </Routes>
    </Router>
  );
}

export default App;
