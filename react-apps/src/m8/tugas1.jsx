import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(5); // Nilai awal 5

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 2)}>Tambah 2</button>
      <button onClick={() => setCount(count - 5)}>Kurang 5</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Counter;