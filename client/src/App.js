import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Portfolio } from './pages';

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route
            path='/'
            element={<Portfolio />}
          />
        </Routes>
      </>
    </Router>
  );
}

export default App;
