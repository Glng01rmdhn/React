import React, { useState, useEffect } from 'react';

function SearchComponent() {
  const [query, setQuery] = useState(''); // query menyimpan teks pencarian yang diketik pengguna.

  const [results, setResults] = useState([]); //results menyimpan hasil pencarian dari API.

  useEffect(() => {
    if (query) {
      // Simulasi pengambilan data dari API
      const fetchData = async () => {
        const data = await fetch(`https://api.example.com/search?q=${query}`);
        const json = await data.json();
        setResults(json.results);
      };

      fetchData();
    }
  }, [query]); // Efek dijalankan ulang setiap kali query berubah

  return (
    <div>
      <input 
        type="text" 
        placeholder="Search..." 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
      />
      <ul>
        {results.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchComponent;
