import React, { useState, useEffect } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('Efek dijalankan');
    }, []); //dependency array yang kosong // Hanya berjalan saat komponen pertama kali dirender

    return (
        <div>
            <h1>Hasil Klik: {count}</h1>
            <button onClick={() => setCount(count + 1)}>KLIK BIAR NAMBAH</button>
        </div>
    );
}

export default Counter;
