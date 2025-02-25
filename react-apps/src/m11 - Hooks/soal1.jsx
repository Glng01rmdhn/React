import { useState, useEffect } from "react"; 

// Custom Hook untuk menangani tema
function useTheme(initialTheme = "light") {
  const [theme, setTheme] = useState(initialTheme); // State untuk menyimpan tema saat ini

  // Efek samping untuk memantau perubahan tema
  useEffect(() => {
    console.log(`Tema saat ini: ${theme}`); // Mencetak tema saat ini ke konsol setiap kali theme berubah
  }, [theme]); // useEffect hanya berjalan ketika `theme` berubah

  // Fungsi untuk mengganti tema antara "light" dan "dark"
  const toggleTheme = () => {  
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return [theme, toggleTheme]; // Mengembalikan nilai theme dan fungsi toggleTheme
}

// Komponen utama yang menggunakan useTheme
function ThemeSwitcher() {
  const [theme, toggleTheme] = useTheme(); // Menggunakan custom hook untuk mengatur tema

  return (
    <div 
      style={{ 
        background: theme === "light" ? "#fff" : "#333", // Mengubah background berdasarkan tema
        color: theme === "light" ? "#000" : "#fff", // Mengubah warna teks berdasarkan tema
        padding: "400px" // Memberikan padding agar tampilan lebih luas
      }}
    >
      {/* Menampilkan tema yang sedang digunakan */}
      <p>The theme currently in use: {theme}</p>
      
      {/* Tombol untuk mengganti tema */}
      <button 
        style={{ padding: "10px", fontSize: "16px" }} 
        onClick={toggleTheme}
      >
        Click for change theme
      </button>
    </div>
  );
}

export default ThemeSwitcher;
