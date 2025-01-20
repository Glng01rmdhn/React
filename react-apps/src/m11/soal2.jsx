import { useState } from 'react';

// Custom Hook untuk mengelola status tugas
function useTaskStatus() {
  const [isTaskCompleted, setIsTaskCompleted] = useState(false);

  const toggleTaskStatus = () => {
    setIsTaskCompleted((prevStatus) => !prevStatus);
  };

  return { isTaskCompleted, toggleTaskStatus };
}

// Komponen utama aplikasi
function TaskStatusApp() {
  const { isTaskCompleted, toggleTaskStatus } = useTaskStatus();

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center', marginTop: '50px' }}>
      <h1>
        {isTaskCompleted ? '✅ Task Completed' : '❌ Task Not Completed'}
      </h1>
      <button 
        onClick={toggleTaskStatus} 
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
          backgroundColor: '#008CBA',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          marginTop: '20px'
        }}
      >
        Toggle Task
      </button>
    </div>
  );
}

export default TaskStatusApp;
    