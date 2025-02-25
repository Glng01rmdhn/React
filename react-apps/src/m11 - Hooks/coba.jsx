import { useState } from "react"; 

// Custom Hook untuk menangani input
function useInput(initialValue) {
  const [value, setValue] = useState(initialValue); // State untuk menyimpan nilai input

  // Fungsi untuk menangani perubahan input
  const handleChange = (e) => {
    setValue(e.target.value); // Mengupdate state dengan nilai yang diketik pengguna
  };

  // Fungsi untuk mereset input ke nilai awal
  const reset = () => { 
    setValue(initialValue);
  };

  // Mengembalikan nilai input, fungsi perubahan, dan fungsi reset
  return [value, handleChange, reset]; 
}

// Komponen Form
function FormExample() {
  const [name, handleNameChange, resetName] = useInput(""); // Menggunakan useInput untuk field nama
  const [email, handleEmailChange, resetEmail] = useInput(""); // Menggunakan useInput untuk field email

  // Fungsi saat form dikirim
  const handleSubmit = (e) => {
    e.preventDefault(); // Mencegah reload halaman
    alert(`Name: ${name}, Email: ${email}`); // Menampilkan data yang diinput pengguna
    resetName(); // Reset input nama
    resetEmail(); // Reset input email
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Input untuk nama */}
      <input
        type="text"
        value={name} // Menampilkan nilai state name
        onChange={handleNameChange} // Memanggil fungsi perubahan saat diketik
        placeholder="Name"
      />
      {/* Input untuk email */}
      <input
        type="email"
        value={email} // Menampilkan nilai state email
        onChange={handleEmailChange} // Memanggil fungsi perubahan saat diketik
        placeholder="Email"
      />
      {/* Tombol untuk submit form */}
      <button type="submit">Submit</button>
    </form>
  );
}

export default FormExample;
