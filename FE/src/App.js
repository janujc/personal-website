import { useEffect, useState } from 'react';
import { auth } from './firebase';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((u) => setUser(u));
    auth.getRedirectResult().catch((err) => console.error(err));
    return unsubscribe;
  }, []);

  const signIn = () => {
    const provider = new window.firebase.auth.GoogleAuthProvider();
    auth.signInWithRedirect(provider).catch((err) => console.error(err));
  };

  const signOut = () => auth.signOut();

  if (!user) {
    return (
      <div className="App">
        <button onClick={signIn}>Sign In with Google</button>
      </div>
    );
  }

  return (
    <div className="App">
      <h1>Hello from React</h1>
      <button onClick={signOut}>Sign Out</button>
    </div>
  );
}

export default App;
