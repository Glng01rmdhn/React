import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0); // count buat nyimpen angka yany di tampilin
 // setCount digunakan untuk menambah angka saat tombol diklik.


  useEffect(() => {
    console.log('Component mounted or count changed!');
  }, [count]); // [count] -> Dependency array memantau perubahan count

  return (
    <div>
      <p>Count: {count}</p> 
      {/* count buat nampilin angka */}
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;


//gpt
