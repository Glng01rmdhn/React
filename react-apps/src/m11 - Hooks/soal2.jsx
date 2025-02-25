import { useState } from 'react';

// Custom Hook untuk mengelola status tugas
function useTaskStatus() {
  const [isTaskCompleted, setIsTaskCompleted] = useState(false); // State untuk status tugas (selesai/belum)

  // Fungsi untuk mengubah status tugas
  const toggleTaskStatus = () => {
    setIsTaskCompleted((prevStatus) => !prevStatus); // Mengubah nilai isTaskCompleted menjadi kebalikannya
  };

  return { isTaskCompleted, toggleTaskStatus }; // Mengembalikan status tugas dan fungsi untuk mengubahnya
}

// Komponen utama aplikasi
function TaskStatusApp() {
  const { isTaskCompleted, toggleTaskStatus } = useTaskStatus(); // Menggunakan custom hook

  return (
    <div 
      style={{ 
        fontFamily: 'Arial, sans-serif', 
        textAlign: 'center', 
        marginTop: '50px' 
      }}
    >
      {/* Menampilkan status tugas */}
      <h1>
        {isTaskCompleted ? '✅ Task Completed' : '❌ Task Not Completed'}
      </h1>

      {/* Tombol untuk mengubah status tugas */}
      <button 
        onClick={toggleTaskStatus} 
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
          backgroundColor: '#EFB036', // Warna tombol
          color: '#872341', // Warna teks
          border: 'none',
          borderRadius: '5px',
          marginTop: '20px',
        }}
      >
        Toggle Task
      </button>
    </div>
  );
}

export default TaskStatusApp;
