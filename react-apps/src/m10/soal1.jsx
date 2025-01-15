import React, { useState,useEffect } from 'react';

function counter() {
    const [count,setCount] = useState(0); //state untuk menghitung jumlah klik 

    useEffect(() => {
        // Efek yang dijalankan setiap kali elemen di render ulang 
        console.log('efek di jalankan');
    });
    
    return (
        <div>
            <h1>Hasil Klik:{count}</h1>
            <button onClick={() => setCount(count + 1)}>KLIK BIAR NAMBAH</button>
        </div>
    );
}
export default counter;