import { useState } from "react";

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const reset = () => { 
    setValue(initialValue);
  };

  return [value, handleChange, reset];
}

// Penggunaan
function FormExample() {
  const [name, handleNameChange, resetName] = useInput("");
  const [email, handleEmailChange, resetEmail] = useInput("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${name}, Email: ${email}`);
    resetName();
    resetEmail();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={handleNameChange}
        placeholder="Name"
      />
      <input
        type="email"
        value={email}
        onChange={handleEmailChange}
        placeholder="Email"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default FormExample;
