import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: 20 }}>
      <h1>Bonjour Ngouye 👋</h1>
      <p>Compteur : {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Ajouter +1
      </button>
    </div>
  );
}

export default App;
