import { useState, useEffect } from 'react';
import { auth } from './services/firebase';

import './App.css';
import Navigation from './components/Navigation';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(user => setUser(user));
  }, []);

  return (
    <div className="app-container">
      <Navigation user={user} />
      <Main user={user} />
      <Footer />
    </div>
  );
}

export default App;
