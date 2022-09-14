import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import store from '../redux/configureStore';

import Greeting from './Greeting'

const App = () => (
  <>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<div>Hello Everyone</div>} />
          <Route path="/greeting" element={<Greeting />} />
        </Routes>
      </Router>
    </Provider>
  </>
)

export default App