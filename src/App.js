// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import MediaSources from './components/MediaSources';
import MediaContents from './components/MediaContents';
import Reports from './components/Reports';
import './assets/styles.css'; // يمكنك إنشاء ملف CSS عام للتصميم

function App() {
  return (
    <Router>
      <Header />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<MediaSources />} />
          <Route path="/contents" element={<MediaContents />} />
          <Route path="/reports" element={<Reports />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
