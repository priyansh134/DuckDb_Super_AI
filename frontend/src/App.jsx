import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ChatPage from './page/Chatpage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="" element={<ChatPage />} />
      </Routes>
    </Router>
  );
};

export default App;
