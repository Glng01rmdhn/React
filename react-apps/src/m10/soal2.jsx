import React, { useState, useEffect } from 'react';

function CountLogger() {
  const [count, setCount] = useState(0); // State untuk menghitung jumlah klik

  useEffect(() => {
    // Efek dijalankan setiap kali `count` berubah
    console.log(`Count berubah menjadi ${count}`);
  }, [count]); // Dependency array hanya memantau perubahan pada `count`

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Tambah</button>
    </div>
  );
}

export default CountLogger;
