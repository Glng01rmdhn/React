import { useState, useEffect } from "react";

function useTheme(initialTheme = "light") {
  const [theme, setTheme] = useState(initialTheme);

  // Efek samping untuk memantau perubahan tema
  useEffect(() => {
    console.log(`Tema saat ini: ${theme}`);
  }, [theme]);

  // Fungsi untuk mengubah tema
  const toggleTheme = () => {  
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
// toggleTheme(); untuk mengganti tema 
  return [theme, toggleTheme];
}

// Contoh penggunaan di komponen
function ThemeSwitcher() {
  const [theme, toggleTheme] = useTheme();

  return (
    <div style={{ background: theme === "light" ? "#fff" : "#333", color: theme === "light" ? "#000" : "#fff", padding: "400px" }}>
      <p>The theme currently in use: {theme}</p>
      <button padding="40px" onClick={toggleTheme}>Click for change theme</button>
    </div>
  );
}

export default ThemeSwitcher;
