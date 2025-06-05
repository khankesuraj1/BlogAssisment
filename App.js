import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import BlogList from './BlogList';
import BlogDetail from './BlogDetail';
import BlogCreate from './BlogCreate';
import BlogEdit from './BlogEdit';
import Navbar from './Navbar';
import PrivateRoute from './PrivateRoute';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<BlogList />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/create" element={<PrivateRoute><BlogCreate /></PrivateRoute>} />
        <Route path="/edit/:id" element={<PrivateRoute><BlogEdit /></PrivateRoute>} />
      </Routes>
    </Router>
  );
}

export default App;
